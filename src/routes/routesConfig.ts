import TestPage from '../components/testPage/containers/testContainer';
import {Link} from 'react-router-dom'
export const routes: any = [
    {
        path: '/test',
        component: TestPage,
        childRoutes: []
    }
];
