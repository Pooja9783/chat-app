import React from 'react';
import { Box,Divider, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Header from './Header';
import ChatBox from './ChatBox';

export default function Gallary() {
  return (
    <Box sx={{ display: "flex" }}>

    <Box>
      <SideBar />
    </Box>
    <Box>
      <Header />
      <Divider variant="middle" />
      <Typography
        variant="h2"
        color="#F0EEED"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        Coming Soon{" "}
      </Typography>
    </Box>
    <ChatBox  />

  </Box>
  )
}
