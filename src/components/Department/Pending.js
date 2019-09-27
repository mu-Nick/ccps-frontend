import React, { useState, useEffect } from 'react'

import { getDepartmentComplaints } from '../../services/departmentService'
import { changeStatus } from '../../services/complaintsService'

const Pending = ({ deptid }) => {
    const [pending, setPending] = useState([])

    useEffect(() => {
        getDepartmentComplaints(deptid).then(result => {
            const comps = result.data
                .filter(comp => comp.Status === 'Pending')
                .map(comp => {
                    return { ...comp, visibility: 'none' }
                })
            setPending(comps)
        })
    }, [])

    const changeVisibility = compID => {
        const newComps = pending.map(comp => {
            if (comp.ID === compID) {
                comp.visibility = comp.visibility === 'none' ? '' : 'none'
            }
            return comp
        })
        setPending(newComps)
    }

    const setResolved = compID => {
        changeStatus(compID, 'Resolved')
            .then(response => {
                if (response.success) {
                    console.log('Status changed')
                    setPending(pending.filter(comp => comp.ID !== compID))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const renderPendingComplaints = () => {
        return pending.map(comp => (
            <article key={comp.ID} className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
                <div className='dtc v-mid pl3'>
                    <h1 className='f6 f5-ns fw6 lh-title black mv0'>{comp.Subject}</h1>
                    <h2 className='f6 fw4 mt0 mb0 black-60'>
                        {comp.Supporters === null ? 0 : comp.Supporters.length}
                    </h2>
                    <div
                        style={{
                            display: comp.visibility
                        }}
                    >
                        <h2 className='f6 fw4 mt0 mb0 black-60'>{comp.Description}</h2>
                        {/* <label htmlFor='supporters'>Change Status </label>
                        <input type='text' id='status' /> */}
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
                            {comp.visibility === 'none' ? 'Show' : 'Hide'}
                        </button>
                        <br />
                        <br />
                        <button
                            style={{
                                display: comp.visibility
                            }}
                            type='button'
                            className=' f6 bg-white ba b--black-10 dim pointer pv1 black-60'
                            onClick={() => {
                                setResolved(comp.ID)
                            }}
                        >
                            Change
                        </button>
                    </form>
                </div>
            </article>
        ))
    }

    return (
        <div>
            <main className='mw8 center'>
                <div className=''>
                    <h1>Pending Complaints</h1>
                </div>
                {renderPendingComplaints()}
            </main>
        </div>
    )
}

export default Pending
