import { ReturnError } from "../types.ts";

export const request = async <T>(
  url: string,
  headers: Record<string, string>,
): Promise<{ data: T | null; error: null | ReturnError | Error }> => {
  try {
    const json = await fetch(url, {
      headers,
    }).then((response) => {
      return response.json();
    }) as T | ReturnError;

    if ("errorMessage" in json) {
      return { data: null, error: json };
    }

    return { data: json, error: null };
  } catch (error) {
    return { data: null, error: new Error(error) };
  }
};

export const createURL = (
  url: string,
  params: Record<string, undefined | null | number | string>,
): string => {
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      searchParams.set(key, value.toString());
    }
  }
  urlObj.search = searchParams.toString();
  return urlObj.toString();
};
