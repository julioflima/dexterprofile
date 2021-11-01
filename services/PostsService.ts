/* eslint-disable class-methods-use-this */

import { IError } from "../interfaces/IError";
import { IPost } from "../interfaces/IPost";
import posts from "../_mock/posts.json";

export default class PostsService {
  public async get(nick: string, pageNumber: number = 1): Promise<IPost[]> {
    try {
      const pageSize = 4;
      const firstIndex = (pageNumber - 1) * pageSize;
      const lastIndex = pageNumber * pageSize;

      const result = posts
        .find((profile) => profile.at === nick)
        ?.posts?.slice(firstIndex, lastIndex);

      if (result) return result;

      console.error({
        message: "Was not possible return that posts, it was not found.",
        code: 500,
      });

      return [];
    } catch (error) {
      const err = error instanceof Error ? error : new Error("Internal error!");
      console.error({ message: err.message, code: 500 });
      return [];
    }
  }
}
