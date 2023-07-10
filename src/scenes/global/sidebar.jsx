import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    return (
        <MenuItem
            active={selected === title}
            style={{ color: "#808080" }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography
                sx={{ color: "#000000" }}
            >{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}


const Sidebar = () => {

    const theme = useTheme();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: "white !important"
                },
                "& .pro-icon-wrapper": {
                    background: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 30px !important"
                },
                "& .pro-inner-item:hover": {
                    background: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                }
            }}
        >
            <ProSidebar>
                <Menu>
                    <Box  sx={{width: "400px"}}>

                        <Typography

                            sx={{ m: "15px 0 5px 20px", color: "#808080" }}
                        >GENERAL</Typography>

                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        
                        <Item
                            title="Domain Wise Compliance"
                            to="/domainWiseCompliance"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        
                        />
                        <Item
                            title="Assessment Benchmark"
                            to="/assessmentBenchmark"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography

                            sx={{ m: "15px 0 5px 20px", color: "#808080" }}
                        >MASTERS</Typography>

                        <Item
                            title="System"
                            to="/system"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Client Management"
                            to="/clientManagement"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Evidence Management"
                            to="/evidanceManagement"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Domain Management "
                            to="/domainManagement"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Process Management"
                            to="/processManagement"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Users"
                            to="/users"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;