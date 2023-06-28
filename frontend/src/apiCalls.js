export async function callListings() {
  const response = await fetch("https://paprback-backend.onrender.com/api/listings")
  const data = await response.json()
  return data
}