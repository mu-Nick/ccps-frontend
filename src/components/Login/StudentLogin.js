import React, { useState } from 'react'

import { studentLogin } from '../../services/loginService'

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
        studentLogin(signInRoll, signInPassword).then(response => {
            if (response.success) {
                loadUser(response.data)
                onRouteChange('student')
            } else {
                console.log('STUDENT LOGIN ERROR')
            }
        })
    }

    return (
        <main className='pa4 black-80'>
            <form className='measure center' method='POST'>
                <fieldset className='ba b--transparent ph0 mh0'>
                    <legend className='f4 fw6 ph0 mh0'>Student Login</legend>
                    <div className='mt3'>
                        <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                            Roll Number
                        </label>
                        <input
                            className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                            type='text'
                            name='roll'
                            id='roll'
                            onChange={onRollChange}
                        />
                    </div>
                    <div className='mv3'>
                        <label className='db fw6 lh-copy f6' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                            type='password'
                            name='password'
                            onChange={onPasswordChange}
                        />
                    </div>
                    <label className='pa0 ma0 lh-copy f6 pointer'>
                        <input type='checkbox' /> Remember me
                    </label>
                </fieldset>
                <div className=''>
                    <button
                        className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
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
