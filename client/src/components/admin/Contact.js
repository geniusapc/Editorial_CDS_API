import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = props => {
     const [tableData, setTableData] = useState("");

     useEffect(() => {
          const getTableData = async () => {
               try {
                    const res = await axios.get(
                         "/api/contact?limit=1&status=read"
                    );
                    setTableData(res.data);
                    console.log(res);
               } catch (error) {
                    console.log(error.message);
               }
          };

          // getTableData();
     }, []);
     return (
          <Table bordered hover>
               <thead>
                    <tr>
                         <th>Id</th>
                         <th>Name</th>
                         <th>State Code</th>
                         <th>Email</th>
                         <th>phone Number</th>
                         <th>Message</th>
                         <th>Status</th>
                         <th>Time</th>
                         <th>Delete</th>
                    </tr>
               </thead>
               <tbody>
                    <tr>
                         <th scope="row">1</th>
                         <td>{tableData}</td>
                         <td>Otto</td>
                         <td>@mdo</td>
                         <td>Mark</td>
                         <td>Otto</td>
                         <td>@mdo</td>
                         <td>@mdo</td>
                         <td>
                              {" "}
                              <FontAwesomeIcon
                                   style={{
                                        marginRight: "1rem",
                                        marginTop: ".4rem"
                                   }}
                                   icon="trash"
                                   size="1x"
                                   color="#dc3545"
                              />
                         </td>
                    </tr>
               </tbody>
          </Table>
     );
};

export default Contact;