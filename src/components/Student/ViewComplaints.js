import React, { useState, useEffect } from 'react'

import { getStudentComplaints } from '../../services/studentService'
import { sendSupportRequest } from '../../services/complaintsService'

const ViewComplaints = ({ user }) => {
    const [comps, setComps] = useState([])

    // View complaints opened by this user
    useEffect(() => {
        getStudentComplaints(user.id).then(response => {
            if (response.success) {
                setComps(
                    response.data.map(comp => {
                        return { ...comp, visibility: 'none' }
                    })
                )
            } else {
                alert("Couldn't fetch complaints")
            }
        })
    }, [user.id])

    // To toggle description visibility
    const changeVisibility = compID => {
        const newComps = comps.map(comp => {
            if (comp.ID === compID) {
                return { ...comp, visibility: comp.visibility === 'none' ? '' : 'none' }
            }
            return comp
        })
        setComps(newComps)
    }

    // Send request to supporters
    const submit = compid => {
        const supportersList = document
            .querySelector(`#supporters-${compid}`)
            .value.trim()
            .split(',')
            .map(i => parseInt(i, 10))

        sendSupportRequest(compid, supportersList).then(result => {
            if (result.success) {
                alert('Request sent to students')
            }
        })
    }

    // Render the complaints of this user
    const renderComplaints = () => {
        return comps.map(comp => (
            <article key={comp.ID} className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
                <div className='dtc v-mid pl3'>
                    <h1 className='f6 f5-ns fw6 lh-title black mv0'>{comp.Subject}</h1>
                    <h2 className='f6 fw4 mt0 mb0 black-60'>
                        {comp.Supporters === null ? 0 : comp.Supporters.length}
                    </h2>
                    <h2 className='f6 fw4 mt0 mb0 black-60'>{comp.DeptID}</h2>
                    <div
                        style={{
                            display: comp.visibility
                        }}
                    >
                        <h2 className='f6 fw4 mt0 mb0 black-60'>{comp.Description}</h2>
                        <h2 className='f6 fw4 mt0 mb0 black-60'>{comp.Status}</h2>
                        <label htmlFor='supporters'>
                            Enter supporters to add
                            <input type='text' id={`supporters-${comp.ID}`} />
                        </label>
                    </div>
                </div>
                <div className='dtc v-mid'>
                    <form className='w-100 tr'>
                        <button
                            onClick={() => {
                                changeVisibility(comp.ID)
                            }}
                            type='button'
                            className='f6 bg-white ba b--black-10 dim pointer pv1 black-60'
                        >
                            {comp.visibility === 'none' ? 'View' : 'Hide'}
                        </button>
                        <br />
                        <br />
                        <button
                            style={{
                                display: comp.visibility
                            }}
                            type='button'
                            className=' f6 bg-white ba b--black-10 dim pointer pv1 black-60'
                            onClick={() => submit(comp.ID)}
                        >
                            Add
                        </button>
                    </form>
                </div>
            </article>
        ))
    }

    return (
        <div className=''>
            <main className='mw8 center'>
                <div className=''>
                    <h1>All Pending Complaints</h1>
                </div>
                {renderComplaints()}
            </main>
        </div>
    )
}

export default ViewComplaints
