import React from 'react'
import styled from 'styled-components'

const Complaint = ({ comps }) => {
    const generateList = k => {
        return comps[k].map(comp => <li key={new Date().getTime()}>{comp}</li>)
    }

    const returnList = () => {
        const keys = Object.keys(comps)
        return keys.map(k => (
            <div>
                <ul>{generateList(k)}</ul>
            </div>
        ))
    }

    return (
        <Main>
            <Heading>All complaints opened by you : </Heading>
            <Section>{returnList()}</Section>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    transition: all 0.2s;
`

const Heading = styled.h1`
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    font-size: 1.5em;
`

const Section = styled.section`
    width: 100%;
    padding: 20px;
    font-size: 1.35em;
`

export default Complaint
