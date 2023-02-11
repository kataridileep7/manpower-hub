import React, { useState } from "react";
import axios from "axios";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const Register = () => {
  const registerSchema = yup.object().shape({
    fname: yup
      .string()
      .min(2, "Mininum 2 characters")
      .max(30, "Maximum 30 characters")
      .required(),
    lname: yup.string(),
    uname: yup
      .string()
      .min(3, "Mininum 3 characters")
      .max(15, "Maximum 15 characters")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "This field cannot contain white space and special character"
      )
      .required(),
    skills: yup.string().required(),
    phonenumber:yup.string().required(),
    passwd: yup
      .string()
      .min(4, "Mininum 4 characters")
      .max(10, "Maximum 10 characters")
      .required(),
    cpasswd: yup
      .string()
      .min(4, "Mininum 4 characters")
      .max(10, "Maximum 10 characters")
      .required(),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    if (values.passwd !== values.cpasswd) {
      setErrors({
        passwd: "Password and Confirm Password doesn't match",
        cpasswd: "Password and Confirm Password doesn't match",
      });
    } else {
      await axios
        .post("/register", values)
        .then((response) => {
          setSubmitting(false);
          alert("Login with the username?");
          window.location.href = "/";
        })
        .catch((error) => {
          setErrors({
            uname: "Username already exists try different username",
          });
        });
    }
  };

  return (
    <>
      <Formik
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
        initialValues={{
          fname: "",
          lname: "",
          uname: "",
          skills: "",
          passwd: "",
          cpasswd: "",
          phonenumber:"",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="fname"
                value={values.fname}
                onChange={handleChange}
                isValid={touched.fname && !errors.fname}
                isInvalid={!!errors.fname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fname}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lname"
                value={values.lname}
                onChange={handleChange}
                isValid={touched.lname && !errors.lname}
                isInvalid={!!errors.lname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lname}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  name="uname"
                  value={values.uname}
                  onChange={handleChange}
                  isValid={touched.uname && !errors.uname}
                  isInvalid={!!errors.uname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.uname}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                placeholder="Skills"
                name="skills"
                value={values.skills}
                onChange={handleChange}
                isValid={touched.skills && !errors.skills}
                isInvalid={!!errors.skills}
              />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>PhoneNumber</Form.Label>
              <Form.Control
                type="text"
                placeholder="PhoneNumber"
                name="phonenumber"
                value={values.phoneNumber}
                onChange={handleChange}
                isValid={touched.phonenumber && !errors.phonenumber}
                isInvalid={!!errors.phonenumber}
              />
              
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>

              <Form.Control.Feedback type="invalid">
                {errors.skills}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="passwd"
                value={values.passwd}
                onChange={handleChange}
                isValid={touched.passwd && !errors.passwd}
                isInvalid={!!errors.passwd}
              />

              <Form.Control.Feedback type="invalid">
                {errors.passwd}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="cpasswd"
                value={values.cpasswd}
                onChange={handleChange}
                isValid={touched.cpasswd && !errors.cpasswd}
                isInvalid={!!errors.cpasswd}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cpasswd}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Button
                style={{ width: `100%` }}
                type="submit"
                variant="outline-primary"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
