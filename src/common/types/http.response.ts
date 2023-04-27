export interface IHttpResponse<T> {
  success: boolean;
  data: T;
}

export class HttpResponse {
  public static build<T>(data: T, success = true): IHttpResponse<T> {
    return {
      success: success,
      data: data,
    };
  }
}
