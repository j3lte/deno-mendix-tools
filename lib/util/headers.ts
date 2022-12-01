import type { RequestOptionsAccessToken, RequestOptionsUserAccess } from "../types.ts";

/**
 * Request Headers for request with User authentication (Username & API key)
 *
 * @param opts Options for the request, containing the user's access token.
 * @returns headers
 */
export const authHeadersAuthUser = (opts: RequestOptionsUserAccess) => {
  return {
    "Mendix-Username": opts.mxUser,
    "Mendix-ApiKey": opts.mxApiKey,
  };
};

/**
 * Request Headers for request with Personal Access Token
 *
 * @param opts Options for the request, containing the Personal Access Token
 * @returns headers
 */
export const authHeadersPAT = (opts: RequestOptionsAccessToken) => {
  return {
    "Authorization": `MxToken ${opts.mxToken}`,
  };
};
