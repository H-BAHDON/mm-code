import React, { Component } from 'react';
import AceEditor from 'react-ace';
// import Action from './Action'

class Main extends Component { 
  
  render() {

    function handleOnPaste(e){
      e.preventDefault();
    }


    return ( 
      // <TextEditor />
      <div>
        render <AceEditor  
        placeholder="<h1> BH </h1>" 
             mode="javascript"
             theme="monokai"  name="blah2"
             // onLoad={this.noCheating}
             // onChange={this.noCheating}
             fontSize={14}
            showPrintMargin={true}
             showGutter={true}
             highlightActiveLine={true}
             onPaste={handleOnPaste}
             value={`function something(editor) 
             console.log("Okay")
        }`}
        setOptions={{
      showLineNumbers: true,
    tabSize: 2,

  }}

        
  />
  
    </div>
   );
  }
}



export default Main;