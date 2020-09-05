import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.apiUrl}/get`)
      .pipe(map(res => {
        console.log(res)
        return Object.keys(res)
          .map(key => ({
            ...res[key]
          }))
      }))
  }

  create(skill) {
    return this.http.post(`${environment.apiUrl}/post`, skill)
      .pipe(map(res => {
        console.log('create res', res)
        return Object.keys(res)
          .map(key => ({
            ...res[key],
          }))
      }))
  }
}
