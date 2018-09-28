
export interface  routeConfigInterface {
    label?: string
    requiresAuthentication?: boolean,
    path?: string,
    dataPath?:string,
    indexRoute?: routeConfigInterface,
    component: string,
    childRoutes?: Array<routeConfigInterface>,
    fullPage:boolean,
    projectId?:string
}