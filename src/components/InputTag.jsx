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

  function handleFields(e) {
    setInfo((prev) => ({
      ...prev,
      [props.section]: {
        ...prev[props.section],
        [props.item]: e.target.value,
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
              placeholder={[props.item].toString()}
              value={info.general[props.item]}
              onChange={handleFields}
            />
          ) : (
            <p className={`input-text`}>
              {info.general[props.item]
                ? info.general[props.item]
                : [props.item]}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
