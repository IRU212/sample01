import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderNav = styled.div`
    width: 100%;
    margin: 0;
    padding: 0px;
`;

const HLinkCss =  {
  color: '#000',
  fontSize: '1rem',
  textDecoration: 'none',
  marginLeft: '5%',
}


export default function HLink() {
  return (
    <div>
        <HeaderNav>
            <div><Link to='/' style={HLinkCss} >Home</Link></div>
            <div><Link to='/article' style={HLinkCss} >Article</Link></div>
        </HeaderNav>
    </div>
  )
}
