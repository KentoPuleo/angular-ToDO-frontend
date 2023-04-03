import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ListModel} from "../../model/list.model";

@Injectable({
  providedIn: 'root'
})
export class MainHttpService {

  name: string = "name";

  headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }

  constructor(private httpClient: HttpClient) { }

  getAllTasks(): Observable<ListModel[]>{
    return this.httpClient.get<ListModel[]>('http://localhost:3000/list')
  }

  addTask(){
    return this.httpClient.post<string>('http://localhost:3000/list', {name: 'name', status: true}, {headers: this.headers})
  }

  removeTask(id: number){
    console.log(id)
    return this.httpClient.delete<any>(`http://localhost:3000/list/${id}`)
  }
}
