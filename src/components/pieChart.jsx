import {useTheme} from "@mui/material";
import { ResponsivePie } from "@nivo/pie";


import React, {useEffect, useState} from "react";

const PieChart = () => {

    
    const [data, setData] = useState([]);

    useEffect (() => {
        fetch('https://cspmdashboard-api.vercel.app/api/pie')
            .then((response)=> response.json())
            .then((json) => setData(json))
    })


    return (
        <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 5 }}
        innerRadius={0.5}
        padAngle={0}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'greens' }}
        borderWidth={0}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                
            },
            {
                match: {
                    id: 'c'
                },
                
            },
            {
                match: {
                    id: 'c++'
                },
                
            },
            {
                match: {
                    id: 'go'
                },
                
            },
            {
                match: {
                    id: 'python'
                },
                
            },
            {
                match: {
                    id: 'scala'
                },
                
            },
            {
                match: {
                    id: 'lisp'
                },
                
            },
            {
                match: {
                    id: 'elixir'
                },
                
            },
            {
                match: {
                    id: 'javascript'
                },
                
            }
        ]}
        
    />
    ) 


}

export default PieChart
