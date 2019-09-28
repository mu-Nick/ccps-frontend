import React, { useState } from 'react'

import Sidenav from './SideNav'
import Home from './Home'
import Pending from './Pending'
// import ViewComplaint from '../ViewComplaint/ViewComplaint'

const Department = ({ user, onRouteChange }) => {
    const [iface, setIface] = useState('home')

    const onIfaceChange = newRoute => {
        if (newRoute === 'home') setIface('home')
        else if (newRoute === 'pending') setIface('pending')
        else if (newRoute === 'logout') onRouteChange('login')
    }

    return (
        <div>
            <Sidenav onIfaceChange={onIfaceChange} />
            {iface === 'home' ? <Home user={user} /> : <Pending deptid={user.id} />}
            {/*<ViewComplaint />*/}
        </div>
    )
}

export default Department
