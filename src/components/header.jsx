import {Typography, Box, useTheme} from "@mui/material";


const Header = ({title, subtitle}) => {

    const theme = useTheme();
    return <Box mb ="30px">
        <Typography variant="h5" color="black" fontWeight="bold" sx={{mb: "5px"}} >{title}</Typography>
        <Typography  color="grey" >{subtitle}</Typography>
    </Box>
}

export default Header;