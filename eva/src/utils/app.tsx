export const baseUrl = import.meta.env.BASE_URL;
export const appLink = (value: string) => `${import.meta.env.BASE_URL}${value}`.replace('//', '/');

