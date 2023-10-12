import React from 'react';
import Grid from '@mui/material/Grid';
import "./footer.css"

function Footer() {

  const thisYear = new Date().getFullYear();

  return (
    
        <div className="Footer-container">
          <div>
            <div>
              <div className="copyright">
                <p>
                  <small>&copy; MMCode™ All Rights Reserved. {thisYear}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
  
  );
}

export default Footer;
