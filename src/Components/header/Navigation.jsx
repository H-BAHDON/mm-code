import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Navigation({
  handleHTMLClick,
  handleJavaScriptClick,
  handleCSSClick,
  handleReactClick,
  handleSqlClick,
  handleTestClick,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [activeTab, setActiveTab] = useState('html');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Tabs
      value={activeTab}
      onChange={(event, newValue) => {
        handleTabClick(newValue);
        switch (newValue) {
          case 'html':
            handleHTMLClick();
            break;
          case 'css':
            handleCSSClick();
            break;
          case 'javascript':
            handleJavaScriptClick();
            break;
          case 'react':
            handleReactClick();
            break;
          case 'sql':
            handleSqlClick();
            break;
          case 'test':
            handleTestClick();
            break;
          default:
            break;
        }
      }}
      indicatorColor="primary"
      textColor="primary"
      centered={!isSmallScreen} 
      orientation={isSmallScreen ? 'vertical' : 'horizontal'} 
    >
      <Tab label="HTML" value="html" />
      <Tab label="CSS" value="css" />
      <Tab label="JavaScript" value="javascript" />
      <Tab label="React" value="react" />
      <Tab label="SQL" value="sql" />
      <Tab label="Test" value="test" />
    </Tabs>
  );
}

export default Navigation;
