import ReactDOM from 'react-dom/client';
import React from 'react';
import axios from 'axios';
import UsageMeter from './UsageMeter';
const port = 23456;
const ip = '127.0.0.1';
const dataform = {
    message: 'post hello',
};

const testClick = (e) => {
    console.log('test button clicked');
    axios
        .post(`http://${ip}:${port}`, JSON.stringify(dataform), {
            header: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            console.log(`Status Code: ${res.status}`);
            console.log(res.data);
        })
        .catch((err) => {
            console.log('error occured.');
        });
};
const TestGround = () => {
    return (
        <React.Fragment>
            <h3>Hello world Testing</h3>
            <button onClick={testClick}>Test POST Request</button>
            <UsageMeter color={'#2f2f2f'} value={9} />
            <UsageMeter color={'#00aa00'} value={65} />
        </React.Fragment>
    );
};

const rootNode = document.querySelector('#root');
ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <TestGround />
    </React.StrictMode>
);
