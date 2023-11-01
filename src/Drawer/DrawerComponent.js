import React, {useState} from "react";
import {Drawer} from "@mui/material";


export default function  DrawerComponent (props){
    const {window}  = props;
    const [mobileOpen , setMobileOpen] = useState(false);
    const drawerWidth = 240;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
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
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
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