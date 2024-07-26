import supabase from "./supabase";
export async function addGuest(guest) {
  const { data, error } = await supabase.from("guests").insert(guest).select();
  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
