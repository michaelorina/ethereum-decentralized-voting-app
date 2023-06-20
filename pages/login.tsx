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
      <NavBar/>
      <div style={{
        width: '40%',
        margin: 'auto',
      }}>
        <h1 className="text-center my-4 text-danger">Login</h1>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-4 text-center" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
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
              className="bg-danger-subtle text-center text-primary"
            />
            </Form.Group>

          <Form.Group className="mb-4 text-center" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
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
              className="bg-danger-subtle text-center text-primary"
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" className="btn btn-danger">
              Login
            </Button> 
          </div>
        </Form>
      </div>
      {/* <section className={style.section}>
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <div className={style.card}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className={style.img_fluid}/>
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">

                  <form>

                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className={style.i}></i>
                      <span className="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example17" className="form-control form-control-lg"/>
                      <label class="form-label" for="form2Example17" style="margin-left: 0px;">Email address</label>
                    <div className="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 88.8px;"></div><div class="form-notch-trailing"></div></div></div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form2Example27" className="form-control form-control-lg"/>
                      <label class="form-label" for="form2Example27" className={style.l1}>Password</label>
                    <div className="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 64px;"></div><div class="form-notch-trailing"></div></div></div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                    </div>

                    <a className="small text-muted" href="#!">Forgot password?</a>
                    <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!" style="color: #393f81;">Register here</a></p>
                    <a href="#!" className="small text-muted">Terms of use.</a>
                    <a href="#!" className="small text-muted">Privacy policy</a>
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
