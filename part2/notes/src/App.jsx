import Note from "./components/notes";
import { useState } from "react";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);

    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObj));
    setNewNote("");
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleInputChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
