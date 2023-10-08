import { APP_INITIALIZER, ErrorHandler, Provider } from '@angular/core';
import { Router } from '@angular/router';
import {
  BrowserTracing,
  createErrorHandler,
  init,
  routingInstrumentation,
  TraceService
} from '@sentry/angular-ivy';

export function enableSentrySupport<
  TOptions extends { dsn: string; debug?: boolean; enabled?: boolean },
  TEnvironment extends { configuration: string; selfUrl: string },
  TPackage extends { name: string; version: string },
>(
  { dsn, debug, enabled }: TOptions,
  { configuration, selfUrl }: TEnvironment,
  { name, version }: TPackage
): void {
  init({
    dsn: dsn,
    debug: debug ?? false,
    enabled: enabled ?? true,
    environment: configuration,
    ...configuration === 'prod'
      ? {
        release: `${name}@${version}`
      }
      : {},
    integrations: [
      new BrowserTracing({
        routingInstrumentation: routingInstrumentation
      })
    ],
    tracePropagationTargets: [
      `${selfUrl}/`
    ],
    tracesSampleRate: 1
  });
}

export function provideSentry(): Provider[] {
  return [
    {
      provide: ErrorHandler,
      useValue: createErrorHandler({
        showDialog: false
      })
    },
    {
      provide: TraceService,
      deps: [
        Router
      ]
    },
    {
      provide: APP_INITIALIZER,
      // eslint-disable-next-line arrow-body-style
      useFactory: () => () => {
        return;
      },
      deps: [
        TraceService
      ],
      multi: true
    }
  ];
}
