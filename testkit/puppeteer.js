import 'regenerator-runtime/runtime';
import {puppeteerTestkitFactoryCreator} from '../src/test-common';

import inputDriverFactory from '../src/Input/Input.puppeteer.driver';
export const inputTestkitFactory = puppeteerTestkitFactoryCreator(inputDriverFactory);

import buttonDriverFactory from '../src/Backoffice/Button/Button.puppeteer.driver';
export const buttonTestkitFactory = puppeteerTestkitFactoryCreator(buttonDriverFactory);

import labelDriverFactory from '../src/Label/Label.puppeteer.driver';
export const labelTestkitFactory = puppeteerTestkitFactoryCreator(labelDriverFactory);
