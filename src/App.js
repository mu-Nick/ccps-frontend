import React, { useState } from 'react'
import './App.css'

import Department from './components/Department/Department'
import Header from './components/Header/Header'
import Login from './components/Login/Login'

import Student from './components/Student'

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
    const loadUser = user => {
        setUser({
            id: user.id ? user.id : user.Roll,
            name: user.Name,
            email: user.Email
        })
        console.log(user)
    }

    console.log(route)
    return (
        <>
            <Header />

            {route === 'login' ? (
                <Login onRouteChange={onRouteChange} loadUser={loadUser} />
            ) : route === 'student' ? (
                <Student onRouteChange={onRouteChange} />
            ) : (
                <Department onRouteChange={onRouteChange} />
            )}
        </>
    )
}

export default App
