import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {
  private usersUrl = '/admin/user/list';
  private admissionUrl = '/operation/admission';
  private userUrl = '/admin/user';

  constructor(private http: Http) { }

  // get("/api/contacts")
  getUsers(): Promise<void | User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  // post("/api/contacts")
  createUser(newUser: User): Promise<void | User> {
    return this.http.post(this.admissionUrl, newUser)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  // get("/api/contacts/:id") endpoint not used by Angular app

  // delete("/api/contacts/:id")
  deleteUser(delUserId: String): Promise<void | String> {
    return this.http.delete(this.userUrl + '/' + delUserId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateUser(putUser: User): Promise<void | User> {
    return this.http.put(this.userUrl + '/' + putUser.id, putUser)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
