import './App.css'
import React, { useState } from 'react'

function App() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState(null)

    const setValue = (key, value) => setForm({
        ...form,
        [key]: value
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        setErrors({
            email: ['Your email is invalid.'],
            password: ['Your password is invalid.']
        })
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="form" action="">
                <h1 className="">Login</h1>
                <label className="inputLabel" htmlFor="email">
                    Email
                </label>
                <input
                    className="inputField"
                    id="email"
                    placeholder="enter your email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={e => setValue('email', e.target.value)}
                />
                {errors && errors.email && <span className='error'>{errors.email}</span>}

                <label className="inputLabel" htmlFor="password">
                    Password
                </label>
                <input
                    className="inputField"
                    id="password"
                    placeholder="enter your password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={e => setValue('password', e.target.value)}
                />
                {errors && errors.password && <span className='error'>{errors.password}</span>}

                <button className="loginButton">Login</button>
            </form>
        </div>
    )
}

export default App
