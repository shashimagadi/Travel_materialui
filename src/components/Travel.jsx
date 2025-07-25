

// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Box } from "@mui/system";
// import Aboutus from "./Aboutus";
// import OurPillars from "./OurPillars";

// const Travel = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     "AboutUs",
//     "Our Pillars",
//     "Solutions",
//     "Media Center",
//     "Careers",
//     "Investors",
//     "Contact",
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

 
//   const drawer = (
//     <Box
//       onClick={handleDrawerToggle}
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "#FFA400",
//         color: "white",
//         textAlign: "center",
//       }}
//     >
//       <IconButton
//         color="inherit"
//         aria-label="open drawer"
//         edge="end"
//         onClick={handleDrawerToggle}
//         sx={{ color: "black", alignItems: "right" ,"& .MuiSvgIcon-root": {
//                   // Targets the icon inside the IconButton
//                   fontSize: "3rem", // Adjust this value to make bigger/smaller
//                 },}}
//       >
//         <MenuIcon />
//       </IconButton>

//       <List sx={{ px: 1, marginTop: "80px" }}>
//         {navItems.map((item) => (
//           <ListItem
//             key={item}
//             button
//             sx={{
//               py: 2,
              
//               textAlign: "center",
//             }}
//           >
//             <ListItemText
//               primary={item}
//               primaryTypographyProps={{
//                 fontSize: "1.2rem",
//                 fontWeight: 500,
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
//   return (
//     <>
//       <AppBar
//         component="nav"
//         position="fixed"
//         sx={{
//           backgroundColor: "white",
//           color: "black",
//           boxShadow: "none",
//           transition: "all 0.3s ease",
//           py: scrolled ? 0 : 1,
//         }}
//       >
//         <Toolbar>
//           {/* Logo on the left - size changes based on scroll */}
//           <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
//             <img
//               src="https://travelsgroup.com/wp-content/uploads/2024/07/travels-logo-without-com-scaled.png"
//               alt="Travels Group Logo"
//               style={{
//                 height: scrolled ? "60px" : "100px",
//                 width: scrolled ? "250px" : "300px",
//                 maxWidth: "100%",
//                 transition: "height 0.3s ease",
//               }}
//             />
//           </Box>

//           {/* Navigation items on the right - unchanged */}
//           {!isMobile ? (
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               {navItems.map((item) => (
//                 <Button
//                   key={item}
//                   sx={{
//                     color: "black",
//                     mx: 1,
//                     fontSize: scrolled ? "0.85rem" : "1rem",
//                     textTransform: "none",
//                     transition: "font-size 0.3s ease",
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
//               sx={{
//                 color: "#FFA400",
//                 "& .MuiSvgIcon-root": {
//                   // Targets the icon inside the IconButton
//                   fontSize: "3rem", // Adjust this value to make bigger/smaller
//                 },
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Mobile drawer */}
//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>

//       {/* Add padding to prevent content from being hidden under the fixed navbar */}
//       <Box
//         sx={{
//           height: scrolled ? "80px" : "120px",
//           transition: "height 0.3s ease",
//         }}
//       />

//       <Aboutus />
//       <OurPillars/>
//     </>
//   );
// };

// export default Travel;




import React, { useState, useEffect, useRef } from "react";
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
import OurPillars from "./OurPillars";
import Solutions from "./Solutions";
// Import your other components here

const Travel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("AboutUs");
  
  // Create refs for each section
  const aboutUsRef = useRef(null);
  const ourPillarsRef = useRef(null);
  const solutionsRef=useRef(null)
  // Add refs for other sections
  
  const navItems = [
    { name: "AboutUs", ref: aboutUsRef },
    { name: "Our Pillars", ref: ourPillarsRef },
    { name: "Solutions", ref: solutionsRef }, // Add refs for these
    { name: "Media Center", ref: null },
    { name: "Careers", ref: null },
    { name: "Investors", ref: null },
    { name: "Contact", ref: null },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine which section is in view
      const scrollPosition = window.scrollY + 100; // Adding offset
      
      // Check AboutUs section
      if (aboutUsRef.current && 
          scrollPosition >= aboutUsRef.current.offsetTop && 
          scrollPosition < (aboutUsRef.current.offsetTop + aboutUsRef.current.offsetHeight)) {
        setActiveSection("AboutUs");
      }
      // Check OurPillars section
      else if (ourPillarsRef.current && 
               scrollPosition >= ourPillarsRef.current.offsetTop && 
               scrollPosition < (ourPillarsRef.current.offsetTop + ourPillarsRef.current.offsetHeight)) {
        setActiveSection("Our Pillars");
      }

      //solutions
      else if (solutionsRef.current && 
               scrollPosition >= solutionsRef.current.offsetTop && 
               scrollPosition < (solutionsRef.current.offsetTop + solutionsRef.current.offsetHeight)) {
        setActiveSection("Solutions");
      }
      // Add checks for other sections
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (section === "AboutUs" && aboutUsRef.current) {
      window.scrollTo({
        top: aboutUsRef.current.offsetTop - 80,
        behavior: "smooth"
      });
    } else if (section === "Our Pillars" && ourPillarsRef.current) {
      window.scrollTo({
        top: ourPillarsRef.current.offsetTop - 80,
        behavior: "smooth"
      });
    }
    //solutionns
    else if (section === "Solutions" && solutionsRef.current) {
      window.scrollTo({
        top: solutionsRef.current.offsetTop - 80,
        behavior: "smooth"
      });
    }
    // Add similar for other sections
  };

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
        sx={{ color: "black", alignItems: "right", "& .MuiSvgIcon-root": { fontSize: "3rem" } }}
      >
        <MenuIcon />
      </IconButton>

      <List sx={{ px: 1, marginTop: "80px" }}>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            button
            sx={{
              py: 2,
              textAlign: "center",
              borderBottom: activeSection === item.name ? "2px solid black" : "none"
            }}
            onClick={() => handleNavClick(item.name)}
          >
            <ListItemText
              primary={item.name}
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
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
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

          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{
                    color: "black",
                    mx: 1,
                    fontSize: scrolled ? "0.85rem" : "1rem",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "4px",
                      left: 0,
                      width: activeSection === item.name ? "100%" : "0",
                      height: "2px",
                      backgroundColor: "#FFA400",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    }
                  }}
                  onClick={() => handleNavClick(item.name)}
                >
                  {item.name}
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
                "& .MuiSvgIcon-root": { fontSize: "3rem" },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>

      <Box sx={{ height: scrolled ? "80px" : "120px", transition: "height 0.3s ease" }} />

      {/* Add refs to your components */}
      <div ref={aboutUsRef}>
        <Aboutus />
      </div>
      
      <div ref={ourPillarsRef}>
        <OurPillars />
      </div>
 <div ref={solutionsRef}> <Solutions/></div>
     
      
      {/* Add other components with refs */}
    </>
  );
};

export default Travel;
