import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './Header/Header';

const Body = styled.div`
    width: 100%;
    margin: 0px;
    padding: 0px;
`;

const App: React.FC = () => {
    return (
        <div>
            <Body>
                <Header />
                <p>こんにちは</p>
            </Body>
        </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}