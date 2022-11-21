import { environment } from './../../../../environments/environment';

export class GIFObject {
  public type: string = 'gif';
  public id: string;
  public slug: string;
  public url: string;
  public bitly_url: string;
  public embed_url: string;
  public username: string;
  public source: string;
  public rating: string;
  public content_url: string;
  public user: User;
  public source_tld: string;
  public source_post_url: string;
  public update_datetime: string;
  public create_datetime: string;
  public import_datetime: string;
  public trending_datetime: string;
  public images: any;
  public title: string;
  public alt_text: string;
}

export class User {
  public avatar_url: string;
  public banner_url: string;
  public profile_url: string;
  public username: string;
  public display_name: string;
}

export class PaginationObject {
  public offset: number;
  public total_count: number;
  public count: number;
}

export class MetaObject {
  public msg: string;
  public status: number;
  public response_id: string;
}

interface RequestParamsInput {
  limit?: number;
  offset?: number;
  rating?: string;
  random_id?: string;
  bundle?: string;
}

export class RequestParams {
  public readonly api_key: string = environment.giphy.api_key;
  public limit: number;
  public offset: number = 0;
  public rating: string;
  public random_id: string;
  public bundle: string;

  constructor(input?: RequestParamsInput) {
    if (!input) {
      return;
    }

    Object.keys(input).forEach(
      (prop) => this[prop] = input[prop]
    );
  }
}

interface SearchRequestParamsInput extends RequestParamsInput {
  q?: string;
  lang?: string;
}

export class SearchRequestParams extends RequestParams {
  public q: string = '';
  public lang: string = 'en';

  constructor(input?: SearchRequestParamsInput) {
    super(input);

    if (!input) {
      return;
    }

    Object.keys(input).forEach(
      (prop) => this[prop] = input[prop]
    );
  }
}

interface GetIDRequestParamsInterface {
  random_id?: string;
}

export class GetIDRequestParams {
  public readonly api_key: string = environment.giphy.api_key;
  public random_id: string;

  constructor(input?: GetIDRequestParamsInterface) {
    if (!input) {
      return;
    }

    Object.keys(input).forEach(
      (prop) => this[prop] = input[prop]
    );
  }
}

export class ResponseObject {
  public data: GIFObject;
  public meta: MetaObject;
}

export class PaginationResponseObject {
  public data: GIFObject[];
  public pagination: PaginationObject;
  public meta: MetaObject;
}
