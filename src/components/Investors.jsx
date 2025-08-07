import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import carrers1 from "../assets/carrers1.png";
import carrers2 from "../assets/carresr2.png";

const Investors = () => {
     const [zoom2, setZoom2] = useState(1);
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
       
           
           zoomCalc(imageRef2, setZoom2);
         };
       
         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
       }, []);
  return (
    <>
      <Box   ref={imageRef2}
        sx={{
            
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: { xs: 2, md: 4 },
        //   padding: { xs: "20px", md: "10px" },
        
        //   marginTop:{xs:'10px', md:'5px'},
        
          alignItems: "center",
        }}
      >
        {/* Second Image */}
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "46%" },
            height: { xs: "300px", md: "500px" },
            overflow: "hidden",
            borderRadius: 0,
            position: "relative",
            backgroundImage: `url(${carrers2})`, // use another image here
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginTop: 0,
            //   transform: `scale(${zoom2})`,
               willChange: "transform",
          }}
        />

        {/* Second Text Content */}
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "40%" },
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
           Investor Relations
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" },
              marginBottom: { xs: "20px", md: "30px" },
              lineHeight: "1.6",
            }}
          >
            Join us on our journey to redefine travel. Explore investment opportunities with travelsgroup, where innovation meets growth.

Access our latest financial reports, strategic plans, and market insights. Invest in the future of travel today.
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
            Contact us
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Investors