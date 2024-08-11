import React from "react";
import { Box } from "@mui/material";
import "../App.css";
import CustomButton from "./Custombutton";

function Getintouch() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        maxWidth: "600px",
        cursor: "pointer",
      }}
    >
      <Box
        className="roboto"
        sx={{
          color: "#5BF2CE",
          display: "flex",
          justifyContent: "center",
          margin: "0 0 19px 0",
        }}
      >
        04. What's Next?
      </Box>
      <Box
        className="customdmsans"
        sx={{
          color: "#A7C3E5",
          fontSize: "60px",
          fontWeight: "600",
          display: "flex",
          justifyContent: "center",
          margin: "0 0 10px 0",
        }}
      >
        Get In Touch
      </Box>
      <Box
        sx={{ textAlign: "center", margin: "0 0 48px 0" }}
        className="customdmsans"
      >
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CustomButton text="Say Hello" />
      </Box>
    </Box>
  );
}

export default Getintouch;
