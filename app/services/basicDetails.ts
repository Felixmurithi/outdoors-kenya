import { supabase, type BasicDetails, type Service } from '../supabase';

// Helper function to generate slug from name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .trim();
};

// Check if a basic detail with the same name exists
export const isNameUnique = async (name: string, excludeId?: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from('basic_details')
    .select('id, basic->>name')
    .eq('basic->>name', name);

  if (error) throw error;
  
  // If we're updating, exclude the current item from the check
  if (excludeId) {
    return !data?.some((item: { id: string }) => item.id !== excludeId);
  }
  
  return !data?.length;
};

// Basic Details CRUD
export const getBasicDetails = async (id: string): Promise<BasicDetails> => {
  const { data, error } = await supabase
    .from('basic_details')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as BasicDetails;
};

export const createBasicDetails = async (details: Omit<BasicDetails, 'id' | 'created_at' | 'updated_at'>): Promise<BasicDetails> => {
  // Check if name is unique
  if (!(await isNameUnique(details.basic.name))) {
    throw new Error('A profile with this name already exists');
  }

  const { data, error } = await supabase
    .from('basic_details')
    .insert([{
      ...details,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) throw error;
  return data as BasicDetails;
};

export const updateBasicDetails = async (id: string, updates: Partial<Omit<BasicDetails, 'id' | 'created_at' | 'updated_at'>>): Promise<BasicDetails> => {
  // If name is being updated, check uniqueness
  if (updates.basic?.name) {
    if (!(await isNameUnique(updates.basic.name, id))) {
      throw new Error('A profile with this name already exists');
    }
  }

  const { data, error } = await supabase
    .from('basic_details')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as BasicDetails;
};

// Services CRUD
export const getServices = async (basicDetailsId: string) => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('basic_details_id', basicDetailsId);

  if (error) throw error;
  return data;
};

export const createService = async (service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) => {
  const slug = generateSlug(service.name);
  
  // Check if service with same slug exists for this basic details
  const { data: existing } = await supabase
    .from('services')
    .select('id')
    .eq('basic_details_id', service.basic_details_id)
    .eq('slug', slug);
    
  if (existing?.length) {
    throw new Error('A service with a similar name already exists');
  }

  const { data, error } = await supabase
    .from('services')
    .insert([{ ...service, slug }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateService = async (id: string, updates: Partial<Omit<Service, 'id' | 'basic_details_id' | 'created_at' | 'updated_at'>>) => {
  // If name is being updated, generate new slug and check uniqueness
  if (updates.name) {
    const slug = generateSlug(updates.name);
    
    // Get the service to check basic_details_id
    const { data: existingService } = await supabase
      .from('services')
      .select('basic_details_id')
      .eq('id', id)
      .single();

    if (!existingService) {
      throw new Error('Service not found');
    }
    
    // Check if another service with this slug exists for the same basic_details
    const { data: existing } = await supabase
      .from('services')
      .select('id')
      .eq('basic_details_id', existingService.basic_details_id)
      .eq('slug', slug)
      .neq('id', id);
      
    if (existing?.length) {
      throw new Error('A service with a similar name already exists');
    }
    
    updates.slug = slug;
  }

  const { data, error } = await supabase
    .from('services')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteService = async (id: string) => {
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id);

  if (error) throw error;
  return true;
};
