import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';

const PanelOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001; 
`;

const SwitcherPanel = styled.div`
  background: #fff;
  padding: 25px;
  padding-top: 40px; 
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  width: 90%;
  max-width: 350px;
  position: relative; 

  h4 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.2rem;
    color: var(--primary-color);
    text-align: center;
  }

  .color-input-group {
    margin-bottom: 12px;
    label {
      display: block;
      font-size: 0.9rem;
      margin-bottom: 6px;
      color: #555;
    }
    input[type="color"] {
      width: 100%;
      height: 35px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 2px;
      cursor: pointer;
    }
    input[type="text"] {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 0.9rem;
        margin-top: 4px;
    }
  }
  button {
    margin-top: 10px;
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: #888;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  
  &:hover {
    color: #333;
  }
`;

const predefinedThemes = [
    { name: "Default Green", primaryColor: '#4CAF50', secondaryColor: '#FFC107' },
    { name: "Ocean Blue", primaryColor: '#03A9F4', secondaryColor: '#FF9800' },
    { name: "Royal Purple", primaryColor: '#673AB7', secondaryColor: '#CDDC39' },
    { name: "Earthy Brown", primaryColor: '#795548', secondaryColor: '#FFEB3B' },
];


const ThemeSwitcher = ({ closePanel }) => {
  const { theme, setTheme, defaultTheme } = useTheme();
  const [primary, setPrimary] = useState(theme.primaryColor);
  const [secondary, setSecondary] = useState(theme.secondaryColor);

  useEffect(() => {
    setPrimary(theme.primaryColor);
    setSecondary(theme.secondaryColor);
  }, [theme]);

  const handleApplyCustomTheme = () => {
    setTheme({ primaryColor: primary, secondaryColor: secondary });
  };

  const handlePredefinedThemeChange = (e) => {
    const selectedThemeName = e.target.value;
    const selectedTheme = predefinedThemes.find(t => t.name === selectedThemeName);
    if (selectedTheme) {
      setPrimary(selectedTheme.primaryColor);
      setSecondary(selectedTheme.secondaryColor);
      setTheme({ primaryColor: selectedTheme.primaryColor, secondaryColor: selectedTheme.secondaryColor });
    }
  };

  const handleResetTheme = () => {
    setPrimary(defaultTheme.primaryColor);
    setSecondary(defaultTheme.secondaryColor);
    setTheme(defaultTheme);
  }

  return (
    <PanelOverlay onClick={closePanel}> 
      <SwitcherPanel onClick={(e) => e.stopPropagation()}> 
        <CloseButton onClick={closePanel} aria-label="Close theme settings">×</CloseButton>
        <h4>Theme Customizer</h4>
        
        <div className="color-input-group">
          <label htmlFor="predefinedThemes">Predefined Themes:</label>
          <select id="predefinedThemes" 
            onChange={handlePredefinedThemeChange} 
            value={predefinedThemes.find(t => t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor)?.name || ""}
            style={{padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ddd'}}
          >
              <option value="" disabled>Select a theme</option>
              {predefinedThemes.map(pt => (
                  <option key={pt.name} value={pt.name}>{pt.name}</option>
              ))}
          </select>
        </div>

        <div className="color-input-group">
          <label htmlFor="primaryColor">Primary Color:</label>
          <input type="color" id="primaryColor" value={primary} onChange={(e) => setPrimary(e.target.value)} />
          <input type="text" placeholder="#RRGGBB" value={primary} onChange={(e) => setPrimary(e.target.value)} />
        </div>
        <div className="color-input-group">
          <label htmlFor="secondaryColor">Secondary Color:</label>
          <input type="color" id="secondaryColor" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
          <input type="text" placeholder="#RRGGBB" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
        </div>
        <button className="btn" onClick={handleApplyCustomTheme}>Apply Custom Colors</button>
        <button className="btn btn-secondary" style={{marginTop: '8px', background: '#aaa'}} onClick={handleResetTheme}>Reset to Default</button>
      </SwitcherPanel>
    </PanelOverlay>
  );
};

export default ThemeSwitcher;
