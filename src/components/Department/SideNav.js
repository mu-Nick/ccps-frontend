import React from 'react'
import { Link, withRouter } from 'react-router-dom'

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
                }
            }}
            style={{ position: 'fixed' }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected='home'>
                <NavItem eventKey='home'>
                    <NavIcon>
                        <Link to={`${match.url}`}>
                            <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
                        </Link>
                    </NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey='pending'>
                    <NavIcon>
                        <Link to={`${match.url}/pending`}>
                            <i className='fa fa-clock-o' style={{ fontSize: '1.75em' }} />
                        </Link>
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
