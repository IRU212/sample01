import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Article from '../Article/Article';
import styled from 'styled-components';
import HLink from './HLink';

const headerHeight = '3rem';

const Hbody = styled.div`
    width: 100%;
    margin: 0px;
    padding: 0px;
    height: ${headerHeight};
    line-height: ${headerHeight};
    border-bottom: 1px #999 solid;
`;

export default function Header() {
  return (
    <div>
        <BrowserRouter>
            <Hbody>
                <HLink />
            </Hbody>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/article' element={<Article />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  )
}
