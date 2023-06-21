import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import NavBar from '../components/Navbar'

import style from "../styles/login.module.css"

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  
  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
    <section className=" p-4 bg-danger rounded">
        <div className="row d-flex rounded-lg">
            <div className="d-flex align-items-center">
                <div className="card mx-auto p-4 text-black">
                  <div className="d-flex justify-content-around align-items-center">
                    <h1>Login</h1>
                    <a href="/">
                      <img src="./logo.png" alt="Logo" height={150} width={200} className="hover-zoom"/>
                    </a>
                  </div>
              
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e: any) =>
                      setData({
                        ...data,
                        email: e.target.value,
                      })
                    }
                    value={data.email}
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Label className="py-2">Email address</Form.Label>
                  </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control
                    onChange={(e: any) =>
                      setData({
                        ...data,
                        password: e.target.value,
                      })
                    }
                    value={data.password}
                    required
                    type="password"
                    placeholder="Password"
                  />
                  <Form.Label className="py-2">Password</Form.Label>
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit" className="btn btn-danger">
                    Login
                  </Button> 
                </div>
                <div>
                  <a href="#!" className="small text-muted py-4">Forgot password?</a>
                </div>
              </Form>
              </div>
              </div>
      </div>
      </section>
    {/* <section className="w-100 p-5 bg-danger rounded">
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <div className="card rounded-lg">
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid rounded"/>
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-lg-5 py-0 text-black">
                  <a href="/">
                    <img src="./logo.png" alt="Logo" height={150} width={200} className="hover-zoom"/>
                  </a>
                  <form>

                    <h5 className="fw-normal mx-auto p-4">Sign into your account!</h5>

                    <div className="form-outline mb-2">
                      <input type="email" className="form-control form-control-lg"/>
                      <label className="form-label px-4">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example27" className="form-control form-control-lg"/>
                      <label className="form-label px-4">Password</label>
                    </div>
                    <div className="pt-1 mb-4">
                      <button className="btn btn-danger text-center" type="button">Login</button>
                    </div>
                    <div>
                      <a href="#!" className="small text-muted py-5">Forgot password?</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

</div>
  )
}

export default Login
