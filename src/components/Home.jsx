import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { deleteUser, loadUsers } from '../redux/action';

const Home = () => {
    const dispatch = useDispatch();
    const contactData = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(loadUsers())
    })

    const deleteContact = (id) => {
        dispatch(deleteUser(id));
        toast.success('Contact deleted successfully!')
    }

    return (
        <div className="home">
            <div className='container'>
                <div className="row">
                    <div className="my-5 col-12 d-flex justify-content-end">
                        <Link to='/add' className='btn btn-outline-dark'>Add Contact</Link>
                    </div>

                    <div className="col-md-10 col-12 mx-auto">
                        <table className='table table-hover text-center'>
                            <thead className='text-white bg-dark'>
                                <tr>
                                    <th scope='col'>№</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Number</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contactData && contactData.map(({ id, email, name, number }, index) => {
                                        return (
                                            <tr key={id}>
                                                <td>{index + 1}</td>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{number}</td>
                                                <td>
                                                    <Link to={`/edit/${id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                                    <button onClick={() => deleteContact(id)} type='button' className='btn btn-sm btn-danger ms-3'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
