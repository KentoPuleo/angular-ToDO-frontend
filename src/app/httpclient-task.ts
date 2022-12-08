import axios from "axios";

declare var require: any


export async function addTask() {
  let res = await axios.post('http://localhost:3000');
  console.log(res.data.login);
}

export async function findTask() {
  let res = await axios.get('http://localhost:3000/list/4');
  console.log(res.data.login);
}

async function removeTask() {
  let res = await axios.delete('http://localhost:3000');
  console.log(res.data.login);
}


export class HTTPToBackend {

}


