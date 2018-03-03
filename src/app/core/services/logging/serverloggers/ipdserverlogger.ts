export interface IPDServerLogger {
  log(message: string, level: string, additional: any): void;
}

export abstract class PDServerLogger implements IPDServerLogger {
  abstract log(message: string, level: string, additional: any): void;
}
