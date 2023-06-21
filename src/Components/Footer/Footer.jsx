// import { getSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import "./footer.css"
function Footer() {
  
  const [version, setVersion] = useState("0.1.9")
  const [beta, setBETA] = useState("6.25")
    // let thisYear = new Date().getFullYear();

    return (

      <>
      <div class="horizontal-line"></div>

        <footer className='mainFooter'>
        <div className="under-the-hood-content">
        <span>about</span>:{' '}{'('}
        {React.createElement('br', null)}
        <span style={{ display: 'inline-block', width: '32px' }}></span>
        <span className="json-key">version</span>:{' '}
        <span className="json-value">{version} <small>—</small> BETA 6.25</span>,
        {React.createElement('br', null)}
        <span style={{ display: 'inline-block', width: '32px' }}></span>
        <span className="json-key">whats_new</span>:{' '}
        <span className="json-value">community page</span>,
        {React.createElement('br', null)}
        <span style={{ display: 'inline-block', width: '32px' }}></span>
        <span className="json-key">up_next</span>:{' '}
        <span className="json-value">more <a href="">MMcode•003</a> tasks</span>,
        {React.createElement('br', null)}
        <span style={{ display: 'inline-block', width: '32px' }}></span>
        <span className="json-key">coming_soon</span>:{' '}
        <span className="json-value">events calendar</span>,
        {React.createElement('br', null)}
        <span style={{ display: 'inline-block', width: '32px' }}></span>
        <span className="json-key">social</span>:{' '}
        <span className="json-value">
          <a href="">@MM-code</a>
        </span>
        {React.createElement('br', null)}
        {'};'}
        {React.createElement('br', null)}
        {React.createElement('br', null)}
        <span>legal</span>:{' '}{'{'}
        {React.createElement('br', null)}
        <span style={{ display: 'inline-block', width: '32px' }}></span>
        <span className="json-key">terms</span>:{' '}
        <span className="json-value">
          <a href="#">of use</a>
        </span>,
        {React.createElement('br', null)}
        <span style={{ display: 'inline-block', width: '32px' }}></span>
        <span className="json-key">privacy</span>:{' '}
        <span className="json-value">
          <a href="#">policy</a>
        </span>
        {React.createElement('br', null)}
        {');'}
      </div>

      {/* second */}
    
      <div className="under-the-hood-content">
      <span>changelog</span>: {'('}
      <span className="arrays-container">
        <span className="array-item">
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">version</span>:{' '}
          <span className="json-value">{version}</span>,
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">notes</span>:{' '}
          <span className="json-value">
            added{' '}
            <a href="#">community page</a>
          </span>
          <br />
        </span>
        <span className="array-item">
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">version</span>:{' '}
          <span className="json-value">{version}</span>,
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">notes</span>:{' '}
          <span className="json-value">
            added{' '}
            <a href="#">
              Davinci•003
            </a>
          </span>
          <br />
        </span>
        <span className="array-item">
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">version</span>:{' '}
          <span className="json-value">0.1.7</span>,
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">notes</span>:{' '}
          <span className="json-value">
            upvote answers to{' '}
            <a href="">bounties</a>
          </span>
          <br />
        </span>
        <span className="array-item">
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">version</span>:{' '}
          <span className="json-value">0.1.6</span>,
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">notes</span>:{' '}
          <span className="json-value">article editor refresh</span>
          <br />
        </span>
      </span>
      {');'}...
      <br />
    </div>


    {/* third */}

    <div className="under-the-hood-content">
    
      <span>recent_tips</span>: (
      <span className="arrays-container">
        <span data-post-type="post" className="array-item">
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">tipper</span>:{' '}
          <span className="json-value">
            <a href="#">@Change</a>
          </span>
          ,<br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">tipped</span>:{' '}
          <span className="json-value">
            <a href="#">article</a>
          </span>
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">amount</span>:{' '}
          <span className="json-value">
            1000 <a href="#">SATS</a>
          </span>
          ,<br />
        </span>
        <span data-post-type="post" className="array-item">
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">tipper</span>:{' '}
          <span className="json-value">
            <a href="#">@Change</a>
          </span>
          ,<br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">tipped</span>:{' '}
          <span className="json-value">
            <a href="#">article</a>
          </span>
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">amount</span>:{' '}
          <span className="json-value">
            1000 <a href="#">SATS</a>
          </span>
          ,<br />
        </span>
        <span data-post-type="page" className="array-item">
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">tipper</span>:{' '}
          <span className="json-value">
            <a href="#">@Change</a>
          </span>
          ,<br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">tipped</span>:{' '}
          <span className="json-value">
            <a href="#">live stream</a>
          </span>
          <br />
          <span style={{ display: 'inline-block', width: '32px' }}></span>
          <span className="json-key">amount</span>:{' '}
          <span className="json-value">
            1000 <a href="#">SATS</a>
          </span>
          ,<br />
        </span>
      </span>
      )...
      <br />
      <div id="inner-hood">
        <div id="right-side-footer" style={{ float: 'right', textAlign: 'right' }}>
          <h5>Social</h5>
          <p>
            <a target="_blank" rel="nofollow">@MM-Code</a>
          </p>
        </div>
        <div id="left-side-footer">
          <h5>Version</h5>
          <p>
            {version} <small>—</small> BETA {beta}
          </p>
        </div>
      </div>
    </div>

</footer>
</>
    );

}

export default Footer;
