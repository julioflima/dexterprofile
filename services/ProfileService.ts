/* eslint-disable class-methods-use-this */

import { IError } from "../interfaces/IError";
import { IProfile } from "../interfaces/IProfile";
import profiles from "../_mock/profiles.json";

export default class PostsService {
  public async get(nick: string): Promise<IProfile | IError> {
    try {
      const result = profiles.find((item) => item.at === nick);

      if (result) return result;

      return {
        message: "Was not possible return that profile, it was not found.",
        code: 404,
      };
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Internal error!");
      return { message: err.message, code: 500 };
    }
  }
}
