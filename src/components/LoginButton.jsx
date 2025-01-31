import Button from "@mui/material/Button";

function LoginButton() {
  return (
    <Button
      sx={{
        textTransform: "none", // Disable the default uppercase transformation
        borderRadius: 0, // Make borders square instead of rounded
        height: "35px", // Adjust height if needed
        width: "95px", // Adjust width if needed\
        backgroundColor: "#EEE8E4", // Set background color to grey
        color : "black", // Set text color to black
        fontFamily: "Baloo 2, Arial, sans-serif", // Set font family to Arial
        "&:hover": {
          backgroundColor: "#D6D0CC", // Change background color on hover to a little darker
        },
        fontSize: "12px", 
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'", // Set font family to Arial
      }}
    >
      Login
    </Button>
  );
}

export default LoginButton;
