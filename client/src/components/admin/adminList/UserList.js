import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";
import axios from "axios";

const UserList = () => {
     const [number, setNumber] = useState("");
     const [numberById, setNumberById] = useState("");
       const [deleteList, setDeleteList] = useState("");
     const [list, setList] = useState([]);
     const [loading, setLoading] = useState();
     const [loading1, setLoading1] = useState();
     const [notify, setNotify] = useState("");
     const [error, setError] = useState("");
     const getUsers = async e => {
          e.preventDefault();

          try {
               setLoading1(true);
               const res = await axios.get(`/api/user?limit=${number}`, {
                    headers: {
                         "conent-type": "application/json",
                         "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo`
                    }
               });
               setList(res.data);
               setLoading1(false);
          } catch (error) {
               setError(error.data)
               setLoading1(false);
          }
     };
     const getUsersByProfileId = async e => {
          e.preventDefault();
          try {
               setLoading(true);
               const res = await axios.get(`/api/user/profile/${numberById}`, {
                    headers: {
                         "conent-type": "application/json",
                         "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo`
                    }
               });
               setDeleteList(res.data);
               setLoading(false);
          } catch (error) {
             setError(error.data)
             setLoading(false);
          
             
          }
     };

     const deleteUser =async  (id)=> {

            try {
           
               alert("hope you know what you are doing ?")
               const res = await axios.delete(`/api/user/${id}`, {
                    headers: {
                         "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwicm9sZSI6IkVESVRPUiIsImlhdCI6MTU4MDk5OTQ4NX0.5eRfUxRWa-ANnx9z5celKvyf48wJyFHNqxuxi2MOrNo`
                    }
               });
               setNotify(res.data);
          } catch (error) {
               setError(error.data);
          }
          
     }

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
                                   placeholder="id"
                                   name="id"
                                   onChange={e => setNumber(e.target.value)}
                              />
                         </div>
                         <div className="form-div">
                              <button
                                   className="btn-sm btn-primary m-2"
                                   type="submit"
                              >
                                   {loading1 ? (
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
                                   <tbody key={user.id}>
                                        <tr >
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
               <div className="mx-5">
                    <form className="mt-5 " onSubmit={getUsersByProfileId}>
                         <div className="form-div">
                              <label htmlFor="id">
                                   Access Users by ID<span>*</span>
                              </label>
                              <input
                                   type="number"
                                   // value={number}
                                   placeholder="id"
                                   name="id"
                                   onChange={e => setNumberById(e.target.value)}
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
                         <h3 className="text-primary">Permit and Delete Users</h3>
                            {notify ? (
                         <span className="alert-success">{notify}</span>
                    ) : (
                         <span className="alert-danger">{error}</span>
                    )}
                         <Table bordered hover>
                              <thead>
                                   <tr className="text-primary">
                                        <th>Id</th>
                                        <th>State Code</th>
                                        <th>Role</th>
                                        <th>Delete</th>
                                   </tr>
                              </thead>
                                   <tbody key={deleteList.id} >
                                        <tr className="text-center" >
                                             <th scope="row">{deleteList.id}</th>
                                             <td>{deleteList.stateCode}</td>
                                             <td>{deleteList.role}</td>
                                             <td onClick={()=> deleteUser(deleteList.id)}> <FontAwesomeIcon
                                             style={{
                                                  marginRight: "1rem",
                                                  marginTop: ".4rem"
                                             }}
                                             icon="trash"
                                             size="1x"
                                             color="red"
                                          
                                        /></td>
                                        </tr>
                                   </tbody>
                         </Table>
                         <button
                              className="btn btn-danger"
                              onClick={() => setDeleteList("")}
                     >
                              Clear List
                         </button>
                    </div>
               </div>
          </div>
     )
     };
     export default UserList;