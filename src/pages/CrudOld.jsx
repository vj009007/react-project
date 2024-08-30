import React, { useState } from "react";
import { crudData } from "../utils/crudData";

const CrudOld = () => {
  const [data, setData] = useState(crudData);
  const [isEdit, setIsEdit] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    designation: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
       setData(data.map((user)=> user.id===userDetails.id ? userDetails : user))

    //   setData(
    //     data.map((user) => {
    //       if (user.id === userDetails.id) {
    //         return userDetails;
    //       } else {
    //         return user;
    //       }
    //     })
    //   );
    //   setIsEdit(false);
    } else {
      setData((prev) => [...prev, { ...userDetails, id: Date.now() }]);
    }

    setUserDetails({ name: "", email: "", designation: "", salary: "" });

    // let isValid = "sdf";
    // let data = isValid == "complete" ? "completed" : (isValid == "pending" ? "pending" : "failed");

    // console.log(data);
  };

  const handleDelte = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const handleUpdate = (user) => {
    setUserDetails(user);
    setIsEdit(true);
  };

  return (
    <div>
      <div className="curd_form">
        <form onSubmit={handleSubmit}>
          <div className="form_input">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form_input">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={userDetails.designation}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form_input">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={userDetails.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form_input">
            <label>Salary</label>
            <input
              type="text"
              name="salary"
              value={userDetails.salary}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="button_container">
            <button className="">{isEdit ? "Update" : "Submit"}</button>
          </div>
        </form>
      </div>
      <div className="curd_table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.designation}</td>
                <td>{user.salary}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdate(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() => handleDelte(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudOld;
