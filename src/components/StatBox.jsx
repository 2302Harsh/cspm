import {Box, Typography, useTheme} from "@mui/material";
import CircularProgress from '@mui/joy/CircularProgress';


const StatBox=({ title, progress })=> {
    const theme = useTheme();

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" flexDirection="row" justifyContent="space-between" >
                <Box>
                    <Typography 
                    variant="h6"
                    fontWeight="bold"
                    >
                        {progress}%
                    </Typography>
                    <Typography
                        sx={{ color: "#808080"}}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box>
                <CircularProgress 
                color="success"
                sx={{
                    "--CircularProgress-size": "75px",
                    "--CircularProgress-trackThickness": "7px",
                    "--CircularProgress-progressThickness": "7px"
                }}
                determinate value={progress}
                />
                </Box>
            </Box>
        </Box>
    )
}

export default StatBox;