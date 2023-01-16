import axios from "axios";
import {async} from "rxjs";
import {ListModel} from "./model/list.model";

declare var require: any

export let list: any;

export async function addTask(name: string) {
  let res = await axios.post('http://localhost:3000/list', {
      name: name,
      status: true
  });
  console.log("task successfully added");
  console.log(res.data.login);
}

export async function getAllTask(): Promise<ListModel[]>{
  let res = await axios.get('http://localhost:3000/list', {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  }).then(response => response.data);
  console.log(res)
  return res;
}

export async function getOneTask() {
  let res = await axios.get('http://localhost:3000/list/4', {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  });
  console.log(res.data.login);
}

export async function removeTask(param: number) {
  let res = await axios.delete(`http://localhost:3000/list/${param}`);
  console.log("task successfully deleted");
  console.log(res.data.login);
}

export async function updateTask(param: number) {
  let res = await axios.patch(`http://localhost:3000/list/${param}`,{
      status: false
    });
  console.log("task successfully updated");
  console.log(res.data.login);
}


