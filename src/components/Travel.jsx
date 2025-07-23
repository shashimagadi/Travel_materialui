// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Box } from '@mui/system';
// import Aboutus from './Aboutus';

// const Travel = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const navItems = [
//     'AboutUs',
//     'Our Pillars',
//     'Solutions',
//     'Media Center',
//     'Careers',
//     'Investors',
//     'Contact'
//   ];

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         <img
//           src="https://travelsgroup.com/wp-content/uploads/2024/07/travels-logo-without-com-scaled.png"
//           alt="Travels Group Logo"
//           style={{ height: '80px', width: 'auto' }}
//         />
//       </Typography>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} button>
//             <ListItemText primary={item} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>

//     <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav" position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
//         <Toolbar sx={{ py: 1 }}> {/* Added padding on Y-axis to accommodate larger logo */}
//           {/* Logo on the left - made larger */}
//           <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
//             <img
//               src="https://travelsgroup.com/wp-content/uploads/2024/07/travels-logo-without-com-scaled.png"
//               alt="Travels Group Logo"
//               style={{
//                 height: '100px',  // Increased height
//                 width: 'auto',   // Maintain aspect ratio
//                 maxWidth: '100%' // Prevent overflow
//               }}
//             />
//           </Box>

//           {/* Navigation items on the right - unchanged */}
//           {!isMobile ? (
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               {navItems.map((item) => (
//                 <Button
//                   key={item}
//                   sx={{
//                     color: 'black',
//                     mx: 1,
//                     fontSize: '0.875rem', // Standard button size
//                     textTransform: 'none' // Keep original capitalization
//                   }}
//                 >
//                   {item}
//                 </Button>
//               ))}
//             </Box>
//           ) : (
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="end"
//               onClick={handleDrawerToggle}
//               sx={{ color: 'black' }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Mobile drawer */}
//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </Box>
//     <Aboutus/>

//        </>
//   );
// };

// export default Travel;

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import Aboutus from "./Aboutus";

const Travel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "AboutUs",
    "Our Pillars",
    "Solutions",
    "Media Center",
    "Careers",
    "Investors",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       <img
  //         src="https://travelsgroup.com/wp-content/uploads/2024/07/travels-logo-without-com-scaled.png"
  //         alt="Travels Group Logo"
  //         style={{
  //           height: scrolled ? '60px' : '80px',
  //           width: 'auto',
  //           transition: 'height 0.3s ease',

  //         }}
  //       />
  //     </Typography>
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} button>
  //           <ListItemText primary={item} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFA400",
        color: "white",
        textAlign: "center",
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerToggle}
        sx={{ color: "black", alignItems: "right" ,"& .MuiSvgIcon-root": {
                  // Targets the icon inside the IconButton
                  fontSize: "3rem", // Adjust this value to make bigger/smaller
                },}}
      >
        <MenuIcon />
      </IconButton>

      <List sx={{ px: 1, marginTop: "80px" }}>
        {navItems.map((item) => (
          <ListItem
            key={item}
            button
            sx={{
              py: 2,
              // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              // '&:hover': {
              //   backgroundColor: 'rgba(255, 255, 255, 0.05)'
              // },
              textAlign: "center",
            }}
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontSize: "1.2rem",
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          transition: "all 0.3s ease",
          py: scrolled ? 0 : 1,
        }}
      >
        <Toolbar>
          {/* Logo on the left - size changes based on scroll */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <img
              src="https://travelsgroup.com/wp-content/uploads/2024/07/travels-logo-without-com-scaled.png"
              alt="Travels Group Logo"
              style={{
                height: scrolled ? "60px" : "100px",
                width: scrolled ? "250px" : "300px",
                maxWidth: "100%",
                transition: "height 0.3s ease",
              }}
            />
          </Box>

          {/* Navigation items on the right - unchanged */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "black",
                    mx: 1,
                    fontSize: scrolled ? "0.85rem" : "1rem",
                    textTransform: "none",
                    transition: "font-size 0.3s ease",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: "#FFA400",
                "& .MuiSvgIcon-root": {
                  // Targets the icon inside the IconButton
                  fontSize: "3rem", // Adjust this value to make bigger/smaller
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      {/* Add padding to prevent content from being hidden under the fixed navbar */}
      <Box
        sx={{
          height: scrolled ? "80px" : "120px",
          transition: "height 0.3s ease",
        }}
      />

      <Aboutus />
    </>
  );
};

export default Travel;
