import React from 'react'
import styled from 'styled-components'

const Complaint = ({ comps }) => {
    const returnList = () => {
        const keys = Object.keys(comps)
        return keys.map(k => {
            return comps[k].map(comp => (
                <>
                    <Title>{comp}</Title>
                    <Div>100</Div>
                    <Status>Reviewed</Status>
                </>
            ))
        })
    }

    return (
        <Main>
            <Heading>All complaints opened by you : </Heading>
            <Section>
                <TH>Title</TH>
                <TH>Supporters</TH>
                <TH>Status</TH>
                {returnList()}
            </Section>
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
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-row-gap: 5px;
    justify-items: stretch;
    align-items: center;
    justify-content: center;
`

const TH = styled.div`
    background: black;
    color: white;
    height: 40px;
    font-size: 1.35em;
    text-align: center;
`

const Div = styled.div`
    height: 50px;
    font-size: 1.1em;
    padding-top: 10px;
    text-align: center;
`

const Title = styled(Div)`
    text-align: left;
`

const Status = styled(Div)`
    color: ${props => props.color || 'green'};
`

export default Complaint
