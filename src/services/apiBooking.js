import supabase from "./supabase";
export async function addBooking(booking) {
  // Insert the booking data
  const { data, error } = await supabase
    .from("bookings")
    .insert(booking)
    .select();
  if (error) {
    throw new Error(error);
  }
  return data;
}
export async function checkBooking(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email);

  if (error) {
    console.error("Supabase select error:", error);
    throw new Error(error.message || "Error checking booking");
  }
  console.log("guest", data);
  return data;
}

export async function findBooking(guestId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("guestId", parseInt(guestId));
  console.log(guestId);
  if (error) {
    console.error("Supabase select error:", error);
    throw new Error(error.message || "Error checking booking");
  }
  console.log("data2", data);
  return data;
}
export async function findCabin(cabinId) {
  const { data, error } = await supabase
    .from("Cabins")
    .select("*")
    .eq("id", parseInt(cabinId));
  console.log(cabinId);
  if (error) {
    console.error("Supabase select error:", error);
    throw new Error(error.message || "Error checking booking");
  }
  console.log("data2", data);
  return data;
}
