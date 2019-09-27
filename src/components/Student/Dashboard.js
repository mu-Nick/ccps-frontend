import React from 'react'

import { requestApproved } from '../../services/complaintsService'

const Dashboard = ({ user, notifications, setNotifications }) => {
    const approveRequest = compid => {
        console.log(compid, user.id)
        requestApproved(compid, user.id).then(response => {
            if (response.success) {
                setNotifications(notifications.filter(not => not.complaintID !== compid))
            }
        })
    }

    const renderNotifications = () => {
        return notifications.map(notification => (
            <li
                key={notification.complaintID}
                className='flex items-center lh-copy pa3 ph0-l bb b--black-10'
            >
                <div className='pl3 flex-auto'>
                    <span className='f6 db black-70'>ComplaintID : {notification.complaintID}</span>
                    <span className='f6 db black-70'>{notification.message}</span>
                </div>
                <div>
                    <button
                        onClick={() => approveRequest(notification.complaintID)}
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
                    <h1 className=''>Notifications</h1>
                </div>
                <ul className='list pl0 mt0 measure center'>{renderNotifications()}</ul>
            </div>
        </>
    )
}

export default Dashboard
