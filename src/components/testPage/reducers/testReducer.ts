import { REST_CALL } from '../actions/testAction';

export function TestReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case REST_CALL.succeeded:
            // return {
            //     ...state,
            //     data:action.response.data
            // }
            return action.response.data;
    }
    return state;
}
