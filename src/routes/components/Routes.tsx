import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routesConfig';

class Routes extends React.Component<any, any> {

    renderRoutes(routes:Array<any>) {
        let routeList:Array<any> = [];

        routes.forEach(({component: Component, path, childRoutes, ...rest}) => {
            routeList.push(
                <Route
                    exact
                    key={path}
                    path={path}
                    render={props => { let combinedProps = {...rest, ...props}; return <Component {...combinedProps}/>}}
                    {...rest}
                />
            );
            if (childRoutes && childRoutes.length > 0) {
                routeList = routeList.concat(this.renderRoutes(childRoutes));
            }
        });
        return routeList;
    }

    render() {
        return (
            <div>
                <main role="main">
                    <Switch>
                        {this.renderRoutes(routes)}
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Routes;
