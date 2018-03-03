export interface ConfigModel {
  apiServerURL: string;
  dbServerURL: string;
  logging: {
    httpURL: string,
    logglyID: string
  };
}
