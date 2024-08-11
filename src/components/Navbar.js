import React, { useEffect } from "react";
import { Box } from "@mui/material";
import "../App.css";
import Logo from "../static/logo.png";
import CustomButton from "./Custombutton";

function Navbar() {
  const navbaritems = ["About", "Experience", "Work", "Contact"];

  return (
    <Box
      className="roboto"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "85px",
        alignItems: "center",
        padding: "0 50px",
      }}
    >
      <img src={Logo} style={{ height: "40px", width: "40px" }} />
      <Box>
        <Box sx={{ display: "flex" }}>
          {navbaritems?.map((item, index) => {
            return (
              <Box
                sx={{
                  pr: "25px",
                  cursor: "pointer",
                  display: "flex",
                  fontSize: "12px",
                }}
              >
                <Box
                  sx={{
                    color: "#5BF2CE",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  0{index + 1}.
                </Box>
                <Box
                  sx={{
                    color: "#A7C3E5",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item}
                </Box>
              </Box>
            );
          })}
          <CustomButton text="Resume" padding="12px 16px" />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
