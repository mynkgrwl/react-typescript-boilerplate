declare var require: any;
import { Middleware, Store, Dispatch, Action } from 'redux';
let batch = require('redux-batched-actions');
import * as api from '../services/api';
import {IAction} from '../services/createActions';
//import { createActionLogoutUser } from '../actions';
export const CALL_API = 'Call API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
//
const apiMiddleware: Middleware =
    (store: Store<any>) =>
        (next: any): any =>
            (action: any): any => {
                let callAPI = action[CALL_API]
                if (typeof callAPI === 'undefined') {
                    return next(action)
                }

                callAPI = api.setHeaders(callAPI);

                let { url } = callAPI
                const { schema, types } = callAPI

                if (typeof url === 'function') {
                    url = url(store.getState())
                }

                if (typeof url !== 'string') {
                    throw new Error('Specify a string endpoint URL.')
                }
                let type = <IAction>types;
                if(!(type.triggered && type.succeeded && type.failed))
                {
                    throw new Error('Expected all 3 action types.')
                }

                function actionWith(data:any) {
                    const finalAction = Object.assign({}, action, data)
                    delete finalAction[CALL_API]
                    return finalAction;
                }

                const {triggered, succeeded, failed} = type
                next(actionWith({ type: triggered }));

                if (callAPI.isFile) {
                    const formData = new FormData();
                    callAPI.data.forEach((el:any) => {
                        formData.append('file', el);
                    });
                    callAPI.data = formData;
                    callAPI.headers['Content-Type'] = 'multipart/form-data';                    
                }
                return api.callAPI(callAPI).then(
                    (response:any) => {
                        if (action.actionData && action.actionData.successMessage
                            && action.actionData.successMessage.length > 0) {
                            // const { successMessage: message } = action.actionData;
                            next(
                                batch.batchActions([
                                    actionWith({
                                        response,
                                        type: succeeded,
                                        params: action.params
                                    })
                                ])
                            )
                        }
                        else {
                            next(actionWith({
                                response,
                                type: succeeded,
                                params: action.params
                            }))
                        }

                    }
                ).catch(
                    (error:any) => {
                        if (error && error.status === 401) {
                            let message = 'Sorry! You have been Logged out. Please login again to continue';
                            next(
                                batch.batchActions([
                                    //createActionLogoutUser()
                                ])
                            );

                        }
                        if (error && error.status === 404 || error.status === 403 || error.status === 500 || error.status === 400 || error.status === 401) {
                            const message = error.data || (action.actionData && action.actionData.errorMessage);
                            next(
                                batch.batchActions([
                                    actionWith({
                                        type: failed,
                                        error: message || 'Failed To Perform Action',
                                        params: action.params
                                    })
                                ])
                            );
                        } else {
                            next(batch.batchActions(
                                [
                                    actionWith({
                                        type: failed,
                                        error: 'Failed To Perform Action',
                                        params: action.params
                                    })
                                ]
                            ));
                        }
                    }
                );
            };

export default apiMiddleware;