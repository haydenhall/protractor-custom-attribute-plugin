import { Locator } from 'protractor/built/locators';

declare module 'protractor/built/locators' {
  export interface ProtractorBy {
    customAttribute(value: string): Locator;
  }
}

export * from 'protractor';