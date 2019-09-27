import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

// const complaints = {
//     Computer: ['Windows XP'],
//     Hostel: ['Lack of cleanliness in hostel 10', 'High Mess bill in H-4']
// }

// const depts = ['Computer', 'Hostel']

const Dashboard = ({ user }) => {
    // const [departments, setDepartments] = useState(depts)

    return (
        <>
            <div className='ma5'>
                <div class='fl w-100 w-33-ns tc pv5 '>
                    <h1>{user.id}</h1>
                </div>
                <div class='fl w-100 w-33-ns tc pv5'>
                    <h1>{user.name}</h1>
                </div>
                <div class='fl w-100 w-33-ns tc pv5'>
                    <h1>{user.email}</h1>
                </div>
                <div className='fl w-100 w-100-ns tc pv2'>
                    <h1>Notifications</h1>
                </div>
                <div className='fl w-100 w-100-ns tc pv2'>
                    <article class='dt w-100 pb2 mt2' href='#0'>
                        <div class='dtc v-mid pl3'>
                            <h1 class='f6 f5-ns fw6 lh-title black mv0'>Subject</h1>
                            <h2 class='f6 fw4 mt0 mb0 black-60'>Supporters</h2>
                        </div>
                        <div class='dtc v-mid'>
                            <form class='w-100 tr'>
                                <button class='f6 bg-white ba b--black-10 dim pointer pv1 black-60'>
                                    View
                                </button>
                            </form>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Dashboard
