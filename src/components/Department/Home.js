import React, { useState, useEffect } from 'react'

import { getDepartmentComplaints } from '../../services/departmentService'
import { changeStatus } from '../../services/complaintsService'

const Home = ({ deptid }) => {
    const [unprocessed, setUnprocessed] = useState([])

    useEffect(() => {
        console.log('RENDERING HOME UNPROCESSED')
        getDepartmentComplaints(deptid).then(result => {
            const comps = result.data
                .filter(comp => comp.Status === 'Unprocessed')
                .map(comp => {
                    return { ...comp, visibility: 'none' }
                })
            setUnprocessed(comps)
        })
    }, [])

    const changeVisibility = compID => {
        const newComps = unprocessed.map(comp => {
            if (comp.ID === compID) {
                return {
                    ...comp,
                    visibility: comp.visibility === 'none' ? '' : 'none'
                }
            }
            return comp
        })
        setUnprocessed(newComps)
    }

    const setPending = compID => {
        changeStatus(compID, 'Pending')
            .then(response => {
                if (response.success) {
                    console.log('Status changed')
                    setUnprocessed(unprocessed.filter(comp => comp.ID !== compID))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const renderUnprocessedComplaints = () => {
        return unprocessed.map(comp => (
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
                                setPending(comp.ID)
                            }}
                        >
                            Set
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
                    <h1>Recent Complaints</h1>
                </div>
                {renderUnprocessedComplaints()}
            </main>
        </div>
    )
}

export default Home
