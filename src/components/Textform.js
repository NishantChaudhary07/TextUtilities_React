import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState('');
    //setText("Update");

    const handleUpClick = () =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }

    const handleClearText = () =>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopyText = () =>{
        var text=document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }

    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white' }}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='my-3' style={{color: props.mode==='dark'?'white':'black' }}>
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{text.split(" ").length * 0.02}mins read time</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
