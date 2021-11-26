export type Comment = {
  id: number,
  postID: number,
  name?: string,
  message: string,
  deleted?: boolean,
  created?: string,
  updated?: string
}

export type CommentData = {
  postID: number,
  name?: string,
  message: string,
}
