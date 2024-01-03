import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; // Import a CSS file for custom styles
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="page-container">
            <div className="container d-flex justify-content-center">
                <div className="col-md-8">
                    <h2>Studnmet List</h2>
                    <div>
                        <Link to="/create" className="btn btn-success">Create +</Link>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.sId}</td>
                                    <td>{student.sName}</td>
                                    <td>{student.sAge}</td>
                                    <td>{student.sAddress}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
