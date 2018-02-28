import {Inject, Injectable, Optional, PLATFORM_ID} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {isPlatformBrowser} from '@angular/common';
import {IPDServerLogger} from './ipdserverlogger';

export class LoggerConfig {
  level: PDLoggerLevel;
  serverLogLevel: PDLoggerLevel;
  serverLoggingUrl?: string;
}

export enum PDLoggerLevel {
  TRACE = 0, DEBUG, INFO, LOG, WARN, ERROR, OFF
}

const Levels = [
  'TRACE',
  'DEBUG',
  'INFO',
  'LOG',
  'WARN',
  'ERROR',
  'OFF'
];

@Injectable()
export class PDLoggerService {

  private _serverLogLevel: PDLoggerLevel;
  private _clientLogLevel: PDLoggerLevel;
  private _isIE: boolean;
  private _serverLogger: IPDServerLogger;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId, @Optional() private options: LoggerConfig, serverLogger: IPDServerLogger) {
    if (!this.options) {
      this.options = {
        level: PDLoggerLevel.OFF,
        serverLogLevel: PDLoggerLevel.OFF
      };
    }
    this._serverLogger = serverLogger;
    this._serverLogLevel = this.options.serverLogLevel;
    this._clientLogLevel = this.options.level;

    this._isIE = isPlatformBrowser(platformId) &&
      !!(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.userAgent.match(/Trident\//) || navigator.userAgent.match(/Edge\//));
  }

  trace(message, ...additional: any[]) {
    this._log(PDLoggerLevel.TRACE, true, message, additional);
  }

  debug(message, ...additional: any[]) {
    this._log(PDLoggerLevel.DEBUG, true, message, additional);
  }

  info(message, ...additional: any[]) {
    this._log(PDLoggerLevel.INFO, true, message, additional);
  }

  log(message, ...additional: any[]) {
    this._log(PDLoggerLevel.LOG, true, message, additional);
  }

  warn(message, ...additional: any[]) {
    this._log(PDLoggerLevel.WARN, true, message, additional);
  }

  error(message, ...additional: any[]) {
    this._log(PDLoggerLevel.ERROR, true, message, additional);
  }

  private _timestamp() {
    return new Date().toISOString();
  }

  private _logOnServer(level: PDLoggerLevel, message, additional: any[]) {
    if (!this.options.serverLoggingUrl) {
      return;
    }

// if the user provides a serverLogLevel and the current level is than that do not log
    if (level < this._serverLogLevel) {
      return;
    }

    // 28 Feb 2018 implement this thing
    this._serverLogger.log(message, Levels[level], additional);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(this.options.serverLoggingUrl, {
      level: Levels[level],
      message: message,
      additional: additional,
      timestamp: this._timestamp()
    }, {headers})
      .subscribe(
        res => null,
        error => this._log(PDLoggerLevel.ERROR, false, 'FAILED TO LOG ON SERVER')
      );
  }

  private _logIE(level: PDLoggerLevel, message: string, additional: any[]) {
    switch (level) {
      case PDLoggerLevel.WARN:
        console.warn(`${this._timestamp()} [${Levels[level]}] `, message, ...additional);
        break;
      case PDLoggerLevel.ERROR:
        console.error(`${this._timestamp()} [${Levels[level]}] `, message, ...additional);
        break;
      case PDLoggerLevel.INFO:
        console.log(`${this._timestamp()} [${Levels[level]}] `, message, ...additional);
        break;
      default:
        console.log(`${this._timestamp()} [${Levels[level]}] `, message, ...additional);
    }
  }

  private _log(level: PDLoggerLevel, logOnServer: boolean, message, additional: any[] = []) {
    if (!message) {
      return;
    }

// Allow logging on server even if client log level is off
    if (logOnServer) {
      this._logOnServer(level, message, additional);
    }

// if no message or the log level is less than the environ
    if (level < this._clientLogLevel) {
      return;
    }

    if (typeof message === 'object') {
      try {
        message = JSON.stringify(message, null, 2);
      } catch (e) {
        additional = [message, ...additional];
        message = 'circular object in message. ';
      }
    }

// Coloring doesn't work in IE
    if (this._isIE) {
      return this._logIE(level, message, additional);
    }

    const color = this._getColor(level);

    console.log(`%c${this._timestamp()} [${Levels[level]}]`, `color:${color}`, message, ...additional);
  }

  private _getColor(level: PDLoggerLevel) {
    switch (level) {
      case PDLoggerLevel.TRACE:
        return 'blue';
      case PDLoggerLevel.DEBUG:
        return 'teal';
      case PDLoggerLevel.INFO:
      case PDLoggerLevel.LOG:
        return 'gray';
      case PDLoggerLevel.WARN:
      case PDLoggerLevel.ERROR:
        return 'red';
      case PDLoggerLevel.OFF:
      default:
        return;
    }
  }

}
