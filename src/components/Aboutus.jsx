

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { KeyboardArrowRight } from "@mui/icons-material";
import aboutus1 from "../assets/aboutus1.png";


const Aboutus = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
            minHeight: { xs: "auto", md: "fit-content" },
          backgroundColor: "#ffffff",
          padding: { xs: "20px", md: "40px" },
          position: "relative",
        }}
      >
        {/* Fixed Left Section - About Us Header */}
        <Box
          sx={{
            position: { md: "sticky" },
            top: 20,
            // height: { xs: "auto", md: "100vh" },
            height: { xs: "auto", md: "fit-content" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            width: { xs: "100%", md: "15%" },
            padding: { xs: "20px 0", md: "40px" },
            marginBottom: { xs: "20px", md: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              color: "#FFA400",
              textAlign: "center",
              marginRight: { md: "40px" },
              position: "relative",
            }}
          >
            About US
          
          </Typography>
          
           <Box sx={{ 
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              ml: 2,
              animation: "slide 2s infinite",
            }}>
              <Box sx={{ 
                width: "100px", 
                height: "2px", 
                backgroundColor: "#FFA400",
                marginRight: "8px"
              }} />
              <KeyboardArrowRight sx={{ 
                fontSize: "2.5rem", 
                color: "#FFA400" 
              }} />
            </Box>
          
        </Box>

        {/* Scrollable Content Sections */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: { xs: "100%", md: "85%" },
            gap: "40px",
          }}
        >
          {/* First Content Block */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              padding: { xs: "0", md: "20px" },
            }}
          >
            <Typography
              paragraph
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: "1.8",
                marginBottom: "30px",
                color: "#555555",
              }}
            >
              At travelsgroup, we are transforming the travel experience for both
              businesses and individual travelers with a friendly, professional, and
              optimistic approach. Our goal is to connect you with the best travel
              solutions and services while upholding our core values of integrity,
              reliability, and ease.
            </Typography>
            
            <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", mb: 4 }}>
              <img 
                src={aboutus1} 
                style={{ 
                  height: "auto", 
                  width: "100%", 
                  maxWidth: "350px",
                  borderRadius: "8px" 
                }} 
                alt="About travelsgroup"
              />
            </Box>
          </Box>

          {/* Second Content Block with Image */}
          
<Box
  sx={{
    width: { xs: "100%", md: "50%" },
    padding: { xs: "0", md: "20px" },
    textAlign: { xs: "center", md: "left" }, // Controls text alignment
    margin: "0 auto", // Center the container on all screens
    maxWidth: "350px", // Shared max-width for image + text
  }}
>
  {/* Image (hidden on xs/sm, visible on md+) */}
  <Box sx={{ display: { xs: "none", md: "block" }, mb: 2 }}>
    <img
      src={aboutus1}
      style={{
        width: "100%",       // Full width of parent (350px max)
        height: "300px",     // Fixed height
        objectFit: "cover",   // Prevent stretching
        borderRadius: "8px",
      }}
      alt="About travelsgroup"
    />
  </Box>

  {/* Text */}
  <Typography
    paragraph
    sx={{
      fontSize: { xs: "1.1rem", md: "1.2rem" },
      lineHeight: "1.8",
      color: "#555555",
      width: "100%",          // Matches image width
      textAlign: { xs: "center", md: "left" }, // Left-align on desktop
    }}
  >
    Our comprehensive services are designed to help you effortlessly
    navigate the ever-changing travel landscape. We provide personalized
    support to streamline travel management, reduce costs, and enhance the
    entire journey of employees and clients.

    Whether you are a business looking to optimize travel operations or a traveler eager to explore 
    new destinations, travels.com is a reliable partner. By combining innovative technology, data-driven insights, and empathetic services, we are 
    committed to empowering you to unlock new possibilities and thrive in a dynamic world of travel.
  </Typography>
</Box>


        </Box>
      </Box>

      {/* Full Width Bottom Image */}
      {/* <Box sx={{ 
        width: "100%", 
        display: "flex", 
        justifyContent: "center",
        // padding: { xs: "20px", md: "40px" },
          padding: { xs: "0 20px 20px", md: "0 40px 90px" },    
 
        // marginTop: "-20px" 
           
      
      }}>
        <img 
          src={aboutus2} 
          style={{ 
            height: "400px", 
            width: "100%", 
            // maxWidth: "950px",
            borderRadius: "8px",
       
          }} 
          alt="Travel experiences"
        />
      </Box> */}

      {/* CSS for bouncing arrow animation */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
    </>
  );
};

export default Aboutus;