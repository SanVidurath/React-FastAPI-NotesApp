import { useState } from "react";
import "../../styles/CreateArea.css";
import Swal from "sweetalert2";

function CreateArea({ onAdd }) {
  // State to hold the note being created
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (note.title === "" || note.content === "") {
      Swal.fire("Error", "Please fill in both fields", "error");
      return;
    }
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            value={note.content}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}

export default CreateArea;
