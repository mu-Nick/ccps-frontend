import React, { useState } from 'react'

const DepartmentLogin = ({ onRouteChange, loadUser }) => {
	const [signInId, setId] = useState(null)
	const [signInPassword, setPassword] = useState(null)

	const onIdChange = event => {
		setId(event.target.value)
	}

	const onPasswordChange = event => {
		setPassword(event.target.value)
	}

	const onSubmitSignin = event => {
		event.preventDefault()

		if (!signInId || !signInPassword) {
			return alert('Please fill the fields')
		}
		fetch('http://localhost:3001/login/department', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: signInId,
				password: signInPassword
			})
		})
			.then(response => response.json())
			.then(response => {
				if (response.success) {
					loadUser(response.data)
					onRouteChange('department')
				} else {
					console.log(response)
					alert(response.error.message)
				}
			})
	}

	return (
		<main class='pa4 black-80'>
			<form class='measure center' method='post'>
				<fieldset id='sign_up' class='ba b--transparent ph0 mh0'>
					<legend class='f4 fw6 ph0 mh0'>Department Login</legend>
					<div class='mt3'>
						<label class='db fw6 lh-copy f6' for='email-address'>
							Department ID
						</label>
						<input
							class='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
							type='text'
							name='departmentId'
							id='departmentId'
							onChange={onIdChange}
						/>
					</div>
					<div class='mv3'>
						<label class='db fw6 lh-copy f6' for='password'>
							Password
						</label>
						<input
							class='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
							type='password'
							name='password'
							id='password'
							onChange={onPasswordChange}
						/>
					</div>
					<label class='pa0 ma0 lh-copy f6 pointer'>
						<input type='checkbox' /> Remember me
					</label>
				</fieldset>
				<div class=''>
					<button
						class='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
						onClick={onSubmitSignin}
					>
						Sign In
					</button>
				</div>
			</form>
		</main>
	)
}

export default DepartmentLogin
