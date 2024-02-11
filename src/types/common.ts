export type WithLocaleParams<T extends object = {}> = T & {
  params: {
    lng: string;
  }
}