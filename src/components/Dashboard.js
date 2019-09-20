import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import DashHome from './DashHome'
import Newcomp from './Newcomp'
import Complaints from './Complaints'

const complaints = {
    Computer: ['Windows XP'],
    Hostel: ['Lack of cleanliness in hostel 10', 'High Mess bill in H-4']
}

const depts = ['Computer', 'Hostel']

const Dashboard = () => {
    const [comps, setComps] = useState(complaints)
    const [departments, setDepartments] = useState(depts)

    return (
        <Layout>
            <Router>
                <Navbar />
                <Sidebar />
                <DynamicDiv>
                    <Route
                        path='/dashboard'
                        render={() => <DashHome comps={comps} departments={departments} />}
                    />
                    <Route path='/newcomp' render={() => <Newcomp departments={departments} />} />
                    <Route path='/viewcomp' render={() => <Complaints comps={comps} />} />
                </DynamicDiv>
            </Router>
        </Layout>
    )
}

const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

const DynamicDiv = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100vw - 250px);
    height: calc(100vh - 80px);
`

export default Dashboard
