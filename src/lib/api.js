
export async function getUsers() {
  const response = await fetch('http://localhost:8000/equipments');
  return response.json();
}

export async function getDetails(id) {
  const response = await fetch('http://localhost:8000/equipments/' + id );
  return response.json();
}
