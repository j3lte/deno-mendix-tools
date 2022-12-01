import { MendixPlatformClient, OnlineWorkingCopy, setPlatformConfig } from "../../deps.ts";
import { RequestOptionsAccessToken } from "../types.ts";

/**
 * Create a client to interact with the Mendix Platform.
 *
 * We're returning a client like this, because the npm version uses process.env.MENDIX_TOKEN, which is unavailable in Deno. We can set the mendix token using `setPlatformConfig` instead.
 *
 * @param opts Options for the request, containing the Personal Access Token
 * @returns MendixPlatformClient
 */
export const createClient = (opts: RequestOptionsAccessToken): MendixPlatformClient => {
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

/**
 * Get a working copy of a Mendix app
 *
 * - If you include a `workingCopyId`, it will return the online working copy. Please note that online working copies are automatically deleted from the Mendix Platform after 24 hours.
 * - If you include a branchName, it will return the working copy of that branch.
 * - If you include neither, it will return null
 *
 * @param client MendixPlatformClient
 * @param opts
 * @returns OnlineWorkingCopy | null
 */
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
