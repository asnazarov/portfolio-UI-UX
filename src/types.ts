export type listType = {
  id: number,
  link: string,
  text: string,
  tag: string,
  description?: {
    text?: string,
    list_1?: string[]
    list_2?: string[]
  }
}[]