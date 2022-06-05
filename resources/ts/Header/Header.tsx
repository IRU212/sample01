import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Article from '../Article/Article';
import styled from 'styled-components';
import HLink from './HLink';
import Stock from '../Stock/stock';

const headerHeight = '3rem';

const Hbody = styled.div`
    width: 7%;
    margin: 0;
    padding: 0px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    text-align: center;
    border-right: 1.5px #ccc solid;
    line-height: 8vh;
    padding-top: 4vh;
`;

const HElement = styled.div`
    position: absolute;
    top: 0;
    left: 7%;
    height: 2000px;
    width: 93%;
`;

export default function Header() {
  return (
    <div>
        <BrowserRouter>
            <Hbody>
                <HLink />
            </Hbody>
            <HElement>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/article' element={<Article />} />
                    <Route path='stock' element={<Stock />} />
                </Routes>
            </HElement>
        </BrowserRouter>
    </div>
  )
}
