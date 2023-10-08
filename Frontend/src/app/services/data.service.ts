import { Injectable,inject } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable ,of ,from,BehaviorSubject} from 'rxjs';
import { Group } from '../group';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 users:User[] =[];
 groups:Group[] =[];
private _currentuser = new BehaviorSubject<User>(<User>{})
readonly currentuser$ = this._currentuser.asObservable();
private _currentgroup = new BehaviorSubject<Group>(<Group>{})
readonly currentgroup$ = this._currentgroup.asObservable();
private http = inject(HttpClient);
  setcurrentgroup: any;


public getAllUsers(){

  //http.get returns an observable. A stringified JSON object is what we are loking for
  //from the server.
  return this.http.get<User[]>('http://localhost:3000/api/users', {});
}

public getAllGroups(){

  //http.get returns an observable. A stringified JSON object is what we are loking for
  //from the server.
  return this.http.get<Group[]>('http://localhost:3000/api/groups', {});
}

setcurrentuser(user:User){
    this._currentuser.next(user); 
  }
}

// function getcurrentgroup() {
//   return sessionStorage.getItem('currentGroup');
// }

function setcurrentgroup(group: any) {
  sessionStorage.setItem('currentGroup',JSON.stringify(group));
}


