import {Box , Button,TextField, Typography } from "@mui/material";
import { Formik, Form } from  "formik";
import * as yup from "yup";


import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;


const Signup = () =>{

    const validate = yup.object({
        firstName: yup.string()
            .required('Required'),
        lastName: yup.string()
            .required('Required'),
        email: yup.string()
            .email('email is invalid')
            .required('Required'),
        contact: yup.string()
            .required('Required')
            .matches(phoneRegExp,'contact is invalid')
            .required('Required'),
        password: yup.string()
            .min(6,'Password must be atleast 6 charaters')
            .required('Required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'),null], 'Password must match')
            .required('Required'),
    })


    return(
        <Formik
        
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            password: '',
            confirmPassword: ''
        }}

        
        validationSchema={validate}
        onSubmit={data=>{
            console.log(data)

            let formData = new FormData();
            formData.append('firstName',data.firstName)
            formData.append('lastName',data.lastName)
            formData.append('email',data.email)
            formData.append('contact',data.contact)
            formData.append('password',data.password)

            axios({
                method: 'post',
                url: 'http://127.0.0.1:5001/api/form',
                // data: formData,
            })
            .then(function(res){
                console.log(res);
                alert('New user added Successfully');
            })
            .catch(error => {
                if(!error.response){
                    this.errorStatus = 'Error: Network Error';
                }else{
                    this.errorStatus = error.response.data.message;
                }
            })
        }}
        >

        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            
        })=>(       
                <Form >
                    <Box
                    display="flex" 
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    flexDirection="column"
                    gap="30px"
                    bgcolor="#E4E4E4"
                    width="400px"
                    height="100vh"
                    position="absolute"
                    top="50%"
                    left="50%"
                    margin="-145px 0 0 -75px"
                    
                    >
                        <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ pt:"20px"}}
                        >Sign Up</Typography>
                    <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ width: "325px"}}
                    />
                    <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ width: "325px"}}
                    />
                    <TextField
                                fullWidth
                                variant="filled"
                                type="email"
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
                                type="text"
                                label="Contact "
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
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
                    <TextField
                                fullWidth
                                variant="filled"
                                type="password"
                                label="Confirm Password "
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.confirmPassword}
                                name="confirmPassword"
                                error={!!touched.confirmPassword && !!errors.confirmPassword}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                                sx={{ width: "325px"}}
                            />
                    <Button type="submit" color="primary" variant="contained" text="white" sx={{mt:"10px", m:"0px"}}>Register</Button>
                    </Box>

                </Form>
            
        )}
        </Formik>
    )
}

export default Signup 