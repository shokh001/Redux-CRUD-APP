import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import AddContact from '../components/AddContact'
import EditContact from '../components/EditContact'

const Root = () => {
    return (
        <div className='root'>
            <ToastContainer />
            <Switch>
                <Navbar />
            </Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={AddContact} />
            <Route path='/edit/:id' component={EditContact} />
        </div>
    )
}

export default Root
