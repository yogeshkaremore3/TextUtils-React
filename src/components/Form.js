import React, { useState } from "react";
export default function Form(props) {
  // const [name,setName]=useState('enter the name');

  const upClicked = () => {
    // console.log('button was clicked...',name);

    const newText = name.toUpperCase();

    setName(newText);

    props.show_alert('converted to Uppercase','success');

  };

  const downClicked = () => {
    const newText = name.toLowerCase();

    setName(newText);

    props.show_alert('converted to lowercase','success')
  };
  const clearClicked = () => {
    setName("");
   props.show_alert('text cleared','success')

  };

  const copyClicked = () => {
    const newText = document.getElementById("mytxt");

    newText.select();
    navigator.clipboard.writeText(newText.value);

    props.show_alert('copied to clipboard','success')
  };

  const upChanged = (event) => {
    // console.log('onchange');

    setName(event.target.value);
  };

  const [name, setName] = useState("");

  // setName("yogesh");

  return (
    <>
    <div className={`text-${props.mode==='light'?'dark':'light'}`}>
      <div className="my-3">
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className={`form-control text-${props.mode==='light'?'dark':'light'}`}
            value={name}
            onChange={upChanged}
            placeholder="enter text here.."
            id="mytxt"
            rows="8"
            style={{backgroundColor: props.mode==='light'?'white':'grey'}}
          ></textarea>
          <div>
            <button className="btn btn-primary" onClick={upClicked}>
              Convert to Uppercase
            </button>{" "}
            <button className="btn btn-primary" onClick={downClicked}>
              Convert to Lowercase
            </button>{" "}
            <button className="btn btn-danger" onClick={clearClicked}>
              Clear
            </button>{" "}
            <button type="button" class="btn btn-light" onClick={copyClicked}>
              copy
            </button>
          </div>
        </div>
      </div>

      <div className="mb-3 my-2">
        <h2>your text summary</h2>

        <p>
          {" "}
          {name.split(" ").length} words and {name.length} character
        </p>
        <p>{0.008 * name.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{name.length>0?name:'Enter something in the textbox to preview it here..'}</p>
      </div>

      </div>
    </>
  );
}
