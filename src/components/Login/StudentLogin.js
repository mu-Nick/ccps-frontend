import React, { useState } from 'react'

const StudentLogin = ({ onRouteChange, loadUser }) => {
	const [signInRoll, setRoll] = useState(null)
	const [signInPassword, setPassword] = useState(null)

	const onRollChange = event => {
		setRoll(event.target.value)
	}

	const onPasswordChange = event => {
		setPassword(event.target.value)
	}

	const onSubmitSignin = event => {
		event.preventDefault()

		if (!signInRoll || !signInPassword) {
			return alert('Please fill the fields')
		}
		fetch('http://localhost:3001/login/student', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				rollno: signInRoll,
				password: signInPassword
			})
		})
			.then(response => response.json())
			.then(response => {
				if (response.success) {
					loadUser(response.data)
					onRouteChange('student')
				} else {
					console.log(response)
					alert(response.error.message)
				}
			})
	}

	return (
		<main class='pa4 black-80'>
			<form class='measure center' method='POST'>
				<fieldset id='sign_up' class='ba b--transparent ph0 mh0'>
					<legend class='f4 fw6 ph0 mh0'>Student Login</legend>
					<div class='mt3'>
						<label class='db fw6 lh-copy f6' for='email-address'>
							Roll Number
						</label>
						<input
							class='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
							type='text'
							name='roll'
							id='roll'
							onChange={onRollChange}
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

export default StudentLogin
