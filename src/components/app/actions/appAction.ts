export const LOADER_START = 'LOADER_START';
export const LOADER_STOP = 'LOADER_STOP';

export function startLoader(message:any) {
    return {
        type: LOADER_START,
        data: message
    };
}

export function stopLoader() {
    return {
        type: LOADER_STOP,
        data: null
    };
}
