import React from 'react'
import { withRouter } from 'react-router-dom'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const Sidenav = ({ match, history, setUser }) => {
    return (
        <SideNav
            className='fixed'
            onSelect={selected => {
                if (selected === 'logout') {
                    localStorage.clear()
                    setUser(null)
                    history.push('/login')
                } else if (selected === 'home') {
                    history.push(`${match.url}`)
                } else if (selected === 'pending') {
                    history.push(`${match.url}/pending`)
                }
            }}
            style={{ position: 'fixed' }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected='home'>
                <NavItem eventKey='home'>
                    <NavIcon>
                        <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey='pending'>
                    <NavIcon>
                        <i className='fa fa-clock-o' style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>Pending Complaints</NavText>
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
