import "./App.css";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    general: {
      name: "Name",
      email: "Email",
      phone: "Phone",
    },
    education: {
      school: "School name",
      degree: "Degree",
      date: "date",
    },
    practical: {
      compName: "Company name",
      title: "Title",
      desc: "Job description",
      dateFrom: "Date from",
      dateTo: "Date to",
    },
  });

  const [edit, setEdit] = useState(false);

  const [test, setTest] = useState("123");

  function handleEdit() {
    setEdit((prev) => !prev);
  }

  function handleName(e) {
    setInfo((prev) => ({
      ...prev,
      general: {
        ...prev.general,
        name: e.target.text,
      },
    }));
  }

  function handleTest(e) {
    setTest(() => e.target.textContent);
    console.log(test);
  }

  return (
    <>
      <p contentEditable={edit} onInput={handleTest}>
        {test}
      </p>
      <button className={"edit-btn"} onClick={handleEdit}>
        {edit ? "Save" : "Edit"}
      </button>
    </>
  );
  //
  // return (
  //   <>
  //     <div className={"input-container"}>
  //       {edit ? (
  //         <input type="text" />
  //       ) : (
  //         <p className={`input-text`}>{info.general.name}</p>
  //       )}
  //     </div>
  //     <button className={"edit-btn"} onClick={handleEdit}>
  //       {edit ? "Save" : "Edit"}
  //     </button>
  //   </>
  // );
}

export default App;
