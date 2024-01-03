import axios from 'axios';
import React, { useState } from 'react'

function Create() {

    const [values, setValues] = useState({

        sName: '',
        sAge: '',
        sAddress: '',
    })

    const handleSubmit = (e) => {

        console.log(values);
        e.preventDefault();
        axios.post('http://localhost:8081/student/', values)
            .then(res => {
                console.log(res.data); // Log the response data
            })
            .catch(err => {
                console.error(err); // Log any errors
            });

        // axios.post('http://localhost:8081/student', values)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
    }


    return (
        <>
            <div>Create a student</div>
            <div className="container mt-5">
                <h2>Add New Student</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="sName" name="sName" onChange={e => setValues({ ...values, sName: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="text" className="form-control" id="sAge" name="sAge" onChange={e => setValues({ ...values, sAge: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" id="sAddress" name="sAddress" onChange={e => setValues({ ...values, sAddress: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>)
}

export default Create