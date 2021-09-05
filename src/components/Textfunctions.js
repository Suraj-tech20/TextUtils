import React, { useState } from 'react'

export default function Textfunctions(props) {
    const handleChange = (event) => {
        setText(event.target.value);
        // console.log(text);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showalert("Convert to Upper Case", "success")
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showalert("Convert to Lower Case", "success")
    }

    const handleCopyClick = () => {
        //     var copyText = document.getElementById("FormControlTextarea");
        //     navigator.clipboard.writeText(copyText.value);
        navigator.clipboard.writeText(text);
        props.showalert("Copy to Clipboard", "success")
    }

    const handleCapitalizeClick = () => {
        setText(text.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()));
        props.showalert("Convert to Capitalize Letters", "success")
    }
    const handleClearClick = () => {
        setText("");
        props.showalert("Text is Clear", "success")
    }

    const handleExtraspace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Extra spaces are removed", "success")
    }
    const [text, setText] = useState("");

    return (
        <div >
            <div className="my-4 container">
                <h1>Enter Text Here</h1>
                {console.log(props.mode)}
                <textarea style={{ color: props.mode === 'light' ? 'black' : 'white' }} className={`form-control bg-${props.mode} bg-opacity-50`} id="FormControlTextarea" rows="10" onChange={handleChange} value={text}></textarea>
            </div>
            <div className="container">
                <button disabled={text.length === 0 ? true : false} className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-2`} onClick={handleLoClick}>To LowerCase</button>
                <button disabled={text.length === 0 ? true : false} className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-2`} onClick={handleUpClick}>To UpperCase</button>
                <button disabled={text.length === 0 ? true : false} className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-2`} onClick={handleCapitalizeClick}>Capitalize words</button>
                <button disabled={text.length === 0 ? true : false} className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-2`} onClick={handleExtraspace}>Remove Extra Space</button>
                <button disabled={text.length === 0 ? true : false} className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-2`} onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length === 0 ? true : false} className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} m-2`} onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>Number of words : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} and Number of characters: {text.length}</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Enter text to preview here" : text}</p>
            </div>
        </div>
    )
}
