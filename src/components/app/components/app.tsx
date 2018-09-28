import * as React from 'react';
import {Link} from 'react-router-dom'
import Routes from '../../../routes/components/Routes';
import '../style/app.css';
import {RouteComponentProps} from 'react-router'
//import '../../assets/styles/scss/site.scss';
//import logo from '../../logo.svg';

export interface Props extends RouteComponentProps<any> {
    message?: string;
    startLoader?:Function;
}

class App extends React.Component<Props, any>{
    componentWillMount(){
        if(this.props.startLoader){
            this.props.startLoader('started');
        }
    }

    render() {
        return (
            <div>
                <div>{this.props.message}</div>
                <Link to='/test'>test</Link>
                <Routes/>
            </div>
        );
    }
}

export default App;
