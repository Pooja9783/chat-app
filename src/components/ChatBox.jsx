import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/action";

const ChatBox = () => {
  const disptach = useDispatch();
  const [open, setOpen] = useState(false);

  const users = useSelector((state) => state.data.data);

  useEffect(() => {
    disptach(getData());
  }, [open]);

  
  const handleChatBoxClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Paper
        style={{
          width: "250px",
          position: "fixed",
          bottom: 0,
          right: 20,
          zIndex: 999,
          background: "#2D31FA",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" m={1} color="white">
            <ChatBubbleOutlineIcon />
            <Typography variant="body2" mx={1}>
              Chat
            </Typography>
          </Box>
          <IconButton onClick={handleChatBoxClick}>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        {open && (
          <Box
            sx={{
              overflow: "auto",
              height: "200px",
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
            p={2}
            bgcolor="#FAF8F1"
            borderRadius="4px 4px 0 0"
            boxShadow="0 -4px 4px rgba(0,0,0,0.1)"
          >
            <List>
              {users?.map((user, index) => (
                <ListItem key={index} disableGutters>
                  <Box display="flex" alignItems="center">
                    <Box flexGrow={1} display="flex">
                      <Avatar
                        alt="Profile-Picture"
                        src={user?.profilepicture}
                        sx={{ margin: "1px" }}
                      />
                      <Typography variant="body2" mx={1}>
                        {user?.name}
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Paper>
    </>
  );
};

export default ChatBox;
