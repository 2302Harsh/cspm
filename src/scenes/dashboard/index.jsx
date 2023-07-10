import {Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import Header from "../../components/header";
import PieChart from "../../components/pieChart"
import Statbox from "../../components/StatBox"
import CircularProgress from '@mui/joy/CircularProgress';

const Dashboard = () =>{

    const theme = useTheme();

    return (
        <>
    <Box m="20px">
        
        <Header title="Dashboard" subtitle="welcome to dashboard"/>

        <Box  display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap=
    "20px">
            <Box 
            gridColumn="span 6"
            gridRow="span 3"
            bgcolor="#E5E4E2"
            display="flex"
            flexDirection="column"
            
            borderRadius="7px"
            >
                <Box 
                margin="10px"
                width="100%"
                display="flex"
                alignItems="start"
                justifyContent="start"
                >
                <Typography
                variant="subtitle1"
                padding="10px"
                fontWeight="bold"
                >
                    Cloud Security Posture Score</Typography>
                </Box>

                <Box
                margin="35px 0px"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                <CircularProgress
                color="success"
                sx={{
                    "--CircularProgress-size": "150px",
                    "--CircularProgress-trackThickness": "10px",
                    "--CircularProgress-progressThickness": "10px"
                }}
                determinate value="54"
                >
                    <Box 
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    >
                        
                    <Typography
                    fontWeight="bold"
                    >Compliance</Typography>
                    <Typography
                    color="black"
                    >54%</Typography>
                    </Box>
                </CircularProgress>
                </Box>

                <Box
                width="100%"
                
                height="27%"
                marginTop="48px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                
                >
                    <Box
                    width="33.33%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    borderTop="solid 2px #B2BEB5"
                    borderRight="solid 2px #B2BEB5"
                    alignItems="center"
                    justifyContent="center"
                    
                    >
                        <Typography
                        padding="10px 0px"
                        variant="body2"
                        
                        >Total Controls Tested</Typography>
                        <Typography
                        fontWeight="bold"
                        >64</Typography>
                    </Box>
                    <Box
                    width="33.33%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    borderTop="solid 2px #B2BEB5"
                    borderRight="solid 2px #B2BEB5"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <Typography
                        padding="10px 0px"
                        variant="body2"
                        
                        >Compliant Controls</Typography>
                        <Typography
                        fontWeight="bold"
                        >35</Typography>
                    </Box>
                    <Box
                    width="33.33%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    borderTop="solid 2px #B2BEB5"
                    alignItems="center"
                    justifyContent="center"
                    >
                        <Typography
                        padding="10px 0px"
                        variant="body2"
                        
                        >Non-Compliant Controls</Typography>
                        <Typography
                        fontWeight="bold"
                        >29</Typography>
                    </Box>
                </Box>

            </Box>
            <Box 
            gridColumn="span 6"
            gridRow="span 3"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            
            >
            
                <Box
                width="100%"
                height="33%"
                bgcolor="#E5E4E2"
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginBottom="10px"
                borderRadius="7px"
                >
                    <Box
                    
                    width="33.33%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    borderRight="solid 2px #B2BEB5"
                    alignItems="center"
                    
                    >
                        <Typography
                        paddingTop="40px"
                        variant="body1"
                        fontWeight="bold"
                        >Subscription</Typography>
                        <Typography
                        paddingTop="10px"
                        variant="h5"
                        fontWeight="bold"
                        >64</Typography>
                    </Box>
                    <Box
                    
                    width="33.33%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    borderRight="solid 2px #B2BEB5"
                    alignItems="center"
                    
                    >
                        <Typography
                        paddingTop="40px"
                        variant="body1"
                        fontWeight="bold"
                        >Services</Typography>
                        <Typography
                        paddingTop="10px"
                        variant="h5"
                        fontWeight="bold"
                        >35</Typography>
                    </Box>
                    <Box
                    
                    width="33.33%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    
                    >
                        <Typography
                        paddingTop="40px"
                        variant="body1"
                        fontWeight="bold"
                        >Resources</Typography>
                        <Typography
                        paddingTop="10px"
                        variant="h5"
                        fontWeight="bold"
                        >29</Typography>
                    </Box>
                </Box>
                <Box
                width="100%"
                height="66%"
                bgcolor="#E5E4E2"
                display="flex"
                flexDirection="row"
                marginTop="10px"
                borderRadius="7px"
                >
                    <Box 
                    width="50%"
                    padding="20px 10px "
                    >
                        <Typography
                        variant="h5"
                        fontWeight="bold"
                        >Last Month Compliance Status</Typography>
                        <Typography
                        paddingTop="25px"
                        fontWeight="bold"
                        >Compliant Controls</Typography>
                        <Typography
                        fontWeight="bold"
                        >414</Typography>
                        <Typography
                        paddingTop="25px"
                        >5% more compliant than last month </Typography>
                    </Box>
                    <Box 
                    width="45%"
                    >
                        <PieChart/>
                    </Box>
                </Box>
            </Box>

            <Box 
            gridColumn="span 4"
            bgcolor="#E5E4E2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="7px"
            >
                <Statbox
                    title="NIST"
                    progress="75"
                    
                />
            </Box>
        
            <Box 
            gridColumn="span 4"
            bgcolor="#E5E4E2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="7px"
            >
                <Statbox
                    title="CIS"
                    progress="70"
                    progresstitle="70%"
                />
            </Box>
        
            <Box 
            gridColumn="span 4"
            bgcolor="#E5E4E2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="7px"
            >
                <Statbox
                    title="ISO 27001"
                    progress="50"
                    progresstitle="50%"
                />
            </Box>
        
        </Box>
   
    </Box>

<Box  postion="absolut" bottom="0" display="flex" flexDirection="row" >
    
    <Box display="flex" justifyItems="start">
    <Button  >
        aws
    </Button>
    </Box>

    <Box display="flex" justifyItems="end">
    <Button>
        download report
    </Button>
    </Box>
</Box>
</>  
);
};

export default Dashboard