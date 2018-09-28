import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import {LoaderReducer} from '../components/app/reducers/appReducer';
import {TestReducer} from '../components/testPage/reducers/testReducer';

interface stateInterface {
    loader: any,
    form: any,
    testPage: any
}

const initialState = <stateInterface>{
    loader:{loading:false, message:'initial state'},
    testPage:null
};

// Define Reducers
const rootReducer = combineReducers({
    loader: LoaderReducer,
    form: formReducer,
    testPage: TestReducer
    //   app,
    //   user,
    //   home,
    //   time,
    //   graphProperties: GaugeGraphReducer,
    //   seriesGraphProperties: SeriesGraphReducer,
    //   tableData: tableDataReducer,
    //   orgTable: orgTableDataReducer,
    //   agreementTable: agreementTableDataReducer,
    //   exposureTable: exposureTableDataReducer,
    //   fxRates: fxRatesTableDataReducer,
    //   IT_Admin: ITadminReducer,
    //   performedExposureEvent: PerformedExposureEventReducer,
    //   pendingExposureEvent: PendingExposureEventReducer,
    //   performedExposureAgreement: PerformedExposureAgreementReducer,
    //   pendingExposureAgreement: PendingExposureAgreementReducer,
    //   internalDataAction: InternalActionDataReducer,
    //   userPreferences: UserPreferencesReducer
});

export {stateInterface, rootReducer, initialState}