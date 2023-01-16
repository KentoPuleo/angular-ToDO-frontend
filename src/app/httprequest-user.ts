import axios from "axios";
import {async} from "rxjs";
import {UserModul} from "./model/user.modul";

declare var require: any

export let list: any;

export async function addUser(name: string, email: string, password: string) {
  let res = await axios.post('http://localhost:3000/login', {
    name: name,
    email: email,
    password: password
  });
  console.log("user successfully added");
  console.log(res.data.login);
}

export async function getAllUser(): Promise<UserModul[]>{
  let res = await axios.get('http://localhost:3000/login', {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  }).then(response => response.data);
  console.log(res)
  return res;
}

export async function getOneUser() {
  let res = await axios.get('http://localhost:3000/list/4', {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  });
  console.log(res.data.login);
}

export async function removeUser(param: string) {
  console.log("param: ", param);
  let res = await axios.delete('http://localhost:3000/list', {data:{
      name: param,
    }});
  console.log("task successfully deleted");
  console.log(res.data.login);
}

