import "../../styles/CreateArea.css";

function CreateArea() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form>
          <input name="title" placeholder="Title"/>
          <textarea name="content" placeholder="Take a note..."/>
          <button onClick={handleClick}>Add</button>
        </form>
      </div>
    </>
  );
}

export default CreateArea;
