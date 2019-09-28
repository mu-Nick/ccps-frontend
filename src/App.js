import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Department from './components/Department/Department'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Student from './components/Student/Student'

const App = () => {
    const [user, setUser] = useState(null)
    const [notifications, setNotifications] = useState([])
    const loadUser = user => {
        setUser({
            id: user.ID ? user.ID : user.Roll,
            name: user.Name,
            email: user.Email,
            type: user.ID ? 'department' : 'student'
        })
        if (user.Notifications) {
            setNotifications(user.Notifications)
        }
    }

    // Handles other routes
    const redirectOtherRoute = () => {
        if (user) {
            if (user.type === 'department') {
                return <Redirect to={`/department/${user.id}`} />
            }
            if (user.type === 'student') {
                return <Redirect to={`/student/${user.id}`} />
            }
        }
        return <Redirect to='/login' />
    }

    return (
        <>
            <Header />

            <Router>
                {/* Implement react routing here */}
                <Switch>
                    <Route path='/login'>
                        <Login loadUser={loadUser} />
                    </Route>
                    <Route path='/student/:rollno'>
                        <Student
                            user={user}
                            notifications={notifications}
                            setNotifications={setNotifications}
                        />
                    </Route>
                    <Route path='/department/:deptid'>
                        <Department user={user} />
                    </Route>
                    <Route path='/'>{redirectOtherRoute()}</Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
