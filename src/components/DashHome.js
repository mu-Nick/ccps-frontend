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
        return comps.map(c => <li key={new Date().getTime()}>{c}</li>)
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
    background: linear-gradient(0deg, rgb(85, 217, 233, 0.5), rgb(86, 73, 252, 0.5));
`

const Heading = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5em;
    color: black;
`

const Boards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
`

const Card = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 10px 0 0;
    box-shadow: 1px 1px 10px 1px black;
`

const CardHead = styled.h2`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
`
const UL = styled.ul`
    list-style: none;
    width: 100%;
    text-align: center;

    > li {
        margin: 0 auto;
        height: 40px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    :nth-child(2n) {
        background: rgba(255, 0, 0, 0.1);
    }
`

export default DashHome
