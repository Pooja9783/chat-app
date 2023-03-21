import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  Popover,
  Button,
  Divider,
} from "@mui/material";

import { selectUser } from "../Redux/action";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const disptach = useDispatch();
  const navigate = useNavigate();


  const users = useSelector((state) => state.data.data);
  const userData = useSelector((state) => state.data);

  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;



  return (
    <Box
      mt={5}
      mb={1}
      mx={5}
      sx={{
        width: "840px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" mt={4}>
        Profile
      </Typography>

      <Box key={userData?.id} mt={3}>
        <Stack key={userData?.id} direction="row" spacing={1} sx={{cursor:"pointer"}}  onClick={handleClick}>
          <Avatar
            alt="Profile-Picture"
            src={userData?.profilepicture}
            sx={{ margin: "1px" }}
           
          />
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", color: "#1c1b1c" }}
          >
            {userData?.name}
          </Typography>
        </Stack>{" "}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClick={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{ borderRadius: "20px" }}
        >
          <Box
            p={4}
            textAlign="center"
        
          >
            <Avatar
              alt="Profile-Picture"
              src={userData?.profilepicture}
              sx={{ width: 86, height: 86, display: "flex", margin: "auto" }}
            />

            <Typography variant="body1" m={1}>
              {userData?.name}
            </Typography>
            <Divider />

            <Typography variant="body2" m={1}>
              {userData?.email}
            </Typography>
            <Divider my={2} />
            <Box>
              {users?.map((userDetails) => {
                return (
                  <Link
                    to={`/profile-page/${userDetails.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box onClick={() => disptach(selectUser(userDetails))}>
                      <Box display="flex">
                        <Avatar
                          alt="Profile-Picture"
                          src={userDetails?.profilepicture}
                          sx={{
                            width: 30,
                            height: 30,
                            margin: "2px",
                          }}
                        />

                        <Typography my={1} color="black">
                          {userDetails?.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                );
              })}
            </Box>
            <Button
              variant="contained"
              sx={{
                margin: "10px 0px",
                background: "red",
                "&:hover": { background: "red" },
              }}
              onClick={() => navigate("/landing-page")}
            >
              Sign out
            </Button>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}
