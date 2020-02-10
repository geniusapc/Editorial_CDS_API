import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";
import axios from "axios";

const UserList = () => {
     const [number, setNumber] = useState("");
     const [numberById, setNumberById] = useState("");
     const [list, setList] = useState([]);
     const [loading, setLoading] = useState();
     const getUsers = async e => {
          e.preventDefault();
          console.log(number);

          try {
               const res = await axios.get(`/api/user?limit=${number}`, {
                    headers: {
                         "conent-type": "application/json",
                         "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo`
                    }
               });

               console.log(res.data);
               setList(res.data);
          } catch (error) {
               console.log(error);
          }
     };
     return (
          <div className="form-top">
               <div className="mx-5">
                    <form className="mt-5 " onSubmit={getUsers}>
                         <div className="form-div">
                              <label htmlFor="id">
                                   Enter Users Limit<span>*</span>
                              </label>
                              <input
                                   type="number"
                                   // value={number}
                                   placeholder="password"
                                   name="id"
                                   onChange={e => setNumber(e.target.value)}
                              />
                         </div>
                         <div className="form-div">
                              <button
                                   className="btn-sm btn-primary m-2"
                                   type="submit"
                              >
                                   {loading ? (
                                        <FontAwesomeIcon
                                             style={{
                                                  marginRight: "1rem",
                                                  marginTop: ".4rem"
                                             }}
                                             icon="spinner"
                                             size="1x"
                                             color="#fffb00f6"
                                             spin
                                        />
                                   ) : (
                                        "Get Users"
                                   )}
                              </button>
                         </div>
                    </form>
                    <div className="mx-5 my-4">
                         <h3 className="text-primary">Users List</h3>
                         <Table bordered hover>
                              <thead>
                                   <tr className="text-primary">
                                        <th>Id</th>
                                        <th>State Code</th>
                                        <th>Role</th>
                                        <th>created</th>
                                   </tr>
                              </thead>
                              {list.map(user => (
                                   <tbody>
                                        <tr>
                                             <th scope="row">{user.id}</th>
                                             <td>{user.stateCode}</td>
                                             <td>{user.role}</td>
                                             <td>{user.createdAt}</td>
                                        </tr>
                                   </tbody>
                              ))}
                         </Table>
                         <button
                              className="btn btn-danger"
                              onClick={() => setList([])}
                         >
                              Clear List
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default UserList;
