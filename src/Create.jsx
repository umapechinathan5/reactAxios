import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Create = () => {

    const navigate = useNavigate()

    const [createData, setCreateData] = useState({
        name: "",
        description: "",
        email: "",
        place: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateData((preData) => ({
            ...preData,
            [name]: value
        }))
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Preventing default form submission behavior
        try {
            axios.post("https://660acb90ccda4cbc75dbd1b7.mockapi.io/users", createData)
            toast.success("New User Data Created Successfully");
           navigate('/');
        } catch (error) {
            console.log(error);
            toast.error("Failed to create data");
        }
    }

    return (
        <div className=" d-flex flex-column align-items-center">
         
                <h2>Create Data</h2>
                <form onSubmit={handleFormSubmit} className="fw-bolder">
                    <div className="my-3">
                        <label className="form-label"> Name<span className="text-danger">*</span>
                            <input className="form-control Inputs" type="text" name="name" value={createData.name} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label >Description<span className="text-danger">*</span>
                            <input className="form-control Inputs" type="text" name="description" value={createData.description} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label>Email<span className="text-danger">*</span>
                            <input className="form-control Inputs" type="email" name="email" value={createData.email} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label>place<span className="text-danger">*</span>
                            <input className="form-control Inputs" type="text" name="place" value={createData.place} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="d-flex justify-content-center" id="btn-div">
                        <button type="submit" className="btn btn-primary" style={{ fontSize: "large" }}>Update</button>
                    </div>
                </form>
           
            <ToastContainer />
        </div>
    );
};

export default Create;