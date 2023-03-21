import React from "react";
import { Box, List, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "../App.css";

export default function SideBar() {
  const userData = useSelector((state) => state.data);

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #5E35B1, #311B92)",
        height: "100vh",
        width: "250px",
        margin: "40px",
        borderRadius: "20px",
        color: "#F0EEED",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          textAlign: "center",
        }}
      >
        <List component="nav" m={2} sx={{ width: "200px", margin: "auto" }}>
          <NavLink
            to={`/profile-page/${userData?.id}`}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="body1" color="white" m={1}>
              {" "}
              Profile
            </Typography>
          </NavLink>

          <Divider sx={{ background: "#FAF8F1" }} />
          <NavLink
            to="/post-detail"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="body1" color="white" m={1}>
              {" "}
              Posts
            </Typography>
          </NavLink>
          <Divider sx={{ background: "#FAF8F1" }} />

          <NavLink
            to="/gallary-detail"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="body1" color="white" m={1}>
              {" "}
              Gallary
            </Typography>
          </NavLink>
          <Divider sx={{ background: "#FAF8F1" }} />

          <NavLink
            to="/todo-detail"
            style={{ textDecoration: "none" }}
          >
            <Typography variant="body1" color="white" m={1}>
              {" "}
              Todo
            </Typography>
          </NavLink>
          <Divider sx={{ background: "#FAF8F1" }} />
        </List>
      </Box>
    </Box>
  );
}
