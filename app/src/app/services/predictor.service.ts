import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPrediction } from '../models/prediction.model';

@Injectable()
export class PredictorService {

  constructor(
    private httpClient: HttpClient
  ) { }

  predict = (data: number[]) => {
    let body = `inputs=${data}`

    const baseURL: string = 'http://127.0.0.1:5000'
    const url: string = baseURL + '/api/predict'

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

    return this.httpClient.post<IPrediction>(url, body, { headers: headers })
  }
}
