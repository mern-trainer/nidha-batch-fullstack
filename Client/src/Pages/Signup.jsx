import React from 'react'
import { useFormik } from "formik"
import { api } from '../axios'

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: async (values) => {
            try {
                const { data } = await api.post("/users/signup", values)
                console.log(data.token)
                localStorage.setItem("access_token", data.token)
            } catch (err) {
                console.log(err.message)
            }
        }
    })

    return (
        <div className='d-flex justify-content-center mt-4'>
            <form onSubmit={formik.handleSubmit} className='w-50 d-flex flex-column gap-2'>
                <input onChange={formik.handleChange} value={formik.values.name} className='p-2' style={{outline: 0}} type="text" name='name' placeholder='Enter name'/>
                <input onChange={formik.handleChange} value={formik.values.username} className='p-2' style={{outline: 0}} type="text" name='username' placeholder='Enter username'/>
                <input onChange={formik.handleChange} value={formik.values.email} className='p-2' style={{outline: 0}} type="text" name='email' placeholder='Enter email'/>
                <input onChange={formik.handleChange} value={formik.values.password} className='p-2' style={{outline: 0}} type="password" name='password' placeholder='Enter password'/>
                <input onChange={formik.handleChange} value={formik.values.confirm_password} className='p-2' style={{outline: 0}} type="password" name='confirm_password' placeholder='Re-Enter password'/>
                <button className='btn btn-success w-100' type='submit'>Create Account</button>
            </form>
        </div>
    )
}

export default Signup
