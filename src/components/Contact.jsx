import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const subjects = ["General Inquiry", "Support", "Careers", "Investments"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFA400",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
        }}
      >
        <Box sx={{ flex: 1, padding: 10, width: { xs: "80%", md: "60%" } , textAlign:'left'}}>
          <Typography variant="h5" fontWeight="bold" sx={{color:'white', fontSize:'2rem'}}>
            Contact
          </Typography>
          <Typography sx={{ width: { xs: "70%", md: "80%" }}}>
            Write to us and we will contact you as soon as possible
          </Typography>
        </Box>

        {/* === Your Form === */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1.5,

            padding: 8,
            borderRadius: 2,
          }}
        >
          <Grid container spacing={4}>
            {/* First Name */}
            <Grid item xs={12} sm={6} md={5}>
              <Typography sx={{ textAlign: "left" }}>First Name</Typography>
              <TextField
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                sx={{ backgroundColor: "white" }}
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6} md={5}>
              <Typography sx={{ textAlign: "left" }}>Last Name</Typography>
              <TextField
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                sx={{ backgroundColor: "white" }}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6} md={5}>
              <Typography sx={{ textAlign: "left" }}>Email</Typography>
              <TextField
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                sx={{ backgroundColor: "white" }}
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} sm={6} md={5}>
              <Typography sx={{ textAlign: "left" }}>Phone Number</Typography>
              <TextField
                fullWidth
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                sx={{ backgroundColor: "white" }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ width: { xs: "50%", md: "30%" }, textAlign: "left" }}
              sm={6}
              md={5}
            >
              <Typography sx={{}}>Choose Your Topic</Typography>
              <TextField
                fullWidth
                select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }}
              >
                {subjects.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Message */}
            <Grid item xs={12} sx={{ width: "70%" }}>
              <Typography sx={{ textAlign: "left" }}>Message</Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                sx={{ backgroundColor: "white" }}
              />
            </Grid>

            {/* Submit Button */}
          </Grid>

          <Box
            sx={{
              width: { xs: "60%", md: "70%" },
              alignItems: "left",
              textAlign: "left",
              marginTop: "20px",
            }}
          >
            <Typography>
              I have read and accept the Privacy Policy. (By activating the
              "Reading and Acceptance" check of our Privacy Policy, you are
              indicating that you have read, understand, accept and authorize
              all the clauses specified for the collection, storage and
              processing of your personal data.)
            </Typography>

            <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#FFA400",
              "&:hover": {
                backgroundColor: "#e68a00",
              },
              marginTop:'20px'
            }}
          >
            Submit
          </Button>
          </Box>

          
        </Box>
      </Box>
    </>
  );
};

export default Contact;
