import React, { useState, useEffect } from "react";
import { postStudentApi, getStudentApi, deleteStudentAPI } from "./student";

const AddStudent = () => {
  const [studentInfo, setstudentInfo] = useState({
    name: "",
    roll_no: "",
    class: "",
  });
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const getData = await getStudentApi();
      setData(getData);
    })();
  }, [data]);

  useEffect(() => {
    console.log("My console", data);
  }, [data]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setstudentInfo({ ...studentInfo, [name]: value });
  };

  const handleDelete = (id) => {
    const delRes = deleteStudentAPI(id);
    console.log("My console", delRes);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await postStudentApi({
      name: studentInfo.name,
      roll_no: studentInfo.roll_no,
      class: studentInfo.class,
    });
    setstudentInfo({
      name: "",
      roll_no: "",
      class: "",
    });
  };

  return (
    <div className="outer-div">
      <div className="inner-div">
        <form className="form" onSubmit={onSubmit}>
          <div className="w-100p d-flex justify-content-center align-items-center mb-2">
            <label htmlFor="name">Name&nbsp;&nbsp;</label>
            <input
              type="text"
              name="name"
              id="name"
              value={studentInfo.name}
              onChange={onChange}
            />
          </div>
          <div className="w-100p d-flex justify-content-center align-items-center mb-2">
            <label htmlFor="roll_no">Roll no &nbsp;</label>
            <input
              type="text"
              name="roll_no"
              id="roll_no"
              value={studentInfo.roll_no}
              onChange={onChange}
            />
          </div>
          <div className="w-100p d-flex justify-content-center align-items-center mb-2">
            <label htmlFor="class">Class&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input
              type="text"
              name="class"
              id="class"
              value={studentInfo.class}
              onChange={onChange}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="record-div">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{ele.name}</td>
                      <td>{ele.roll_no}</td>
                      <td>{ele.class}</td>
                      <td>
                        <button className="margin-r-3">Edit</button>
                        <button onClick={() => handleDelete(ele._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
