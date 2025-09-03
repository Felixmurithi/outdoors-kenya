import { supabase } from "./supabase";

// Helper to generate slug from name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with single
    .trim();
};

type BasicDetails = {
  id?: string;
  basic: {
    name: string;
    county: string;
    type: string;
  };
  fees: {
    currency: string[];
    adult: (string | number)[];
    child: (string | number)[];
  };
  social_links: Array<{
    platform: string;
    url: string;
  }>;
  created_at?: string;
  updated_at?: string;
};

type Service = {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  price?: number;
  duration?: number;
  basic_details_id: string;
  created_at?: string;
  updated_at?: string;
};

// Basic Details CRUD
export const getBasicDetails = async (id: string): Promise<BasicDetails> => {
  const { data, error } = await supabase
    .from("basic_details")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

export const createBasicDetails = async (
  details: Omit<BasicDetails, "id" | "created_at" | "updated_at">
): Promise<BasicDetails> => {
  const { data, error } = await supabase
    .from("basic_details")
    .insert([details])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateBasicDetails = async (
  id: string,
  updates: Partial<Omit<BasicDetails, "id" | "created_at" | "updated_at">>
): Promise<BasicDetails> => {
  const { data, error } = await supabase
    .from("basic_details")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Services CRUD
export const getServices = async (
  basicDetailsId: string
): Promise<Service[]> => {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("basic_details_id", basicDetailsId);

  if (error) throw error;
  return data || [];
};

export const createService = async (
  service: Omit<Service, "id" | "slug" | "created_at" | "updated_at">
): Promise<Service> => {
  const { data, error } = await supabase
    .from("services")
    .insert([
      {
        ...service,
        slug: generateSlug(service.name),
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateService = async (
  id: string,
  updates: Partial<Omit<Service, "id" | "slug" | "created_at" | "updated_at">>
): Promise<Service> => {
  const serviceUpdates: any = { ...updates };

  // If name is being updated, generate new slug
  if (updates.name) {
    serviceUpdates.slug = generateSlug(updates.name);
  }

  const { data, error } = await supabase
    .from("services")
    .update(serviceUpdates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteService = async (id: string): Promise<boolean> => {
  const { error } = await supabase.from("services").delete().eq("id", id);

  if (error) throw error;
  return true;
};
