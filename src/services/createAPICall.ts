import {IAction} from './createActions';
import {CALL_API} from '../middleware/api';

function getRequestObject(method:string, actions:IAction, url:string, data:any, errorMessage:any, successMessage:any, params:any){
    return {
        [CALL_API]: {
            types: actions,
            url: url,
            method: method,
            data: data
        },
        params,
        actionData:{errorMessage,successMessage}
    }
}

function get(actions:IAction, url:string, data?:any, errorMessage?:string, successMessage?:string, params?:string){
    return getRequestObject("GET", actions, url, data, errorMessage, successMessage, params);
}

function post(actions:IAction, url:string, data?:any, errorMessage?:string, successMessage?:string, params?:string){
    return getRequestObject("POST", actions, url, data, errorMessage, successMessage, params);
}

function put(actions:IAction, url:string, data?:any, errorMessage?:string, successMessage?:string, params?:string){
    return getRequestObject("PUT", actions, url, data, errorMessage, successMessage, params);
}

function patch(actions:IAction, url:string, data?:any, errorMessage?:string, successMessage?:string, params?:string){
    return getRequestObject("PATCH", actions, url, data, errorMessage, successMessage, params);
}

function del(actions:IAction, url:string, data?:any, errorMessage?:string, successMessage?:string, params?:string){
    return getRequestObject("DELETE", actions, url, data, errorMessage, successMessage, params);
}

export {get, post, put, patch, del}
