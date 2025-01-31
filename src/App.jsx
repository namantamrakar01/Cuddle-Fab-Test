import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ImageCarousel from './components/ImageCarousel';
import Box from '@mui/material/Box';

function App() {
  return (
    <>
      <Box position="fixed" width="100%" zIndex="1100">
        <Navbar />
      </Box>
      <Box pb={6} pt={10}>
        <ProductGrid />
      </Box>
      <Box pb={6} textAlign="center" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'" fontSize="2.4rem" mt={5} textTransform="uppercase">
        Our Bestsellers
      </Box>
      <Box pb={500}>
        <ImageCarousel />
      </Box>
    </>
  );
}

export default App;
