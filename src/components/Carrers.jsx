


import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import carrers1 from "../assets/carrers1.png";
import carrers2 from "../assets/carresr2.png"; // use a second image here

const Carrers = () => {
  const [zoom, setZoom] = useState(1);
  const [zoom2, setZoom2] = useState(1);
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);



useEffect(() => {
  const handleScroll = () => {
    const zoomCalc = (ref, setZoomFn) => {
      if (ref.current) {
        const pos = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollFactor = Math.max(0, Math.min(1, (windowHeight - pos.top) / windowHeight));
        const newZoom = 1 + scrollFactor * 0.1;
        setZoomFn(newZoom);
      }
    };

    zoomCalc(imageRef, setZoom);
    zoomCalc(imageRef2, setZoom2);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      {/* === First Section === */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 4 },
        //   padding: { xs: "20px", md: "0" },
        padding: 0,
          alignItems: "center",
          marginTop:{xs:'1px', md:0}
        }}
      >
        {/* First Image with zoom */}
        <Box
          ref={imageRef}
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            borderRadius: 0,
            position: "relative",
            marginBottom: 0,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              transition: "transform 0.3s ease-out",
              transform: `scale(${zoom})`,
              willChange: "transform",
              backgroundImage: `url(${carrers1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>

        {/* First Text Content */}
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "48%" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: "left",
            order: { xs: 1, md: 2 },
            padding: { xs: "0", md: "0 20px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              marginBottom: "20px",
              color: "#FFA400",
              fontWeight: 600,
            }}
          >
            Carrers
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" },
              marginBottom: { xs: "20px", md: "30px" },
              lineHeight: "1.6",
            }}
          >
           Join us at travelsgroup and become part of a dynamic team that is passionate about transforming the travel experience. We believe that our people are our greatest asset, and we are always on the lookout for talented individuals who share our commitment to innovation and excellence in the travel industry.

If you’re ready to embark on an exciting journey with us, explore our current opportunities and take the next step in your career. Together, let’s shape the future of travel!
          </Typography>

          <Button
            variant="contained"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#FFA400",
              borderRadius: "20px 0px 0px 0px",
              padding: "10px 24px",
              "&:hover": {
                backgroundColor: "rgba(219, 100, 28, 0.9)",
              },
              fontSize: { xs: "0.8rem", md: "0.9rem" },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Join Us
          </Button>
        </Box>
      </Box>

      {/* === Second Section (reversed) === */}
    
    </>
  );
};

export default Carrers;
