import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case","success");
    }
    const handleLowClick= ()=>{
        console.log("Lowercase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case","success");
    }
    const handleClearClick= ()=>{
        console.log("Clear Text");
        let newText =""
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopy=()=>{
        var text = document.querySelector('#myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }
    const handleSpace=()=>{
        let newText=text.trim().split(/\s+/).join(' ');
        setText(newText);
        props.showAlert("Removed Extra spaces","success");
    }
    const handleOnChange= (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    const [text, setText]=useState('');
    //text="new text"; Wrong way to use state
    //setText("new text"); //correct way to use state
  return (
    <>
    <div className="container" style= {{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
           {/* <label htmlFor="myBox">Example textarea</label>  */}
           <textarea className="form-control" value ={text} onChange= {handleOnChange} style= {{backgroundColor: props.mode==='light'?'white':'black',
            color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Covert to Uppercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Covert to Lowercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleSpace}>Remove Extra Space</button>

    </div>
    <div className="container my-1" style= {{color: props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview here."}</p>
    </div>
    </>
  )
}

