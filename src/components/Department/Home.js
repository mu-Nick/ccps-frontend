import React, { useState, useEffect } from 'react'

import { getDepartmentComplaints } from '../../services/departmentService'
import { setPending } from '../../services/complaintsService'

// Displays unresolved/new complaints for this department
const Home = ({ user }) => {
    const [unprocessed, setUnprocessed] = useState([])

    // Fetch the unresolved complaints
    useEffect(() => {
        getDepartmentComplaints(user.id).then(result => {
            const comps = result.data
                .filter(comp => comp.Status === 'Unprocessed')
                .map(comp => {
                    return {
                        ...comp,
                        visibility: 'none',
                        supportersCount: comp.Supporters !== null ? comp.Supporters.length : 0
                    }
                })
            setUnprocessed(comps)
        })
    }, [user.id])

    // To expand the description of complaint
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

    // Set this complaint's status to pending
    const setToPending = compID => {
        setPending(compID)
            .then(response => {
                if (response.success) {
                    // Remove this complaint from state
                    setUnprocessed(unprocessed.filter(comp => comp.ID !== compID))
                }
            })
            .catch(() => {
                alert("Couldn't change status, please try again later")
            })
    }

    // Render all the complaints sorted by status
    const renderUnprocessedComplaints = () => {
        unprocessed.sort((a, b) => b.supportersCount - a.supportersCount)
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
                                setToPending(comp.ID)
                            }}
                        >
                            Process
                        </button>
                    </form>
                </div>
            </article>
        ))
    }

    return (
        <div className=''>
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
            <main className='mw8 center'>
                <div className=''>
                    <h1>Recent Unprocessed Complaints</h1>
                    <h5>Ranked by supporter count</h5>
                </div>
                {renderUnprocessedComplaints()}
            </main>
        </div>
    )
}

export default Home
