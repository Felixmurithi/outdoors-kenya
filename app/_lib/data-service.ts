import { supabase } from "./supabase";

export const insertBasicDetails = async function (basicDetails: any) {
  const { data, error } = await supabase
    .from("outdoors_explore")
    .insert([basicDetails])
    .select()
    .single();

  if (error) throw error;
  return data;
};

222;
