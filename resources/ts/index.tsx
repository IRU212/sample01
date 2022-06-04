import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
    return (
        <div>
            <p>こんにちは</p>
        </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}