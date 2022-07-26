import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [inputHasFocus, setFocus] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setFocus(false);
    event.preventDefault();
  }


  return (
    <div>
      <form className="create-note">
        {inputHasFocus && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          onFocus={() => setFocus(true)}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={inputHasFocus ? "3" : "1"}
        />
        <Zoom in={inputHasFocus} ><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>

      </form>
    </div >
  );
}

export default CreateArea;
