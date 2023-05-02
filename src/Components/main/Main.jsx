import React from 'react';
import DescriptionPanel from '../buttons/descriptionPanel';
import CodeEditor from './CodeEditor';
import Buttons from '../buttons/buttons';


function Main() {

  return (
    <main>
       <div className="editor-container">
        <DescriptionPanel/>
        <CodeEditor />
        <Buttons />
      </div>
    </main>
  )
}

export default Main;
