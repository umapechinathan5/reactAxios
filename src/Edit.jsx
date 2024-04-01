import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const [editData, setEditData] = useState({
        name: '',
        description: '',
        email: '',
        place: ''
    });

    const getData = async () => {
        try {
            const response = await axios.get(`https://660acb90ccda4cbc75dbd1b7.mockapi.io/users/${id}` , editData);
            // Set the fetched data to the state
            setEditData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getData()
    },[id])

    const handleChange = (e) => {
        const { name, value } = e.target;

    setEditData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};


const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
    await axios.put(`https://660acb90ccda4cbc75dbd1b7.mockapi.io/users/${id}`, editData)
    toast.success("Data Updated Successfully");
    navigate('/');
    
    }catch(error){
        console.log(error);
        toast.error("Failed to update data");

    }
}

    return (
        <div className="form-container">
            <div className="form-box-container pe-5">
                <h2>Edit Data:</h2>
                <form onSubmit={handleFormSubmit} className="fw-bolder">
                    <div className="my-3">
                        <label className="form-label"> Name<span className="text-danger">*</span>
                            <input className="form-control Inputs" type="text" name="name" value={editData.name} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label >Description<span className="text-danger">*</span>
                            <input className="form-control Inputs" type="text" name="description" value={editData.description} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label>Email<span className="text-danger">*</span>
                            <input className="form-control Inputs" type="email" name="email" value={editData.email} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label>place<span className="text-danger">*</span>
                            <input className="form-control Inputs" type="text" name="place" value={editData.place} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className="d-flex justify-content-center" id="btn-div">
                        <button type="submit" className="btn btn-primary" style={{ fontSize: "large" }}>Update</button>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Edit;