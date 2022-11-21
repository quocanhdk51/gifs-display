import { GiphyEndpoint } from './giphy.endpoint';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationResponseObject, RequestParams, SearchRequestParams, GetIDRequestParams, ResponseObject } from './giphy.model';

@Injectable()
export class GiphyService {

  constructor(
    private _http: HttpClient,
  ) { }

  public getTrendingGifs(request: RequestParams = new RequestParams()): Observable<PaginationResponseObject> {
    const url = this._createURL(GiphyEndpoint.GifsTrending, request);
    return this._http.get<PaginationResponseObject>(url);
  }

  public getGifsBySearchTerm(request: SearchRequestParams = new SearchRequestParams()): Observable<PaginationResponseObject> {
    const url = this._createURL(GiphyEndpoint.GifsSearch, request);
    return this._http.get<PaginationResponseObject>(url);
  }

  public getGifById(id: string, request: GetIDRequestParams): Observable<ResponseObject> {
    const url = this._createURL(GiphyEndpoint.Gifs + `/${id}`, request);
    return this._http.get<ResponseObject>(url);
  }

  private _createURL(endpoint: GiphyEndpoint | string, request: any): string {
    let url: string = environment.giphy.api + endpoint;
    url = Object.keys(request).reduce(
      (previousValue, currentValue, index) => {
        if (index === 0) {
          return `${previousValue}?${currentValue}=${request[currentValue]}`;
        }
        return `${previousValue}&${currentValue}=${request[currentValue]}`;
      },
      url
    );

    return url;
  }
}
