import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AddUser } from '../redux/action'

const AddContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const contactData = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contactData.find((value) => value.email === email)
        const checkNumber = contactData.find((value) => value.number === number);

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

        dispatch(AddUser(data));
        toast.success('Student added successfully!')
        history.push('/')
    }

    return (
        <div className='container'>
            <div className="row">
                <h1 className='display-4 text-center my-4'>Add Contact</h1>

                <div className="col-md-6 mx-auto shadow p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className='form-control' />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='form-control my-3' />
                            <input onChange={(e) => setNumber(e.target.value)} value={number} type="number" placeholder='Number' className='form-control' />
                            <input type="submit" value='Add Student' className='btn w-100 btn-dark mt-3' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
