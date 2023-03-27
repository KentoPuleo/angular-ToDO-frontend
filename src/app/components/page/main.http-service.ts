import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ListModel} from "../../model/list.model";

@Injectable({
  providedIn: 'root'
})

export class MainHttpService {
  constructor(private httpClient: HttpClient) {}

  getAllTasks(): Observable<ListModel[]>{
    return this.httpClient.get<ListModel[]>('http://localhost:3000/list')
  }
}
