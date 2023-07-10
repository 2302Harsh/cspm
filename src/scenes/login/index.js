import {Box, Button, TextField, Typography} from "@mui/material"
import { Formik } from "formik";
import * as yup from "yup";
import React, {useState} from "react";
import axios from 'axios';




const initialValues = {
    email: "",
    password: "",
}

const userSchema = yup.object().shape({
    email: yup
    .string()
    .email("invalid email")
    .required("required"),
    password: yup
    .string()
    .min(6,"Password must be of atleast 6 characters")
    .required("required")
})

const Login = () => {

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', {email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m="20px">
            
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange
                })=>(
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="flex" 
                            justifyContent="center"
                            alignItems="center"
                            alignContent="center"
                            flexDirection="column"
                            gap="30px"
                            bgcolor="#E4E4E4"
                            width="400px"
                            height="60vh"
                            position="absolute"
                            top="50%"
                            left="50%"
                            margin="-145px 0 0 -75px"
                            
                        >
                            
                            <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{ pt:"20px"}}
                            >
                                Login
                            </Typography>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email "
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ width: "325px"}}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="password"
                                label="Password "
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{ width: "325px"}}
                            />

                        
                            <Button type="submit" color="primary" variant="contained" text="white" sx={{mt:"10px", m:"0px"}}>
                                Log In
                            </Button>
                            <Typography sx={{m:"0px", pb:"20px"}}>
                                Don't have an account? <Button href="/signup" sx={{pl:"1px", pt:"0px"}} >sign up </Button>
                                
                            </Typography>

                        </Box>
                        
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Login