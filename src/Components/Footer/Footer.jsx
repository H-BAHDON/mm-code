// import { getSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';

function Footer() {

    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container footer-content">
                <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">
                    <div className="d-flex align-items-center">
                        <div className="footer-end mb-3 mb-md-0 mx-auto">© {thisYear}
                            MM-Code</div>
                    </div>
                </footer>
            </div>
        </footer>

    );

}

export default Footer;
