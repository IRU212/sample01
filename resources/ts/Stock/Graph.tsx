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
    
    const URL : string = "http://api.marketstack.com/v1/eod";
    const ACCESS_KEY : string = "c86e9f2e8c8cfbb7acd5189866562fab" ;

    const [stockData,setStockData] = useState({});
    const [stockPrice, setStockPrice] = useState({});
    const d = new Date();

    const data = {
        labels: [d.getMonth()+'月',d.getMonth()+1+'月',d.getMonth()+2+'月',d.getMonth()+3+'月',d.getMonth()+4+'月',d.getMonth()+5+'月',],
        datasets:[
            {
            borderColor: 'rgba(35,200,153,1)'
            data: [100,120,50,110,60,88],
            lineTension: 0,
        }
      ]
    }

    const graphoptions = {
        legend : {
            display : false
        },
        scales : {
            xAxes : [{
                display : false
            }],
            yAxes : [{
                display : false
            }],
        },
    }

    useEffect(() => {
        const getStockData = (symbol : any) => {
            axios
            .get(`${URL}/${symbol}?access_key=${ACCESS_KEY}`)
            .then((res : AxiosResponse<any,any>)=>{
                console.log(res.data);
                setStockData(res.data);
            })
            .catch((e: AxiosError<{ error: string }>) => {
                console.log(e.message);
            });
        }
        getStockData('TSLA');
    },[])
    
  return (
    <div>
        <ABody>
            <Graph1>
                株価チャート表示
                <Line data={data} options={graphoptions} />
            </Graph1>
        </ABody>
    </div>
  )
}
