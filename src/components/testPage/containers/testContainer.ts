import { connect } from 'react-redux'
import TestPage from '../components/testComponent'
import { stateInterface } from '../../../store/appReducer';
import {getData} from '../actions/testAction';

const mapStateToProps = (state:stateInterface) => {
  return {
    data: (state.testPage) ? state.testPage.title : null
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return { 
    getData:()=>{
      return dispatch(getData())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TestPage)
