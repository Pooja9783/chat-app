import React from "react";

import { useSelector } from "react-redux";

import { Box, Stack, Avatar, Typography, Divider } from "@mui/material";
import map from "../asset/map.png";
import Header from "./Header";
import SideBar from "./SideBar";
import ChatBox from "./ChatBox";

export default function Profile() {
  const userData = useSelector((state) => state.data);

  return (
    <div>
      <Box sx={{ display: "flex", marginBottom: "30px" }}>
        <Box>
          <SideBar />
        </Box>
        <Box>
          <Header />
          <Divider variant="middle" />
          <Box key={userData?.id} mt={3} sx={{ display: "flex" }}>
            <Box sx={{ width: "330px" }}>
              <Stack direction="column" spacing={1}>
                <Avatar
                  alt="Profile-Picture"
                  src={userData?.profilepicture}
                  sx={{
                    width: 186,
                    height: 186,
                    margin: "auto",
                  }}
                />
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  {userData?.name}
                </Typography>

                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Username :{userData?.username}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Email : {userData?.email}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Phone : {userData?.phone}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Website : {userData?.website}
                </Typography>
              </Stack>{" "}
              <Divider sx={{ width: "330px", margin: "10px" }} />
              <Stack direction="column" spacing={1}>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Company
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Name : {userData?.company?.name}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Catchphrase : {userData?.company?.catchPhrase}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Bs : {userData?.company?.bs}
                </Typography>
              </Stack>{" "}
            </Box>
            <Box mx={5}>
              <Divider orientation="vertical" />
            </Box>
            <Box>
              <Typography variant="h6">Address :</Typography>
              <Typography variant="h6" mx={2} my={1}>
                Street : {userData?.address?.street}
              </Typography>
              <Typography variant="h6" mx={2} my={1}>
                Suite : {userData?.address?.suite}
              </Typography>
              <Typography variant="h6" mx={2} my={1}>
                City : {userData?.address?.city}
              </Typography>
              <Typography variant="h6" mx={2} my={1}>
                Zipcode : {userData?.address?.zipcode}
              </Typography>
              <Box >
                <img
                  src={map}
                  alt="map"
                  style={{
                    borderRadius: "20px",
                    width: "460px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  margin: "1px 2px",
                }}
              >
                <Typography variant="body2" m={1}>
                  Lat : {userData?.address?.geo?.lat}
                </Typography>
                <Typography variant="body2" m={1}>
                  Lng : {userData?.address?.geo?.lng}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <ChatBox />
    </div>
  );
}
