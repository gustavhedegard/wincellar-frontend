import axios, { Method } from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchHttp = async <TResponse, TPayload>(
  url: string,
  method: Method,
  token: string,
  reqBody?: TPayload
): Promise<TResponse> => {
  try {
    const response = await axios(`${apiUrl}/${url}`, {
      method: method,
      headers: createHeaders(token),
      data: {
        ...(reqBody && reqBody),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Unknown server error");
  }
};

export const fetchHttpWithoutAuth = async <TResponse, TPayload>(
  url: string,
  reqBody: TPayload
): Promise<TResponse> => {
  try {
    const response = await axios(`${apiUrl}/${url}`, {
      method: "POST",
      headers: createHeaders(),
      data: {
        ...(reqBody && reqBody),
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Unknown server error");
  }
};

const createHeaders = (token?: string) => {
  return {
    "content-type": "application/json",
    ...(token && { Authorization: `bearer ${token}` }),
  };
};
