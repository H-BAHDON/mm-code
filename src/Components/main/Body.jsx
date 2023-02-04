import React, { Component } from 'react';
import AceEditor from 'react-ace';
// import Action from './Action'

class Main extends Component { 
  render() {
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
             onCopy="return false"
             onPaste="return false"
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