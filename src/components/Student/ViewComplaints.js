import React, { useState, useEffect } from 'react'

import { getStudentComplaints } from '../../services/studentService'

const ViewComplaints = ({ user }) => {
    const [comps, setComps] = useState([])

    useEffect(() => {
        getStudentComplaints(user.id).then(response => {
            if (response.success) {
                setComps(
                    response.data.map(comp => {
                        return { ...comp, visibility: 'none' }
                    })
                )
                console.log(response.data)
            } else {
                console.log('COULDNT RETREIVE COMPLAINTS')
            }
        })
    }, [])

    const changeVisibility = compID => {
        const newComps = comps.map(comp => {
            if (comp.ID === compID) {
                comp.visibility = comp.visibility === 'none' ? '' : 'none'
            }
            return comp
        })
        setComps(newComps)
    }

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
                        <label htmlFor='supporters'>Enter supporters to add </label>
                        <input type='text' id='supporters' />
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
