import { Box, Typography, useMediaQuery } from "@mui/material";
import Form from "./Form";
import logo from "../../assets/logo.png";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Set height to viewport height
        backgroundImage: "url('https://images.unsplash.com/photo-1497942304796-b8bc2cc898f3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {/* Glass effect overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(2px)",
        }}
      />
      
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: isNonMobileScreens ? "30%" : "90%",
          p: "1.5rem",
          m: "1rem",
          borderRadius: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "50px", marginBottom: "1rem" }} />
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
        Visionexus
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
