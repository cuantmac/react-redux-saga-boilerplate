
export async function getUsers() {
  const response = await fetch('http://localhost:8000/equipments');
  return response.json();
}

export async function getDetails(id) {
  const response = await fetch('http://localhost:8000/equipments/' + id );
  return response.json();
}

export async function saveNewData(data) {
  const response = await fetch('http://localhost:8000/equipments',{method: 'post', headers: {'content-type': 'application/json'}, body: JSON.stringify(data.data)});
  return response.json();
}

export async function modifyItem(id, data) {
  const response = await fetch('http://localhost:8000/equipments/' + id,{method: 'PATCH', headers: {'content-type': 'application/json'}, body: JSON.stringify(data)});
  return response.json();
}

export async function deleteItem(id) {
  console.log('FOEJFOJ',id);
  const response = await fetch('http://localhost:8000/equipments/' + id,{method: 'DELETE'});
  return response.json();
}
