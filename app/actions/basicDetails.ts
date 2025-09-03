'use server';

import { createClient } from '@/app/_lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { BasicDetails } from '../_lib/supabase';

// Create new basic details
export async function createBasicDetails(formData: Omit<BasicDetails, 'id' | 'created_at' | 'updated_at'>) {
  const supabase = createClient();
  
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('You must be logged in to create a profile');
    }

    // Create the basic details
    const { data, error } = await supabase
      .from('basic_details')
      .insert([{
        ...formData,
        user_id: user.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;

    revalidatePath('/dashboard');
    return { success: true, data };
  } catch (error) {
    console.error('Error creating basic details:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An error occurred' 
    };
  }
}

// Update basic details
export async function updateBasicDetails(id: string, updates: Partial<Omit<BasicDetails, 'id' | 'created_at' | 'updated_at'>>) {
  const supabase = createClient();
  
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('You must be logged in to update a profile');
    }

    // Verify the user owns this record
    const { data: existing, error: fetchError } = await supabase
      .from('basic_details')
      .select('user_id')
      .eq('id', id)
      .single();

    if (fetchError || !existing || existing.user_id !== user.id) {
      throw new Error('Unauthorized');
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

    revalidatePath('/dashboard');
    return { success: true, data };
  } catch (error) {
    console.error('Error updating basic details:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An error occurred' 
    };
  }
}

// Delete basic details
export async function deleteBasicDetails(id: string) {
  const supabase = createClient();
  
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('You must be logged in to delete a profile');
    }

    // Verify the user owns this record
    const { data: existing, error: fetchError } = await supabase
      .from('basic_details')
      .select('user_id')
      .eq('id', id)
      .single();

    if (fetchError || !existing || existing.user_id !== user.id) {
      throw new Error('Unauthorized');
    }

    const { error } = await supabase
      .from('basic_details')
      .delete()
      .eq('id', id);

    if (error) throw error;

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Error deleting basic details:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An error occurred' 
    };
  }
}
