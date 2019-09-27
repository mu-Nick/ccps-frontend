import React, { useState } from 'react'
import Dashboard from './Dashboard'
import SideNav from './SideNav'
import ViewComplaints from './ViewComplaints'
import NewComplaint from './NewComplaint'

const Student = ({ user, onRouteChange }) => {
    const [Iface, setIface] = useState('dashboard')
    const [comps, setComps] = useState([])
    const onIfaceChange = newIface => {
        if (newIface !== 'logout') setIface(newIface)
        else onRouteChange('login')
    }

    const renderComponents = () => {
        switch (Iface) {
            case 'dashboard':
                return <Dashboard user={user} loadComplaints={setComps} />
            case 'viewComplaints':
                return <ViewComplaints comps={comps} user={user} loadComplaintsloadComplaints />
            case 'newComplaint':
                return <NewComplaint rollno={user.id} />
            default:
                return <></>
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
