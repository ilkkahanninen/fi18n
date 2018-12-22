import { TParameters } from "./typings";

export const replace = (template: string, parameters?: TParameters): string => {
  let str = template;
  if (parameters) {
    Object.keys(parameters).forEach(key => {
      str = str.replace(new RegExp(`[$%]${key}`), String(parameters[key]));
    });
  }
  return str;
};
