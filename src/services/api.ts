import http from "../utils/http";

const baseUrl = "localhost/api";

export async function getExample(): Promise<any> {
  return http.axios.get(`${baseUrl}/example`);
}

export async function getParamsExample(id: number) {
  return http.axios.get(`${baseUrl}/example?id=${id}`);
}
export interface postExampleType {
  id: number;
  token: string;
  status?: boolean;
}

export async function postExample(params: postExampleType) {
  return http.axios.post(`${baseUrl}/example`, params);
}
