import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const FormValidationTouch = () => {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        services: "",
        message: "",
      };
      const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Email is invalid").required("Email is required"),
        phone: Yup.string().min(5,"enter 5 num").matches(/^[0-9]*$/,"Only allow numbers").required("Password is required"),
        services: Yup.string().required("Select services"),
        message: Yup.string().required("Message is required"),
      });
    
      async function OnSubmit(values) {
        console.log(values);
      }
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={OnSubmit}
  >
    {({ errors, touched, isSubmitting }) => (
      <>
        <div className="inn-banner">
          <img src="images/cont-banner.jpg" alt="" />
          <div className="desc">
            <div className="container">
              <div className="text-block">
                <h1>Get IN Touch</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <div className="container">
            <div className="inn-wrap">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="title">
                    <h2>CONTACT NOW</h2>
                    <h3>Have Question? Write A Message</h3>
                    <p>
                      We will catch you as early as we receive the message
                    </p>
                  </div>
                  <div className="form-wrap">
                    <Form>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="block">
                            {/* <input type="text" placeholder="Your Name" className="form-control" /> */}
                            <Field
                              type="text"
                              className={
                                "form-control" +
                                (errors.name && touched.name
                                  ? " is-invalid"
                                  : "")
                              }
                              name="name"
                              placeholder="Your name"
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="block">
                            {/* <input
                              type="text"
                              placeholder="Your Email"
                              className="form-control"
                            /> */}
                            <Field
                              type="text"
                              className={
                                "form-control" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                              name="email"
                              placeholder="Your Email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="block">
                            {/* <input
                              type="text"
                              placeholder="Phone No"
                              className="form-control"
                            /> */}
                            <Field
                              type="text"
                              className={
                                "form-control" +
                                (errors.phone && touched.phone
                                  ? " is-invalid"
                                  : "")
                              }
                              name="phone"
                              placeholder="Phone no"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="block">
                            {/* <select className="form-control">
                              <option value>Select Services</option>
                              <option value>Graphic Design</option> as="select"
                              <option value>Web Design</option>
                              <option value>App Design</option>
                              <option value>Web Devolopment</option>
                              <option value>Other</option>
                            </select> */}
                            <Field
                              as="select"
                              className={
                                "form-control" +
                                (errors.services && touched.services
                                  ? " is-invalid"
                                  : "")
                              }
                              name="services"
                            >
                              <option value="">Select Services</option>
                              <option value="1">Graphic Design</option>
                              <option value="2">Web Design</option>
                              <option value="3">App Design</option>
                              <option value="4">Web Devolopment</option>
                              <option value="5">Other</option>
                            </Field>
                            <ErrorMessage
                              name="services"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="block">
                            {/* <textarea
                              placeholder="Write here your message"
                              className="form-control"
                              defaultValue={""}
                            /> */}

                            <Field
                              type="text"
                              // rows={20}
                              as="textarea"
                              className={
                                "form-control" +
                                (errors.message && touched.message
                                  ? " is-invalid"
                                  : "")
                              }
                              name="message"
                              placeholder="Write here your message"
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          {/* <input
                            className="send_btn"
                            type="submit"
                            defaultValue="Send Message"
                          /> */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="send_btn"
                          >
                            {isSubmitting && (
                              <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            Send Message
                          </button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="information">
                    <h2>Contact Information</h2>
                    <div className="block">
                      <div className="icon-block">
                        <img src="images/cont-icn1.png" alt="" />
                      </div>
                      <div className="text-block">
                        <h3>Phone:</h3>
                        <a href="tel:+91 896 7345 534">+91 896 7345 534</a>
                      </div>
                    </div>
                    <p>
                      Assistance hours:{" "}
                      <span>Monday – Friday, 9 am to 5 pm</span>
                    </p>
                    <div className="block">
                      <div className="icon-block">
                        <img src="images/cont-icn2.png" alt="" />
                      </div>
                      <div className="text-block">
                        <h3>Email:</h3>
                        <a href="mailto:info@ewayscraper.com">
                          info@ewayscraper.com
                        </a>
                      </div>
                    </div>
                    <p>
                      Our support team will get back to in 24-h during
                      standard business hours.
                    </p>
                    <div className="block">
                      <div className="icon-block">
                        <img src="images/cont-icn3.png" alt="" />
                      </div>
                      <div className="text-block">
                        <h3>Skype:</h3>
                        <a href="skype:abhijit.codes">abhijit.codes</a>
                      </div>
                    </div>
                    <p>
                      We Are Online: Monday – Friday, 10:30 am to 7:30 pm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="technolgy">
          <div className="container">
            <h2>
              <span>Technologies</span> we use
            </h2>
            <div id="technologies-slide">
              <div className="item">
                <figure className="img-block">
                  <a href="#">
                    <img src="images/technologies-icon1.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure className="img-block">
                  <a href="#">
                    <img src="images/technologies-icon2.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure className="img-block">
                  <a href="#">
                    <img src="images/technologies-icon3.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure className="img-block">
                  <a href="#">
                    <img src="images/technologies-icon4.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure className="img-block">
                  <a href="#">
                    <img src="images/technologies-icon5.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure className="img-block">
                  <a href="#">
                    <img src="images/technologies-icon6.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="item">
                <figure className="img-block">
                  <a href="#">
                    <img src="images/technologies-icon7.png" alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </Formik>
  )
}

export default FormValidationTouch