import { MendixPlatformClient, OnlineWorkingCopy, setPlatformConfig } from "../../deps.ts";
import { RequestOptionsAccessToken } from "../types.ts";

export const createClient = (opts: RequestOptionsAccessToken) => {
  // We're returning a client like this, because the npm version uses process.env.MENDIX_TOKEN, which is
  // unavailable in Deno. We can set the mendix token using `setPlatformConfig` instead.
  setPlatformConfig({
    mendixToken: opts.mxToken,
  });

  return new MendixPlatformClient();
};

export type GetWorkingCopyOptions = {
  appID: string;
  workingCopyId?: string;
  branchName?: string;
};

export const getWorkingCopy = async (
  client: MendixPlatformClient,
  opts: GetWorkingCopyOptions,
): Promise<OnlineWorkingCopy | null> => {
  const app = client.getApp(opts.appID);

  try {
    if (opts.workingCopyId) {
      return app.getOnlineWorkingCopy(opts.workingCopyId);
    }
    if (opts.branchName) {
      const workingCopy = await app.createTemporaryWorkingCopy(
        opts.branchName,
      ) as OnlineWorkingCopy;
      return workingCopy;
    }
  } catch (error) {
    console.error(error);
  }

  return null;
};
