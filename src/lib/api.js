
export async function getUsers() {
  const response = await fetch('http://localhost:8000/equipments');
  return response.json();
}
