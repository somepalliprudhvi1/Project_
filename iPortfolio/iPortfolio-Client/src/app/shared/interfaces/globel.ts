export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    racfid?: string;
    email?: string;
    roleID?: string;
    roleName?: string;
    key?: any;
    features?: Features[];
    token?: string;
  }
  export interface Features {
    featureId: string;
    featureName: string;
  }