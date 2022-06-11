/* eslint-disable no-shadow */
import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Test() {
  const [state, changeState] = useState({
    name: "",
    eventTitle: "",
    details: "",
    list: [],
    toggleIndex: "",
    editName: "",
    editEventTitle: "",
    editDetails: "",
    editObj: {},
  });
  const [array, setArray] = useState([{
    id: 1,
    name: "new",
  },
  {
    id: 2,
    name: "mook",
  },
  ]);
  const handleArray = (id, name, type) => {
    if (type === "edit") {
      const temp = array.map((item) => (item.id === id ? { ...item, name } : item));
      setArray(temp);
    } else if (type === "delete") {
      const temp = array.filter((item) => item.id !== id);
      setArray(temp);
    } else if (type === "add") {
      setArray((item) => ([...item, { id, name }]));
    }
  };
  const handleName = (event) => {
    const { target } = event;

    changeState((state) => ({
      ...state,
      name: target.value,
    }));
  };

  const handleEventTitle = (event) => {
    const { target } = event;

    changeState((state) => ({
      ...state,
      eventTitle: target.value,
    }));
  };

  const handleDetails = (event) => {
    const { target } = event;

    changeState((state) => ({
      ...state,
      details: target.value,
    }));
  };

  const submitHandle = () => {
    const { name, eventTitle, details } = state;
    const obj = { name, eventTitle, details };

    changeState((state) => ({
      ...state,
      list: [...state.list, obj], // push
      editObj: { ...obj, name: "mook" },
    }));
  };

  const resetHandle = () => changeState((state) => ({
    ...state,
    name: "",
    eventTitle: "",
    details: "",
  }));
  // console.log(array);
  console.log(state);
  return (
    <div>
      <button
        type="submit"
        onClick={() => handleArray(2, "narak", "delete")}
      >
        change state
      </button>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-5 text-center"> set your reminders</h1>
        </div>
      </div>
      <div className="bg-dark container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 " />

          <div className="col-sm-12 col-md-4 col-lg-4 ">
            <div className="card login-card ">
              <div className=" card-header ">
                <h3 className="text-center"> TO-DO LIST FORM</h3>
              </div>

              <div className="card-body">
                <form className="form-elements">
                  <input
                    value={state.name}
                    className="form-control form-inputs form-elements"
                    type="text"
                    onChange={handleName}
                    placeholder="user name"
                  />
                  <input
                    value={state.eventTitle}
                    className="form-control form-inputs form-elements"
                    type="text"
                    onChange={handleEventTitle}
                    placeholder="Event Title"
                  />
                  <input
                    value={state.details}
                    className="form-control form-inputs form-elements"
                    type="text"
                    onChange={handleDetails}
                    placeholder="Details "
                  />
                </form>
              </div>

              <div className="card-footer ">
                <button
                  type="submit"
                  onClick={submitHandle}
                  className="btn-primary offset-lg-1 offset-md-0 btn-sm "
                >
                  Create
                </button>

                <button
                  type="submit"
                  onClick={resetHandle}
                  className="btn-primary offset-lg-5 offset-md-0 btn-sm"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 " />
        </div>

        <div className="container-fluid bg-dark">
          <div className="row ">
            {state.list.map((data, index) => (
              <div style={{ border: "1px black solid" }} key={data.name}>
                <p>{data.name}</p>
                <p>{data.eventTitle}</p>
                <p>{data.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="footer footer-copyright"
        style={{ background: "#e9ecef" }}
      >
        <div className="container">
          <h6 className=" text-center">Just make it work ;)</h6>
        </div>
      </div>
    </div>
  );
}
