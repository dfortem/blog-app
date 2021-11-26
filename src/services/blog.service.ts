import { AxiosResponse } from "axios";
import Service from "@/services/service";
import { Post } from "@/entities/Post";
import { Comment } from "@/entities/Comment";

export default class BlogService extends Service {
  static getAllBlogPosts(): Promise<Post[]> {
    return this.apiGet<Post[]>("/v1/posts")
      .then((response: AxiosResponse) => response.data);
  }

  static getBlogPost(postID: number): Promise<Post> {
    return this.apiGet<Post>(`/v1/posts/${postID}`)
      .then((response: AxiosResponse) => response.data);
  }

  static getCommentsForPost(postID: number): Promise<Comment[]> {
    return this.apiGet<Comment[]>(`/v1/comments/${postID}`)
      .then((response: AxiosResponse) => response.data);
  }
}
