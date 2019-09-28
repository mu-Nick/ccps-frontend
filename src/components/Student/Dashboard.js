import React, { useState, useEffect } from 'react'

import { requestApproved, setResolved } from '../../services/complaintsService'
import { getStudentNotifications } from '../../services/studentService'

const Dashboard = ({ user }) => {
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        getStudentNotifications(user.id).then(response => {
            if (response.success) {
                console.log(response.data.notifications)
                setNotifications(response.data.notifications)
            }
        })
    }, [])

    const approveRequest = notification => {
        if (notification.type === 'COMP_RES') {
            setResolved(notification.complaintID).then(response => {
                if (response.success) {
                    setNotifications(
                        notifications.filter(not => not.complaintID !== notification.complaintID)
                    )
                }
            })
        }
        if (notification.type === 'SUP_REQ') {
            requestApproved(notification.complaintID, user.id).then(response => {
                if (response.success) {
                    setNotifications(
                        notifications.filter(not => not.complaintID !== notification.complaintID)
                    )
                }
            })
        }
    }

    const renderSupportNotifications = () => {
        return notifications
            .filter(notification => notification.type === 'SUP_REQ')
            .map(notification => (
                <li
                    key={notification.complaintID}
                    className='flex items-center lh-copy pa3 ph0-l bb b--black-10'
                >
                    <div className='pl3 flex-auto'>
                        <span className='f6 db black-70'>{notification.subject}</span>
                        <span className='f6 db black-70'>{notification.description}</span>
                        <span className='f6 db black-70'>{notification.message}</span>
                    </div>
                    <div>
                        <button
                            onClick={() => approveRequest(notification)}
                            type='button'
                            href='#0'
                            className='f6 link blue hover-dark-gray'
                        >
                            Support
                        </button>
                    </div>
                </li>
            ))
    }

    const renderConfirmationNotifications = () => {
        return notifications
            .filter(notification => notification.type === 'COMP_RES')
            .map(notification => (
                <li
                    key={notification.complaintID}
                    className='flex items-center lh-copy pa3 ph0-l bb b--black-10'
                >
                    <div className='pl3 flex-auto'>
                        <span className='f6 db black-70'>{notification.subject}</span>
                        <span className='f6 db black-70'>{notification.description}</span>
                        <span className='f6 db black-70'>{notification.message}</span>
                    </div>
                    <div>
                        <button
                            onClick={() => approveRequest(notification)}
                            type='button'
                            href='#0'
                            className='f6 link blue hover-dark-gray'
                        >
                            Support
                        </button>
                    </div>
                </li>
            ))
    }

    return (
        <>
            <div className='db center mw5 tc black'>
                <img
                    className='db ba b--black-10'
                    alt='Frank Ocean Blonde Album Cover'
                    src='https://imageog.flaticon.com/icons/png/512/16/16480.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
                />

                <dl className='mt2 f6 lh-copy'>
                    <dd className='ml0'>{user.id}</dd>
                    <dd className='ml0 gray'>{user.name}</dd>
                    <dd className='ml0 gray'>{user.email}</dd>
                </dl>
            </div>
            <div>
                <div className='center mw6'>
                    <h1 className=''>Support requests</h1>
                </div>
                <ul className='list pl0 mt0 measure center'>{renderSupportNotifications()}</ul>
            </div>
            <div>
                <div className='center mw6'>
                    <h1 className=''>Resolved Confirmations</h1>
                </div>
                <ul className='list pl0 mt0 measure center'>{renderConfirmationNotifications()}</ul>
            </div>
        </>
    )
}

export default Dashboard
