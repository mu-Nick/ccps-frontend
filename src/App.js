import React, { useState } from 'react'
import './App.css'

import 'tachyons'

import Department from './Components/Department/Department'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'

const App = () => {
	const [route, setRoute] = useState('login')
	const onRouteChange = newRoute => {
		console.log(newRoute)
		if (newRoute === 'login') setRoute('login')
		else if (newRoute === 'student') setRoute('student')
		else if (newRoute === 'department') setRoute('department')
	}
	console.log(route)
	return (
		<>
			<Header />

			{route === 'login' ? (
				<Login onRouteChange={onRouteChange} />
			) : (
				<Department onRouteChange={onRouteChange} />
			)}
		</>
	)
}

export default App
