import React from 'react'
import { withRouter } from 'react-router-dom'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const Sidenav = ({ match, history, setUser }) => {
    return (
        <SideNav
            onSelect={selected => {
                if (selected === 'logout') {
                    localStorage.clear()
                    setUser(null)
                    history.push('/login')
                } else if (selected === 'newComplaint') {
                    history.push(`${match.url}/newcomplaint`)
                } else if (selected === 'dashboard') {
                    history.push(`${match.url}`)
                } else if (selected === 'viewComplaints') {
                    history.push(`${match.url}/viewcomplaints`)
                }
            }}
            style={{ position: 'fixed' }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected='dashboard'>
                <NavItem eventKey='dashboard'>
                    <NavIcon>
                        <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>Dashboard</NavText>
                </NavItem>
                <NavItem eventKey='newComplaint'>
                    <NavIcon>
                        <i className='fa fa-plus-circle' style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>New Complaint</NavText>
                </NavItem>
                <NavItem eventKey='viewComplaints'>
                    <NavIcon>
                        <i className='fa fa-eye' style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>View Complaints</NavText>
                </NavItem>
                <NavItem eventKey='logout'>
                    <NavIcon>
                        <i className='fa fa-sign-out' style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>Logout</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

export default withRouter(Sidenav)
