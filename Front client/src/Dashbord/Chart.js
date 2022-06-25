import "./chart.scss";
import axios from "axios";
import { useState, useEffect } from "react";


import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";





const Chart = ({ aspect, title }) => {
  const [datalen  ,setDataLen]=useState()
  const y = datalen


  useEffect(async () => {
  
  axios.get("http://localhost:5000/Client/interface" ).then((res) => {
 
   setDataLen(res.data.length)
    console.log(res.data.length)
   
  })
  console.log(datalen)

  }, [])
  const data = [
  
    { name: "March", Total: 16},
    { name: "April", Total:15 },
    { name: "May", Total:  29 },
    { name: "June", Total:   39 },
  ];    
  return (


    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 3, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="1" y1="0" x2="0" y2="1">
              <stop offset="60%" stopColor="#8884d8" stopOpacity={2} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={12}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
