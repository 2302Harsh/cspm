import { Box, Typography, useTheme} from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

import Header from "../../components/header"
import React, {useEffect, useState} from "react";
import axios from "axios";




const Users = () =>{

    const [data, setData] = useState([]);
    

   
    const theme = useTheme();
    const columns = [{ field: "id", headerName: "ID"}, 
    { field: "name", headerName: "Name", flex:1}, 
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"}, 
    { field: "email", headerName: "Email-ID", flex: 1}, 
    { field: "phone", headerName: "Phone", flex: 1}, 
    { field: "access", headerName: "Access", flex: 1,  headerAlign: "center",
        renderCell: ({row: { access }})=>{
            return(
                <Box 
                width="60px"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent= "center"
                backgroundColor= "#0000ff"
                borderRadius= "4px"
                >
                    <Typography color="white" sx={{ml: "5px" }}>
                        {access}
                    </Typography>
                </Box>

            )
        }
    }]

    useEffect (() => {
        fetch('http://localhost:5001/api/get')
            .then((response)=> response.json())
            .then((json) => setData(json))
    })

    return (
    <Box m="20px">
        <Header title="Users" subtitle="Managing Team Members"/>
        <Box 
        m = "40px 0 0 0 "
        height= "75vh"
        sx={{
            "& .MuiDataGrid ": {
                border: "none"
            },
            "& .MuiDataGrid-cell":{
                borderBottom: "none"
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor: "	#0000ff",
                borderBottom: "none",
                color: "white"
            },

            "& .MuiDataGrid-footerContainer": {
                borderTop: "none"
            }
            
        }}
        >

            <DataGrid 
                rows={data}
                columns={columns}
                sx={{height: "400px"}}
            />

        </Box>


    </Box>

    )
}

export default Users;