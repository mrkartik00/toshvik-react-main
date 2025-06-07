// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import { lightTheme, darkTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  a {
    color: ${({ theme }) => theme.link || theme.primary};
    transition: color 0.3s ease;
    text-decoration: none;
  }
  a:hover, a:focus {
    color: ${({ theme }) => theme.linkHover || theme.secondary};
    text-decoration: underline;
  }
  .page-content {
    min-height: 80vh;
    padding-bottom: 40px;
  }
`;

const FloatingSettingsButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.card || theme.navBackground};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 1002;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.linkHover || theme.primary};
    color: #fff;
    outline: none;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 20px;
    bottom: 15px;
    right: 15px;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <Router>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
            </Routes>
          </main>
          <FloatingSettingsButton
            onClick={toggleDarkMode}
            aria-label="Toggle Theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? '☀️' : '🌙'}
          </FloatingSettingsButton>
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
