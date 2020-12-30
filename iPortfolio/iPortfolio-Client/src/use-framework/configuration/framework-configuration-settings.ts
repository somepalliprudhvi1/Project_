import { User } from 'src/app/shared/interfaces/globel';


export class FrameworkConfigurationSettings {
    showVerticalMenuBar?: boolean;
    showFooter?: boolean;
    showHeader?: boolean;
    applicationName: string;
    currentUser?: User;
    agency?: string;
    errorSupportInfo?: string;
    version?: string;
    userLogin?: string;
  }
