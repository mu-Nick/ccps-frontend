import React, { useState } from 'react'
import './App.css'

import Department from './components/Department/Department'
import Header from './components/Header/Header'
import Login from './components/Login/Login'

import Student from './components/Student/Student'

import 'tachyons'

const App = () => {
    const [route, setRoute] = useState('login')
    const onRouteChange = newRoute => {
        console.log(newRoute)
        if (newRoute === 'login') setRoute('login')
        else if (newRoute === 'student') setRoute('student')
        else if (newRoute === 'department') setRoute('department')
    }

    const [user, setUser] = useState(null)
    const [notifications, setNotifications] = useState([])
    const loadUser = user => {
        setUser({
            id: user.ID ? user.ID : user.Roll,
            name: user.Name,
            email: user.Email
        })
        if (user.Notifications) {
            setNotifications(user.Notifications)
        }
    }

    console.log(route)
    return (
        <>
            <Header />

            {/* eslint-disable-next-line */}
            {route === 'login' ? (
                <Login onRouteChange={onRouteChange} loadUser={loadUser} />
            ) : route === 'student' ? (
                <Student
                    onRouteChange={onRouteChange}
                    user={user}
                    notifications={notifications}
                    setNotifications={setNotifications}
                />
            ) : (
                <Department onRouteChange={onRouteChange} user={user} />
            )}
        </>
    )
}

export default App
