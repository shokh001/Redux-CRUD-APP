import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getSingleUser, updateUser } from '../redux/action'

const EditContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const { id } = useParams()
    const contactData = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const history = useHistory();

    const currentContact = contactData.find(value => value.id === parseFloat(id))

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contactData.find((value) => value.id !== parseFloat(id) && value.email === email)
        const checkNumber = contactData.find((value) => value.id !== parseFloat(id) && value.number === number)

        if (!name || !email || !number) {
            return toast.warning('Please fill in all inputs!')
        }
        if (checkEmail) {
            return toast.error('This email already exists!')
        }
        if (checkNumber) {
            return toast.error('This number already exists!')
        }

        const data = {
            name,
            email,
            number
        }

        dispatch(updateUser(data, id));
        toast.success('Student added successfully!')
        history.push('/')
    }

    useEffect(() => {
        dispatch(getSingleUser(id))
    })

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact])

    return (
        <div className='container'>
            <div className="row">
                <h1 className='display-4 text-center my-4'>Edit Contact</h1>

                <div className="col-md-6 mx-auto shadow p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder='Name'
                                className='form-control'
                            />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder='Email'
                                className='form-control my-3' 
                                />
                            <input
                                onChange={(e) => setNumber(e.target.value)}
                                value={number}
                                type="number"
                                placeholder='Number'
                                className='form-control'
                            />
                            <div className="input-group mt-3">
                                <input
                                    type="submit"
                                    value='Update Student'
                                    className='btn btn-success ms-auto'
                                />
                                <Link to='/' className='btn btn-danger ms-3'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditContact
