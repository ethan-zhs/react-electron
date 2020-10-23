import * as React from 'react'
import { createBrowserHistory, History } from 'history'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import LayoutPageComponent from '../pages/Layout'

import routes from './mapRoutes'

export default class Routes extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        const appHistory: History = createBrowserHistory({})

        return (
            <Router history={appHistory}>
                <Switch>
                    <Route
                        path={'*'}
                        render={props => {
                            return (
                                <LayoutPageComponent {...props}>
                                    <Switch>
                                        {routes.map((item: any) => {
                                            return (
                                                <Route
                                                    key={item.key}
                                                    path={item.path}
                                                    render={_props => {
                                                        return <item.component {..._props} />
                                                    }}
                                                    exact={item.exact}
                                                />
                                            )
                                        })}
                                        {/* 打包到生产是从*.html开始访问的,用"/"做默认重定向路由会不生效 */}
                                        <Route path="*" exact={true} render={() => <Redirect to={'/window'} />} />
                                    </Switch>
                                </LayoutPageComponent>
                            )
                        }}
                    />
                </Switch>
            </Router>
        )
    }
}
