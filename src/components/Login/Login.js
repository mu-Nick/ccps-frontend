import React from 'react'

import StudentLogin from './StudentLogin'
import DepartmentLogin from './DepartmentLogin'

const Login = ({ onRouteChange, loadUser }) => {
	return (
		<div className=''>
			<div class='mw9 center ph3-ns'>
				<div class='cf ph3-ns2-ns'>
					<div class='fl mv6 w-100 w-50-ns pa2'>
						<div class='outline bg-white pv4'>
							<StudentLogin
								className='fl w-50 pa2'
								onRouteChange={onRouteChange}
								loadUser={loadUser}
							/>
						</div>
					</div>
					<div class='fl mv6 w-100 w-50-ns pa2'>
						<div class='outline bg-white pv4'>
							<DepartmentLogin
								className='fl w-50 pa2'
								onRouteChange={onRouteChange}
								loadUser={loadUser}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
