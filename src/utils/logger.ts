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

  // Mostly used for debugging purposes, and error handling when developing
  public static error(logText: string, errorMessage?): void {
    console.log(`
    |||||||
    DATE: ${this.timestamp()}
    ERROR OCCURRED
    REASON: ${logText}
    MESSAGE: ${errorMessage}
    |||||||
    `);
  }

  private static timestamp(): string {
    return new Date().toLocaleTimeString('it-IT');
  }
}
