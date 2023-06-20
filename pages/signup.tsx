import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import NavBar from '../components/Navbar'
import router, { useRouter } from 'next/router'

const Signup = () => {
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('');

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      router.push('/login')
    } catch (err) {
      return setError(err)
    }

    console.log(data)
  }

  return (
    <div>
      <NavBar/>
      <div
        style={{
          width: '40%',
          margin: 'auto',
        }}
      >
        <h1 className="text-center my-4 text-danger">SignUp</h1>
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-4 text-center" controlId="formBasicEmail">
            <Form.Label >Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              className="text-center"
            />
          </Form.Group>

          <Form.Group className="mb-4 text-center" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              className="text-center"
            />
          </Form.Group>
          
          <div className="text-center">
            <Button variant="primary" type="submit" className="text-center btn btn-danger">
              SignUp
            </Button>
          </div> 
        </Form>
      </div>
    </div>
  )
}

export default Signup;

// const Signup = () => {
//   return(
//     <div>
//       <body className="text-center">
    
//     <main className="form-signin">
//       <form>
//         <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
//         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
//         <div className="form-floating">
//           <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
//           <label htmlFor="floatingInput">Email address</label>
//         </div>
//         <div className="form-floating">
//           <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
//           <label htmlFor="floatingPassword">Password</label>
//         </div>
    
//         <div className="checkbox mb-3">
//           <label>
//             <input type="checkbox" value="remember-me"/> Remember me
//           </label>
//         </div>
//         <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//         <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//       </form>
//     </main>
    
    
//     </body>
//     </div>
//   )
// }
// export default Signup;