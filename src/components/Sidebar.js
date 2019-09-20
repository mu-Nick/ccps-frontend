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
    background: linear-gradient(
        180deg,
        rgba(10, 9, 12, 1) 0%,
        rgba(65, 65, 65, 1) 100%,
        rgba(255, 255, 255, 1) 100%
    );
`

const StyledLink = styled(Link)`
    width: 100%;
    height: 70px;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: white;
    text-decoration: none;
    background-blend-mode: overlay;
    transition: all 0.2s;

    :hover {
        background: rgba(240, 237, 238, 0.5);
    }
`

export default Sidebar
