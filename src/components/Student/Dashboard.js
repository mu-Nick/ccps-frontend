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
                <ul className='list pl0 mt0 measure center'>
                    <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
                        <div className='pl3 flex-auto'>
                            <span className='f6 db black-70'>Subjet</span>
                            <span className='f6 db black-70'>Supporters</span>
                        </div>
                        <div>
                            <button href='#0' className='f6 link blue hover-dark-gray'>
                                Support
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Dashboard
