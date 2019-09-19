import React from 'react'
import styled from 'styled-components'

const DashHome = ({ comps, departments }) => {
    const generateBoards = () => {
        return departments.map(d => {
            return <Board title={d} key={new Date().getTime()} comps={comps[d]} />
        })
    }

    return (
        <Main>
            <Heading>Your Complaints (sorted by department)</Heading>
            <Boards>{generateBoards()}</Boards>
        </Main>
    )
}

const Board = ({ title, comps }) => {
    const generateList = () => {
        return comps.map(c => <li key={new Date().getTime()}>&gt; {c}</li>)
    }

    return (
        <Card>
            <CardHead>{title}</CardHead>
            <UL>{generateList()}</UL>
        </Card>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    transition: all 0.2s;
`

const Heading = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5em;
`

const Boards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;
`

const Card = styled.div`
    display: flex;
    width: 33%;
    flex-direction: column;
    align-items: center;
`

const CardHead = styled.h2`
    width: 100%;
    height: 20px;
    text-align: center;
    margin-bottom: 40px;
`
const UL = styled.ul`
    list-style: none;
    width: 100%;
    text-align: center;
    > li {
        margin: 10px auto;
    }
`

export default DashHome
