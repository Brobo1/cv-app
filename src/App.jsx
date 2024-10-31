import "./App.css";
import { InputTag } from "./components/InputTag.jsx";
import { useState } from "react";

function App() {
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit((prev) => !prev);
  }

  return (
    <>
      <div id="content">
        <InputTag edit={edit} stuff={"name"}></InputTag>
        <InputTag edit={edit} stuff={"email"}></InputTag>
        <button className={"edit-btn"} onClick={handleEdit}>
          {edit ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
}

export default App;
