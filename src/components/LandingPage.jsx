import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";

import { getData, selectUser } from "../Redux/action";

export default function LandingPage() {
  const disptach = useDispatch();

  useEffect(() => {
    disptach(getData());
  }, []);

  const getApiData = useSelector((state) => state.data.data);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          padding: "10px",
        }}
      >
        <Grid
          sx={{
            border: "1px solid black",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              background: "#F0EEED",
              borderStartEndRadius: "20px",
              borderStartStartRadius: "20px",
            }}
          >
            <Typography variant="h6" textAlign="center" p={3}>
              Select an account{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              overflowY: "scroll",
              height: "400px",
              padding: "10px",
              marginBottom: "25px",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "white",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
              },
            }}
          >
            {getApiData?.map((user) => {
              return (
                <Box
                  key={user.id}
                  sx={{ padding: "5px 20px" }}
                  onClick={() => disptach(selectUser(user))}
                >
                  <Link
                    to={`/profile-page/${user.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Profile-Picture"
                        src={user.profilepicture}
                        sx={{ margin: "2px" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {user.name}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{
                        borderBottom: "2px solid #F0EEED",
                        width: "auto",
                        margin: "2px",
                      }}
                    ></Typography>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
