import { supabase } from "../utils/supabase";

export async function getAllBooks() {
    const { data, error } = await supabase.from("books").select();
    return { data, error };
}

export async function deleteBook(id) {
    const { data, error } = await supabase.from('books').delete().eq('id', id);
    return { data, error };
}