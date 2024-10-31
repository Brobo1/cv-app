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

  console.log(info.general.name);

  return (
    <>
      {edit ? (
        <input type="text" />
      ) : (
        <p className={`input-text`}>{info.general.name}</p>
      )}
      <button onClick={handleEdit}>{edit ? "Save" : "Edit"}</button>
    </>
  );
}

export default App;
