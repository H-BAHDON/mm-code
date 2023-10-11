import React from 'react';
import Grid from '@mui/material/Grid';
import "./footer.css"

function Footer() {

  const thisYear = new Date().getFullYear();

  return (
    <Grid container >
      <Grid item xs={11}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <div className="social mb-4">
                {/* <h3>MM-Code</h3> */}
                <ul className="list-unstyled">
                  <li className="in">
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li className="fb">
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="tw">
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="pin">
                    <a href="#">
                      <span className="icon-pinterest"></span>
                    </a>
                  </li>
                  <li className="dr">
                    <a href="#">
                      <span className="icon-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="copyright">
                <p className="mb-0">
                  <small>&copy; MMCode™ All Rights Reserved. {thisYear}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
