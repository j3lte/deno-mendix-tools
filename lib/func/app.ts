import { DEPLOY_URL_V1, REPOSITORIES_URL } from "../consts.ts";
import {
  App,
  AppInfo,
  BranchesInfo,
  BranchInfo,
  CommitsInfo,
  RequestLimits,
  RequestOptionsAccessToken,
  RequestOptionsUserAccess,
  ReturnType,
} from "../types.ts";
import { debug } from "../util/debug.ts";
import { authHeadersAuthUser, authHeadersPAT } from "../util/headers.ts";
import { createURL, request } from "../util/request.ts";

export const getApps = (
  opts: RequestOptionsUserAccess,
): Promise<ReturnType<App[]>> => {
  if (opts.debug) {
    debug(`getApps :: ${DEPLOY_URL_V1}`);
  }
  return request(DEPLOY_URL_V1, authHeadersAuthUser(opts));
};

export const getInfo = (
  appID: string,
  opts: RequestOptionsAccessToken,
): Promise<ReturnType<AppInfo>> => {
  const url = `${REPOSITORIES_URL}/${appID}/info`;
  if (opts.debug) {
    debug(`getInfo :: ${url}`);
  }
  return request(url, authHeadersPAT(opts));
};

export const getBranches = (
  appID: string,
  opts: RequestOptionsAccessToken & RequestLimits,
): Promise<ReturnType<BranchesInfo>> => {
  const { limit, cursor } = opts;
  const url = createURL(`${REPOSITORIES_URL}/${appID}/branches`, { limit, cursor });
  if (opts.debug) {
    debug(`getBranches :: ${url}`);
  }
  return request(url, authHeadersPAT(opts));
};

export const getBranch = (
  appID: string,
  branchName: string,
  opts: RequestOptionsAccessToken,
): Promise<ReturnType<BranchInfo>> => {
  const url = `${REPOSITORIES_URL}/${appID}/branches/${branchName}`;
  if (opts.debug) {
    debug(`getBranch :: ${url}`);
  }
  return request(url, authHeadersPAT(opts));
};

export const getCommits = (
  appID: string,
  branchName: string,
  opts: RequestOptionsAccessToken & RequestLimits,
): Promise<ReturnType<CommitsInfo>> => {
  const { limit, cursor } = opts;
  const url = createURL(`${REPOSITORIES_URL}/${appID}/branches/${branchName}/commits`, {
    limit,
    cursor,
  });
  if (opts.debug) {
    debug(`getCommits :: ${url}`);
  }
  return request(url, authHeadersPAT(opts));
};
