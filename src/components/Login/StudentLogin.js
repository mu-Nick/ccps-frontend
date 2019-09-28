import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { studentLogin } from '../../services/loginService'

const StudentLogin = ({ history, loadUser }) => {
    const [signInRoll, setRoll] = useState(null)
    const [signInPassword, setPassword] = useState(null)
    const [rememberMe, setRememberMe] = useState(true)

    const onRollChange = event => {
        setRoll(event.target.value)
    }

    const onPasswordChange = event => {
        setPassword(event.target.value)
    }

    // Login the user
    const onSubmitSignin = event => {
        event.preventDefault()

        // Validate inputs
        if (!signInRoll || !signInPassword) {
            alert('Please fill in the fields')
            // eslint-disable-next-line
        } else if (isNaN(signInRoll) || signInPassword.length < 8) {
            alert('Please enter valid login credentials')
        } else {
            // Send login credentials to server
            studentLogin(signInRoll, signInPassword).then(response => {
                if (response.success) {
                    // If login successfull
                    loadUser(response.data)
                    localStorage.clear()
                    if (rememberMe) {
                        localStorage.setItem(
                            'user',
                            JSON.stringify({ ...response.data, type: 'student' })
                        )
                    }
                    // Redirect to student's page
                    history.push(`/student/${response.data.Roll}`)
                } else {
                    alert(response.error.message)
                }
            })
        }
    }

    return (
        <main className='pa4 black-80'>
            <form className='measure center' method='POST'>
                <fieldset className='ba b--transparent ph0 mh0'>
                    <legend className='f4 fw6 ph0 mh0'>Student Login</legend>
                    <div className='mt3'>
                        <label className='db fw6 lh-copy f6' htmlFor='roll'>
                            Roll Number
                            <input
                                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                                type='text'
                                name='roll'
                                id='roll'
                                onChange={onRollChange}
                            />
                        </label>
                    </div>
                    <div className='mv3'>
                        <label className='db fw6 lh-copy f6' htmlFor='password'>
                            Password
                            <input
                                className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                                type='password'
                                name='password'
                                onChange={onPasswordChange}
                            />
                        </label>
                    </div>
                    <label className='pa0 ma0 lh-copy f6 pointer' htmlFor='rememberStu'>
                        <input
                            type='checkbox'
                            id='rememberStu'
                            checked={rememberMe}
                            onChange={() => {
                                setRememberMe(!rememberMe)
                            }}
                        />
                        Remember me
                    </label>
                </fieldset>
                <div className=''>
                    <button
                        type='button'
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

export default withRouter(StudentLogin)
