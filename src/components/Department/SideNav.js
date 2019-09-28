import React from 'react'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const Sidenav = ({ onIfaceChange }) => {
	return (
		<SideNav
			className='fixed'
			onSelect={selected => {
				onIfaceChange(selected)
			}}
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

export default Sidenav
