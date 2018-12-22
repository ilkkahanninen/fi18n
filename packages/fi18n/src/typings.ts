export type TParameters = { [index: string]: string | number };
export type Translations = { [key: string]: string | string[] };
export type TFunction<T extends Translations> = (
  template: keyof T,
  parameters?: TParameters
) => string;
