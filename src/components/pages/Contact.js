import React from "react";
import { Formik, Field, Form } from "formik";


const Contact = () =>{
    return(
        <div>
            <h1>Contact Us</h1>
            <Formik
                initialValues={{ fullname: "", email: "", phone: "" }}
                onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                <Field name="fullname"  placeholder="Full Name" type="text" />
                <Field name="email"  placeholder="email"  type="email" />
                <Field name="phone" placeholder="Phone no" type="number" />
                <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Contact;