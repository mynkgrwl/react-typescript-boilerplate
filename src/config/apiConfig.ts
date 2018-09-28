export interface apiConfigInterface {
    protocol: string;
    host: string;
    dataApiUrl: string;
    applicationApiUrl: string;
    authorizeApiLoginId: string;
    authorizeApiKey: string;
}


export const apiConfig: apiConfigInterface = {
    protocol: 'http',
    host: 'localhost:9999',
    dataApiUrl: 'data',
    applicationApiUrl: '',
    authorizeApiLoginId: 'sas',
    authorizeApiKey: 'sasa'
}
