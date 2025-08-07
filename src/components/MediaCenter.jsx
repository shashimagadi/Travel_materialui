import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import mediacenter1 from "../assets/mediacenter1.jpg";
import mediacenter2 from "../assets/mediacenter2.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MediaCenter = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%", // Only spans parent width (not full viewport)
          backgroundColor: "#1D1D1B",
          maxWidth: "1200px", // Constrains background color to 1200px
          height: "auto",
          margin: "0 auto", // Centers the box
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            minHeight: { xs: "auto", md: "fit-content" },

            padding: { xs: "20px", md: "70px 20px 10px 10px" },
            position: "relative",
          }}
        >
          {/*1111 Fixed Left Section - our pillar */}
          <Box
            sx={{
              position: { md: "sticky" },
              top: 20,

              height: { xs: "auto", md: "fit-content" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              width: { xs: "100%", md: "20%" },
              padding: { xs: "20px 0", md: "40px" },
              marginBottom: { xs: "20px", md: 0 },
              textAlign:'left'
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 500,
                color: "#FFA400",
                textAlign: "left",
                // marginRight: { md: "20px" },
                position: "relative",
               
              
              }}
            >
              Media centers
            </Typography>
            <Typography sx={{color:'white',  fontSize:'1.5rem'}}>
                Stay updated with the latest travel!
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                ml: 2,
                animation: "slide 2s infinite",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "2px",
                  backgroundColor: "#FFA400",
                  marginRight: "8px",
                }}
              />
              <KeyboardArrowRight
                sx={{
                  fontSize: "2.5rem",
                  color: "#FFA400",
                }}
              />
            </Box>
          </Box>





          {/* === Right Section (Articles in row) === */}
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: 5,
    width: "70%",
  }}
>
  {/* === Article 1 === */}
  <Box sx={{ flex: 1 ,textAlign:'left'}}>
    <Box
      component="img"
      src={mediacenter1}
      alt="Media 1"
      sx={{
        width: "100%",
        height: { xs: 200, md: 300 },
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: 2,
        
      }}
    />
    <Typography variant="h4" sx={{ color: "white", marginBottom: 2,textAlign:'left' }}>
      From Online Booking to Smart Personalization: The Evolution of Travel
    </Typography>
    <Typography sx={{ fontSize: "1rem", color: "white", marginBottom: 2 ,textAlign:'left'}}>
     The digital transformation of the travel industry began with the advent of online booking systems, a revolutionary change that allowed travelers to make reservations 
     at the click of a button. This marked a significant shift from traditional travel...
    </Typography>
     <Button
          variant="contained"
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#FFA400',
            borderRadius: '20px 0px 0px 0px',
            padding: '10px 24px',
            '&:hover': {
              backgroundColor: 'rgba(219, 100, 28, 0.9)'
            },
            fontSize: { xs: '0.8rem', md: '0.9rem' },
           
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Keep Redaing
        </Button>
  </Box>

  {/* === Article 2 === */}
  <Box sx={{ flex: 1 ,textAlign:'left'}}>
    <Box
      component="img"
      src={mediacenter2}
      alt="Media 2"
      sx={{
        width: "100%",
        height: { xs: 200, md: 300 },
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: 2,
        
      }}
    />
    <Typography variant="h4" sx={{ color: "white", marginBottom: 2 , textAlign:'left'}}>
      Summer in Baiae: The Romans’ Favorite Destination
    </Typography>
    <Typography sx={{ fontSize: "1rem", color: "white", marginBottom: 2 ,textAlign:'left'}}>
     Imagine you have found a time machine and your destination is Ancient Rome, an era where the concept of tourism,
      as we know it today, was beginning to take shape. Suddenly, you find yourself in the middle of...
    </Typography>
    <Button
          variant="contained"
          sx={{
            color: '#FFFFFF',
            backgroundColor: '#FFA400',
            borderRadius: '20px 0px 0px 0px',
            padding: '10px 24px',
            '&:hover': {
              backgroundColor: 'rgba(219, 100, 28, 0.9)'
            },
            fontSize: { xs: '0.8rem', md: '0.9rem' },
         marginTop:'20px'
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Keep Redaing
        </Button>
  </Box>
</Box>

        </Box>

         <Button
          variant="contained"  
          sx={{
            color: '#FFA400',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px 0px 0px 0px',
            padding: '10px 24px',
            '&:hover': {
              backgroundColor: 'rgba(219, 100, 28, 0.9)'
            },
            fontSize: { xs: '0.8rem', md: '0.9rem' },
            marginTop:'30px',
            marginBottom:'30px'
            
          }}
          endIcon={<ArrowForwardIcon />}
        >
          View more
        </Button>
      </Box>
    </>
  );
};

export default MediaCenter;



