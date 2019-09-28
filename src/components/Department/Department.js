import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Sidenav from './SideNav'
import Home from './Home'
import Pending from './Pending'

const Department = ({ user, setUser, match }) => {
    return (
        <div>
            <Sidenav setUser={setUser} />
            {/* Routing within /department */}
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
