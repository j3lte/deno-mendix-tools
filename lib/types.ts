export type GeneralOptions = {
  debug?: boolean;
};

/**
 * Request Options for requests with User authentication (Username & API key)
 */
export type RequestOptionsUserAccess = GeneralOptions & {
  /**
   * Mendix Username, typically your email address
   *
   * @see https://docs.mendix.com/apidocs-mxsdk/apidocs/authentication/
   */
  mxUser: string;
  /**
   * Mendix API Key, this can be obtained in your Mendix Profile
   * @see https://docs.mendix.com/developerportal/community-tools/mendix-profile/#api-key
   */
  mxApiKey: string;
};

/**
 * Request Options for request with Personal Access Token. The mxToken can be obtained from Mendix Warden, see documentation.
 */
export type RequestOptionsAccessToken = GeneralOptions & {
  /**
   * Mendix PAT (Personal Access Token)
   * @see https://docs.mendix.com/apidocs-mxsdk/mxsdk/setup-your-pat/
   */
  mxToken: string;
};

export type RequestLimits = { limit?: number; cursor?: string };

export type ReturnType<T> = { data: T | null; error: null | ReturnError | Error };

export type App = {
  AppId: string;
  Name: string;
  Url: string;
  ProjectId: string;
};

export type AppInfo = {
  appId: string;
  type: "svn" | "git";
  url: string;
};

export type ReturnError = {
  errorMessage: string;
  errorCode: string;
};

export type CommitInfo = {
  id: string;
  author: {
    name: string;
    email: string;
  };
  date: string;
  message: string;
  relatedStories: Array<{ id: string }>;
  mendixVersion?: string;
  originalBranchName?: string;
};

export type BranchInfo = {
  name: string;
  latestCommit: CommitInfo;
};

export type Cursors = {
  first: string;
  last: string;
  next?: string;
  prev?: string;
};

export type BranchesInfo = {
  cursors: Cursors;
  items: BranchInfo[];
};

export type CommitsInfo = {
  cursors: Cursors;
  items: CommitInfo[];
};
