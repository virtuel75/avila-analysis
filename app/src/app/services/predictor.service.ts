import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { IPrediction } from '../models/prediction.model';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL')

@Injectable()
export class PredictorService {

  private readonly _api_base_url: string

  constructor(
    private httpClient: HttpClient,
    @Inject(API_BASE_URL) api_base_url: string
  ) {
    this._api_base_url = api_base_url
  }

  predict = (data: number[]) => {
    let body = `inputs=${data}`

    const url: string = this._api_base_url + '/api/predict'

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

    return this.httpClient.post<IPrediction>(url, body, { headers: headers })
  }
}
