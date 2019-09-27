import React, { useState } from 'react'
import Dashboard from './Dashboard'
import SideNav from './SideNav'
import ViewComplaints from './ViewComplaints'
import NewComplaint from './NewComplaint'

const Student = ({ user, notifications, setNotifications, onRouteChange }) => {
    const [Iface, setIface] = useState('dashboard')
    const onIfaceChange = newIface => {
        if (newIface !== 'logout') setIface(newIface)
        else {
            onRouteChange('login')
            setNotifications([])
        }
    }

    const renderComponents = () => {
        // eslint-disable-next-line
        switch (Iface) {
            case 'dashboard':
                return (
                    <Dashboard
                        user={user}
                        notifications={notifications}
                        setNotifications={setNotifications}
                    />
                )
            case 'viewComplaints':
                return <ViewComplaints user={user} />
            case 'newComplaint':
                return <NewComplaint rollno={user.id} />
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
