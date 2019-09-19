import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Sidebar = () => {
    return (
        <Bar>
            <StyledLink to='/dashboard'>Dashboard</StyledLink>
            <StyledLink to='/newcomp'>New Complaint</StyledLink>
            <StyledLink to='/viewcomp'>View Complaints</StyledLink>
            <StyledLink to='/Logout'>Logout</StyledLink>
        </Bar>
    )
}

const Bar = styled.div`
    height: calc(100vh - 80px);
    width: 250px;
    border-right: 1px solid black;
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const StyledLink = styled(Link)`
    width: 100%;
    height: 50px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Sidebar
