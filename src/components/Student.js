import React, { useState } from 'react'
import Dashboard from './Dashboard'
import SideNav from './SideNav'
import ViewComplaints from './ViewComplaints'
import NewComplaint from './NewComplaint'

const Student = ({ onRouteChange }) => {
	const [Iface, setIface] = useState('dashboard')
	const onIfaceChange = newIface => {
		if (newIface !== 'logout') setIface(newIface)
		else onRouteChange('login')
	}

	const renderComponents = () => {
		switch (Iface) {
			case 'dashboard':
				return <Dashboard />
			case 'viewComplaints':
				return <ViewComplaints />
			case 'newComplaint':
				return <NewComplaint />
		}
	}
	return (
		<>
			<SideNav onIfaceChange={onIfaceChange} />
			{renderComponents()}
		</>
	)
}

export default Student
