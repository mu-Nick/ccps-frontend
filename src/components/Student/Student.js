import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Dashboard from './Dashboard'
import SideNav from './SideNav'
import ViewComplaints from './ViewComplaints'
import NewComplaint from './NewComplaint'

const Student = ({ match, user, setUser }) => {
    // Render pages based on /student path
    return (
        <>
            <SideNav user={user} setUser={setUser} />
            <Switch>
                <Route path={`${match.path}/newcomplaint`}>
                    <NewComplaint rollno={user.id} />
                </Route>
                <Route path={`${match.path}/viewcomplaints`}>
                    <ViewComplaints user={user} />
                </Route>
                <Route path={`${match.path}`}>
                    <Dashboard user={user} />
                </Route>
            </Switch>
        </>
    )
}

export default withRouter(Student)
