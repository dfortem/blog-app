import axios, { AxiosResponse } from "axios";

export default class Service {
  public static readonly appRoot: string = `${window.location.protocol}//${window.location.host}`;

  public static readonly apiRoot: string = `${Service.appRoot}/api`;

  public static apiPath(path: string): string {
    return `${Service.apiRoot}${path}`;
  }

  public static appPath(path: string): string {
    return `${Service.appRoot}${path}`;
  }

  static apiGet<T>(path: string, params?: unknown): Promise<AxiosResponse<T>> {
    return axios.get<T>(
      `${Service.apiRoot}${path}`,
      {
        params,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Blog-API": "v1",
        },
      },
    );
  }

  static apiPost<T>(path: string, data: unknown): Promise<AxiosResponse<T>> {
    return axios.post(
      `${Service.apiRoot}${path}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Blog-API": "v1",
        },
      },
    );
  }

  static apiPut<T>(path: string, data: unknown): Promise<AxiosResponse<T>> {
    return axios.put(
      `${Service.apiRoot}${path}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Blog-API": "v1",
        },
      },
    );
  }

  static apiFilePost<T>(path: string, file: File): Promise<AxiosResponse<T>> {
    const data = new FormData();
    data.append("file", file);

    return axios.post(
      `${Service.apiRoot}${path}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Blog-API": "v1",
        },
      },
    );
  }

  static apiFilePut<T>(path: string, file: File): Promise<AxiosResponse<T>> {
    const data = new FormData();
    data.append("file", file);

    return axios.put(
      `${Service.apiRoot}${path}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Blog-API": "v1",
        },
      },
    );
  }

  static apiFormDataPost<T>(path: string, formData: FormData): Promise<AxiosResponse<T>> {
    return axios.post(
      `${Service.apiRoot}${path}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Blog-API": "v1",
        },
      },
    );
  }

  static apiDelete<T>(path: string): Promise<AxiosResponse<T>> {
    return axios.delete(
      `${Service.apiRoot}${path}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Blog-API": "v1",
        },
      },
    );
  }
}
