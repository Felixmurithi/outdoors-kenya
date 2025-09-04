import { supabase } from "@/app/_lib/supabase";

// Helper function to generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with single
    .trim();
}

// Get a single outdoor location by ID
export const select = async (id: string) => {
  const { data, error } = await supabase
    .from("outdoors_explore")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

// Define types for the outdoor location
type OutdoorLocation = {
  name: string;
  slug?: string;
  [key: string]: any; // For other dynamic properties
};

// Create a new outdoor location
export const insert = async (locationData: Omit<OutdoorLocation, 'slug'>) => {
  const slug = generateSlug(locationData.name);
  
  // Check if name is unique
  const { data: existing } = await supabase
    .from("outdoors_explore")
    .select("id")
    .eq("slug", slug);

  if (existing?.length) {
    throw new Error("A location with this name already exists");
  }

  const { data, error } = await supabase
    .from("outdoors_explore")
    .insert([
      {
        ...locationData,
        slug,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Update an existing outdoor location
export const update = async (id: string, updates: Partial<OutdoorLocation>) => {
  // If name is being updated, update the slug and check uniqueness
  if (updates.name) {
    const slug = generateSlug(updates.name);
    
    // Check if another location with this slug exists
    const { data: existing } = await supabase
      .from("outdoors_explore")
      .select("id")
      .eq("slug", slug)
      .neq("id", id);

    if (existing?.length) {
      throw new Error("A location with this name already exists");
    }

    updates.slug = slug;
  }

  const { data, error } = await supabase
    .from("outdoors_explore")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// Delete an outdoor location
export const deleteById = async (id: string) => {
  const { error } = await supabase
    .from("outdoors_explore")
    .delete()
    .eq("id", id);

  if (error) throw error;
  return true;
};

// List all outdoor locations with optional filtering
export const selectAll = async (filters = {}) => {
  let query = supabase.from("outdoors_explore").select("*");

  // Apply filters if provided
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined) {
      query = query.eq(key, value);
    }
  });

  const { data, error } = await query;
  
  if (error) throw error;
  return data;
};
