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
            {/*<DashHome comps={comps} departments={departments} />*/}

            <div class='mw9 center ph3-ns'>
                <div class='cf ph2-ns'>
                    <div class='fl w-100 w-third-ns pa2'>
                        <section class='tc pa3 pa5-ns'>
                            <article class='hide-child relative ba b--black-20 mw5 center'>
                                <img
                                    src='https://nitkkr.ac.in/docs/NITKKR_logo.png'
                                    class='db'
                                    alt='Department'
                                />
                                <div class='pa2 bt b--black-20'>
                                    <a
                                        class='link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1'
                                        href='#'
                                    >
                                        Department
                                    </a>
                                </div>
                            </article>
                        </section>
                    </div>
                    <div class='fl w-100 w-third-ns pa2'>
                        <section class='tc pa3 pa5-ns'>
                            <article class='hide-child relative ba b--black-20 mw5 center'>
                                <img
                                    src='https://nitkkr.ac.in/docs/NITKKR_logo.png'
                                    class='db'
                                    alt='Department'
                                />
                                <div class='pa2 bt b--black-20'>
                                    <a
                                        class='link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1'
                                        href='#'
                                    >
                                        Department
                                    </a>
                                </div>
                            </article>
                        </section>
                    </div>
                    <div class='fl w-100 w-third-ns pa2'>
                        <section class='tc pa3 pa5-ns'>
                            <article class='hide-child relative ba b--black-20 mw5 center'>
                                <img
                                    src='https://nitkkr.ac.in/docs/NITKKR_logo.png'
                                    class='db'
                                    alt='Department'
                                />
                                <div class='pa2 bt b--black-20'>
                                    <a
                                        class='link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1'
                                        href='#'
                                    >
                                        Department
                                    </a>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </>
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
