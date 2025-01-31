import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import image6 from "../assets/image6.jpg";
import image5 from "../assets/image5.jpg";
import image4 from "../assets/image4.jpg";
import image3 from "../assets/image3.jpg";
import image2 from "../assets/image2.jpg";
import image1 from "../assets/image1.jpg";

const DashboardImageGrid = () => {
  const itemData = [
    { img: image1, title: "Munchkin Outfit" },
    { img: image2, title: "Baba Suit" },
    { img: image3, title: "Kiddo Set" },
    { img: image4, title: "Snuggle Wear" },
    { img: image5, title: "Tiny Tot Dress" },
    { img: image6, title: "Junior Style" },
  ];

  return (
    <>
      <ImageList
        sx={{
          width: "100%",
          height: 1900,
          margin: "0 auto",
          overflow: "hidden",
          gap: "1px !important", // Set the gap to 1px
        }}
        cols={3}
        rowHeight={810}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                "&:hover img": {
                  transform: "scale(1.1)",
                  transition: "transform 0.4s ease-in-out",
                },
                "&:hover .vignette": {
                  opacity: 0,
                  transition: "opacity 0.4s ease-in-out",
                },
              }}
            >
              <Box
                className="vignette"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "30%",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
                }}
              />
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.4s ease-in-out",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "8px",
                  textAlign: "center",
                  fontFamily: "Baloo 2, Arial, sans-serif",
                  fontSize: "2rem",
                }}
              >
                {item.title}
              </Box>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default DashboardImageGrid;
