import React from 'react'

import { requestApproved } from '../../services/complaintsService'

const Dashboard = ({ user, notifications, setNotifications }) => {
    const renderNotifications = () => {
        return notifications.map(notification => (
            <article key={notification.complaintID} className='dt w-100 pb2 mt2' href='#0'>
                <div className='dtc v-mid pl3'>
                    <h1 className='f6 f5-ns fw6 lh-title black mv0'>{notification.complaintID}</h1>
                    <h2 className='f6 fw4 mt0 mb0 black-60'>{notification.message}</h2>
                </div>
                <div className='dtc v-mid'>
                    <form className='w-100 tr'>
                        <button
                            type='button'
                            className='f6 bg-white ba b--black-10 dim pointer pv1 black-60'
                        >
                            Support
                        </button>
                        <button
                            type='button'
                            className='f6 bg-white ba b--black-10 dim pointer pv1 black-60'
                        >
                            Decline
                        </button>
                    </form>
                </div>
            </article>
        ))
    }

    return (
        <>
            <div className='ma5'>
                <div className='fl w-100 w-33-ns tc pv5 '>
                    <h1>{user.id}</h1>
                </div>
                <div className='fl w-100 w-33-ns tc pv5'>
                    <h1>{user.name}</h1>
                </div>
                <div className='fl w-100 w-33-ns tc pv5'>
                    <h1>{user.email}</h1>
                </div>
                <div className='fl w-100 w-100-ns tc pv2'>
                    <h1>Notifications</h1>
                </div>
                <div className='fl w-100 w-100-ns tc pv2'>{renderNotifications()}</div>
            </div>
        </>
    )
}

export default Dashboard
