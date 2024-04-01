import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const UserDetails = () => {
    const [userDetail, setUserDetail] = useState([])
    const [deleteData, setDeleteData] = useState([])
    const { id } = useParams();
    const getData = async () => {
        try {
            const response = await axios.get("https://660acb90ccda4cbc75dbd1b7.mockapi.io/users")
            setUserDetail(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [deleteData])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://660acb90ccda4cbc75dbd1b7.mockapi.io/users/${id}`)
            setDeleteData(prevData => !prevData);
            toast.success("User Deleted Successfully");

        } catch (error) {
            console.log(error)
            toast.error("Failed to delete user");

        }
    }
    return (
        <div>

            <h1 className='mt-2 text-center'>User Details</h1>
            {/* Table to display user details */}
            <table className="table table-success table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Email</th>
                        <th scope="col">place</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetail.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.email}</td>
                            <td>{item.place}</td>
                            {/* Link to edit a user */}
                            <td>
                                <Link to={`/edit/${item.id}`} className='btn btn-warning' onClick={() => handleEdit(item.id)}>Edit</Link>
                            </td>
                            {/* Button to delete a user */}
                            <td>
                                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="row mt-3 p-5">
                <h1> To Create New User:
                    <Link to="/create" className='btn btn-success ms-2'>Create</Link>
                </h1>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserDetails;