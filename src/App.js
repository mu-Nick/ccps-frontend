import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Department from './components/Department/Department'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Student from './components/Student/Student'

const App = () => {
    const [render, setRender] = useState(false)
    const [user, setUser] = useState(null)

    // Load the user in state
    const loadUser = user => {
        setUser({
            id: user.ID ? user.ID : user.Roll,
            name: user.Name,
            email: user.Email,
            type: user.ID ? 'department' : 'student'
        })
    }

    // Load user from browser localStorage if persists
    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'))
            setUser({
                id: user.ID ? user.ID : user.Roll,
                name: user.Name,
                email: user.Email,
                type: user.type
            })
            setRender(true)
        } else {
            setRender(true)
        }
    }, [])

    // Redirects other routes
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

    // Handles /login redirects
    const loginRedirect = () => {
        if (user) {
            return redirectOtherRoute()
        }
        return <Login loadUser={loadUser} />
    }

    // Handles /student redirects
    const studentRedirect = match => {
        if (!user) {
            return <Redirect to='/login' />
        }
        if (parseInt(match.params.rollno, 10) === user.id) {
            return <Student user={user} setUser={setUser} />
        }
        return redirectOtherRoute()
    }

    // Handles /department redirects
    const departmentRedirect = match => {
        if (!user) {
            return <Redirect to='/login' />
        }
        if (match.params.deptid === user.id) {
            return <Department user={user} setUser={setUser} />
        }
        return redirectOtherRoute()
    }

    // Wait render till user loaded
    if (!render) {
        return null
    }

    // Render according to routes
    return (
        <>
            {/* Render header on every page */}
            <Header />
            <Router>
                {/* Implement react routing here */}
                <Switch>
                    <Route path='/login'>{loginRedirect()}</Route>
                    <Route path='/student/:rollno' render={({ match }) => studentRedirect(match)} />
                    <Route
                        path='/department/:deptid'
                        render={({ match }) => departmentRedirect(match)}
                    />
                    {/* Redirect other routes */}
                    <Route path='/'>{redirectOtherRoute()}</Route>
                </Switch>
            </Router>
        </>
    )
}

export default App
