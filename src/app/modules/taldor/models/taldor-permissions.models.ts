export class TaldorComponentPermissions {
    name: string;
    isPermitted: boolean;
}

export interface TaldorPageComponentsPermissionsDictionary {
    [component: string]: TaldorComponentPermissions;
}

export class TaldorPagePermissions {
    url: string;
    isPermitted: boolean;
    components: TaldorPageComponentsPermissionsDictionary;
}

export interface TaldorPagesComponentsPermissionsDictionary {
    [url: string]: TaldorPagePermissions;
}