import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);


const ABody = styled.div`
    width: 98%;
    margin: 30px 0 0 2%;
`;

const Graph1 = styled.div`
    width: 98%;
`;

export default function Graph() {
    
  return (
    <div>
        <ABody>
            <Graph1>
                株価チャート表示
                {/* <Line data={data} options={graphoptions} /> */}
            </Graph1>
        </ABody>
    </div>
  )
}
