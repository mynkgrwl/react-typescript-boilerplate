import { LOADER_START, LOADER_STOP} from '../actions/appAction';

export function LoaderReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case LOADER_START:
            return {
                ...state,
                loading: true,
                message: action.data
            }
        case LOADER_STOP:
            return {
                ...state,
                loading: true,
                message: action.data
            }
    }
    return state;
}
