import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { studentLogin } from '../../services/loginService'

const StudentLogin = ({ history, loadUser }) => {
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
                history.push(`/student/${response.data.Roll}`)
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
                    <label className='pa0 ma0 lh-copy f6 pointer' htmlFor='remember'>
                        <input type='checkbox' id='remember' /> Remember me
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
