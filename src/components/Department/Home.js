import React, { useState, useEffect } from 'react'

import { getDepartmentComplaints } from '../../services/departmentService'

const Home = ({ deptid }) => {
    const [unprocessed, setUnprocessed] = useState([])

    useEffect(() => {
        getDepartmentComplaints(deptid).then(result => {
            setUnprocessed(result.data.filter(comp => comp.Status === 'Unprocessed'))
        })
    }, [])

    const renderUnprocessedComplaints = () => {
        return unprocessed.map(comp => (
            <article key={comp.ID} className='dt w-100 bb b--black-05 pb2 mt2' href='#0'>
                <div className='dtc v-mid pl3'>
                    <h1 className='f6 f5-ns fw6 lh-title black mv0'>{comp.Subject}</h1>
                    <h2 className='f6 fw4 mt0 mb0 black-60'>
                        {comp.Supporters === null ? 0 : comp.Supporters.length}
                    </h2>
                </div>
                <div className='dtc v-mid'>
                    <form className='w-100 tr'>
                        <button
                            type='button'
                            className='f6 bg-white ba b--black-10 dim pointer pv1 black-60'
                        >
                            View
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
