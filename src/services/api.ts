import http from "../utils/http";

const baseUrl = "localhost/api";

export const example = (params) => {
  http.get(`${baseUrl}/example`, params);
};
