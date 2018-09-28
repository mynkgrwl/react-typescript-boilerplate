import { connect } from 'react-redux'
import App from '../components/app'
import { stateInterface } from '../../../store/appReducer';
import {startLoader, stopLoader} from '../actions/appAction';
import {withRouter}from 'react-router-dom'

const mapStateToProps = (state:stateInterface) => {
  return {
    message: state.loader? state.loader.message : null
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return { 
    startLoader:(message)=> {
      return dispatch(startLoader(message))
    }
    // stopLoader:()=>{
    //   return dispatch(stopLoader())  
    // }
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
