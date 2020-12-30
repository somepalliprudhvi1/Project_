import { FrameworkConfigurationSettings } from './framework-configuration-settings';
import { Injectable } from '@angular/core';

@Injectable()
export class FrameworkConfigurationService {
  showVerticalMenuBar: boolean;
  showFooter: boolean;
  showHeader: boolean;
  applicationName: string;
  agency: string;
  errorSupportInfo: string;
  version: string;
  userLogin: string;
  userRole: string;

  configure(settings: FrameworkConfigurationSettings): void {
    Object.assign(this, settings);
  }

  constructor() { }
}
