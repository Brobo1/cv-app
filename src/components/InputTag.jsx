import { useState } from "react";
import "./InputTag.css";

export function InputTag(props) {
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

  function handleName(e) {
    setInfo((prev) => ({
      ...prev,
      general: {
        ...prev.general,
        [props.stuff]: e.target.value,
      },
    }));
  }

  //TODO: Capitalize placeholders
  return (
    <>
      <div id="content">
        <div className={"input-container"}>
          {props.edit ? (
            <input
              className={"input-field"}
              type="text"
              placeholder={[props.stuff].toString()}
              value={info.general[props.stuff]}
              onChange={handleName}
            />
          ) : (
            <p className={`input-text`}>
              {info.general[props.stuff]
                ? info.general[props.stuff]
                : [props.stuff]}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
