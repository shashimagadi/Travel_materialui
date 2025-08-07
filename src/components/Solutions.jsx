


import React, { useState, useEffect, useRef } from "react";
import solution from "../assets/solution.png";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Solutions = () => {
      const [zoom, setZoom] = useState(1);
  const imageRef = useRef(null);

    useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const imagePosition = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate zoom factor based on scroll position
        const scrollFactor = Math.max(0, Math.min(1, 
          (windowHeight - imagePosition.top) / windowHeight
        ));
        
        // Zoom range from 1 (normal) to 1.1 (zoomed in)
        const newZoom = 1 + scrollFactor * 0.1;
        setZoom(newZoom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    
    
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        height: "auto",
        margin: "0 auto",
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 2, md: 4 },
        padding: { xs: '20px', md: '0' },
        alignItems: 'center'
      }}
    >
     
      <Box 
  ref={imageRef}
  sx={{
    width: { xs: '100%', sm: '80%', md: '60%' },
    height: { xs: '300px', md: '500px' },
    overflow: 'hidden',
    borderRadius: { xs: '8px', md: '0' },
    position: 'relative'
  }}
>
  <Box
    ref={imageRef}
    sx={{
      width: '100%',
      height: '100%',
      transition: 'transform 0.3s ease-out',
      transform: `scale(${zoom})`,
      willChange: 'transform',
      backgroundImage: `url(${solution})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  />
</Box>

      {/* Content Box */}
      <Box 
        sx={{
          width: { xs: '100%', sm: '80%', md: '40%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: {xs:'center', md:'flex-start'},
          textAlign: 'left',
          order: { xs: 1, md: 2 },
          padding: { xs: '0', md: '0 20px' }
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            marginBottom: '20px',
            color: '#FFA400',
            fontWeight: 600
          }}
        >
          Solutions
        </Typography>
        
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
            marginBottom: { xs: '20px', md: '30px' },
            lineHeight: '1.6'
          }}
        >
          travelsgroup provides a wide range of top-rated hotels and flights at competitive prices. 
          Our emphasis on premier accommodation and personalized services sets us apart from other 
          travel agencies, ensuring that our customers enjoy a hassle-free and delightful travel experience.
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
            fontSize: { xs: '0.8rem', md: '0.9rem' }
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Contact Us
        </Button>
      </Box>
     
    </Box>

     
      </>
  );
};

export default Solutions;