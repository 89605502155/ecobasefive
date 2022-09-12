import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStation } from './station/station.interface';


@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private http:HttpClient) { }

  API_URL='http://localhost:3000/stations'

  getAll() {
    return this.http.get<IStation[]>(this.API_URL)
  }

}
