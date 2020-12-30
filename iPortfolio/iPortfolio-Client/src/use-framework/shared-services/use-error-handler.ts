import { ErrorHandler, Injectable } from '@angular/core';
import { FrameworkConfigurationService } from '../configuration/framework-configuration-service';


@Injectable()
export class UseErrorHandler implements ErrorHandler {

    constructor( private frameworkConfigService: FrameworkConfigurationService) {
    }

    handleError(error) {
        console.log('---------ERROR--------------');
         console.error(error);
         alert(this.frameworkConfigService.errorSupportInfo);
      }
}