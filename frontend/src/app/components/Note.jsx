import "../../styles/Note.css"

const Note = ({ title, content, onDelete, id }) => {
  // Function to handle delete button click
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="note m-4">
      <h1>{title}</h1>
      <div className="note-content">
          <p>{content}</p>
      </div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Note;
