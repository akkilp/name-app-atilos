import * as express from 'express';
/* eslint-disable no-console */
export default class Logger {
  public static info(logText: string): void {
    console.log(`${this.timestamp()} // INFO // ${logText}`);
  }

  public static request(request: express.Request): void {
    console.log(
      `
      *****
      DATE: ${this.timestamp()}
      REQUEST
      METHOD: ${request.method} 
      PATH: ${request.path}
      *****
      `
    );
  }

  public static debug(logText: string): void {
    console.log(`${this.timestamp()} !!!!! DEBUG !!!!! ${logText}`);
  }

  public static error(logText: string): void {
    console.log(`${this.timestamp()} // ERROR // ${logText}`);
  }

  private static timestamp(): string {
    return new Date().toLocaleTimeString('it-IT');
  }
}
