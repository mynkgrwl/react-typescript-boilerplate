
import * as axios from 'axios';

import { apiConfigInterface, apiConfig } from '../config/apiConfig';

export interface apiInterface {
    getDataApiBaseUrl(apiConfig: apiConfigInterface): string;
    getApplicationApiBaseUrl(apiConfig: apiConfigInterface): string;
    callAPI(requestConfig: Object): Promise<any>;
}

export function getBase(config: apiConfigInterface = apiConfig) {
    return config.protocol + '://' + config.host;
}

export function getDataApiBaseUrl(config: apiConfigInterface = apiConfig) {
    return getBase(config) + '/' + config.dataApiUrl;
}
export function getApplicationApiBaseUrl(config: apiConfigInterface = apiConfig) {
    if (config.applicationApiUrl) {
        return getBase(config) + '/' + config.applicationApiUrl;
    }
    return getBase(config);

}

export function callAPI(requestConfig:any) {
    return axios.default(requestConfig);
}

export function setHeaders(requestConfig:any) {
    requestConfig['headers'] = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    if (localStorage.user) {
        requestConfig['headers']['Authorization'] = 'Bearer ' + JSON.parse(localStorage.user).accessToken;
    }
    //axios.default.headers.common['Authorization'] = requestConfig['headers']['Authorization'];
    return requestConfig;
}