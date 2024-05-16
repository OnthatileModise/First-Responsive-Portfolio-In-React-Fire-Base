import React, {useState} from "react";
import {Drawer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';

export default function  DrawerComponent (props){
    const {window}  = props;
    const [mobileOpen , setMobileOpen] = useState(false);
    const drawerWidth = 240;
    const [open, setOpen] = useState(true);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerOpen = () => {
        console.log("Clicking the drawer button")
        setOpen(true);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <>
            <li><a href="#home" className="menu-btn">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#services" className="menu-btn">Services</a></li>
            <li><a href="#skills" className="menu-btn">Skills</a></li>
            <li><a href="#projects" className="menu-btn">Projects</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
        </>
    )

    return(
        <>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{mr: 2, ...(open && {display: 'none'})}}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

        </>
    )

}
