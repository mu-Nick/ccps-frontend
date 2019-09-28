import React, { useState } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Sidenav from './SideNav'
import Home from './Home'
import Pending from './Pending'

const Department = ({ user, setUser, match }) => {
    // const [iface, setIface] = useState('home')

    // const onIfaceChange = newRoute => {
    //     if (newRoute === 'home') setIface('home')
    //     else if (newRoute === 'pending') setIface('pending')
    //     else if (newRoute === 'logout') onRouteChange('login')
    // }

    return (
        <div>
            <Sidenav setUser={setUser} />
            <Switch>
                <Route path={`${match.path}/pending`}>
                    <Pending deptid={user.id} />
                </Route>
                <Route path={`${match.path}`}>
                    <Home user={user} />
                </Route>
            </Switch>
        </div>
    )
}

export default withRouter(Department)
