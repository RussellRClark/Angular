export interface IPDServerLogger {
  log(message: string, level: string, additional: any): void;
  timestamp(): void;
}


