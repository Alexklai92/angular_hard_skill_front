import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment'
import { Skill, NewSkill } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Skill[]> {
    return this.http.get(`${environment.apiUrl}/get`)
      .pipe(map(res => {
        console.log(res)
        return Object.keys(res)
          .map(key => ({
            ...res[key]
          }))
      }))
  }

  create(skill: NewSkill) {
    return this.http.post(`${environment.apiUrl}/post`, skill)
      .pipe(map((res: Skill) => {
        console.log('create res', res)
        return Object.keys(res)
          .map(key => ({
            ...res[key],
          }))
      }))
  }

  remove(skill_id): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/delete/${skill_id}`)
      .pipe(map(res => {
        console.log('delete res', res)
      }))
  }

  update(skill: Skill): Observable<Skill> {
    return this.http.patch<Skill>(`${environment.apiUrl}/patch`, skill)
  }
}
