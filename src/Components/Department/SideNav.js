import React from 'react'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const Sidenav = ({ onIfaceChange }) => {
	return (
		<SideNav
			onSelect={selected => {
				// Add your code here
			}}
		>
			<SideNav.Toggle />
			<SideNav.Nav defaultSelected='home'>
				<NavItem eventKey='home' onClick={() => onIfaceChange('home')}>
					<NavIcon>
						<i className='fa fa-fw fa-home' style={{ fontSize: '1.75em' }} />
					</NavIcon>
					<NavText>Home</NavText>
				</NavItem>
				<NavItem eventKey='pend' onClick={() => onIfaceChange('pending')}>
					<NavIcon>
						<i className='fa fa-fw fa-line-chart' style={{ fontSize: '1.75em' }} />
					</NavIcon>
					<NavText>Pending Complaints</NavText>
				</NavItem>
				<NavItem eventKey='logout' onClick={() => onIfaceChange('logout')}>
					<NavIcon>
						<i className='fa fa-fw fa-line-chart' style={{ fontSize: '1.75em' }} />
					</NavIcon>
					<NavText>Logout</NavText>
				</NavItem>
			</SideNav.Nav>
		</SideNav>
	)
}

export default Sidenav
