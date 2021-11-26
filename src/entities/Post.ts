export type Post = {
  id: number,
  title: string,
  content: string,
  numComments?: number,
  deleted?: boolean,
  created?: string,
  updated?: string
}
