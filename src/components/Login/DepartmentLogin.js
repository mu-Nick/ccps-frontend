import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { departmentLogin } from '../../services/loginService'

const DepartmentLogin = ({ history, loadUser }) => {
    const [signInId, setId] = useState(null)
    const [signInPassword, setPassword] = useState(null)
    const [rememberMe, setRememberMe] = useState(true)

    const onIdChange = event => {
        setId(event.target.value)
    }

    const onPasswordChange = event => {
        setPassword(event.target.value)
    }

    const onSubmitSignin = event => {
        event.preventDefault()
        // Validate inputs
        if (!signInId || !signInPassword) {
            alert('Please fill the fields')
        } else if (signInPassword.length < 8) {
            alert('Please enter valid login credentials')
        } else {
            // Send login credentials to server
            departmentLogin(signInId, signInPassword).then(response => {
                if (response.success) {
                    loadUser(response.data)
                    localStorage.clear()
                    if (rememberMe) {
                        localStorage.setItem(
                            'user',
                            JSON.stringify({ ...response.data, type: 'department' })
                        )
                    }
                    // Redirect to department page
                    history.push(`/department/${response.data.ID}`)
                } else {
                    alert(response.error.message)
                }
            })
        }
    }

    return (
        <main className='pa4 black-80'>
            <form className='measure center' method='post'>
                <fieldset className='ba b--transparent ph0 mh0'>
                    <legend className='f4 fw6 ph0 mh0'>Department Login</legend>
                    <div className='mt3'>
                        <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                            Department ID
                            <input
                                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                                type='text'
                                name='departmentId'
                                id='departmentId'
                                onChange={onIdChange}
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
                    <label className='pa0 ma0 lh-copy f6 pointer' htmlFor='rememberDep'>
                        <input
                            type='checkbox'
                            id='rememberDep'
                            checked={rememberMe}
                            onChange={e => {
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

export default withRouter(DepartmentLogin)
