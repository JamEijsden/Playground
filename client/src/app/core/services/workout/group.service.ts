import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Group } from '../../../shared/models/group';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) {
    console.log(this.apiEndpoint);
  }

  getGroupsByUser(userId: string): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiEndpoint + `/user/${userId}/groups`);
  }

}
