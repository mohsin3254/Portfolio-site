import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Section from "../../components/Section";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Something went wrong!");
      return;
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    axios.post("https://formspree.io/f/mayzkzzq", formData, {
      Accept: "application/json",
    });
    setFormData({});
  };

  return (
    <Section id="contact" title="Contact">
      <div className="row justify-content-between">
        <div className="col-md-5 order-last order-lg-first" data-aos="fade-up">
          <div className="subheading mb-3">I'd love to hear from you</div>
          <form>
            <div className="form-group pt-1 pb-2">
              <label htmlFor="username">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="name"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-2 pb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={formData.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pb-4">
              <label htmlFor="userMessage">Message</label>
              <textarea
                className="form-control"
                id="userMessage"
                name="message"
                rows="3"
                placeholder="Enter message"
                value={formData.message || ""}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6 mb-5 mb-lg-0" data-aos="fade-up">
          <div className="subheading mb-3">Reach out to me directly</div>
          <div className="contact-direct">
            <div className="row">
              <div className="col-sm-6">
                <div className="item">
                  <span>
                    <ImLocation />
                  </span>
                  <p>Sharjah, UAE</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="item">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>+971 502287011</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dubai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <style>
              .mapouter
              position:relative;text-align:right;width:600px;height:400px;
              .gmap_canvas
              overflow:hidden;background:none!important;width:600px;height:400px;.gmap_iframe
              width:600px!important;height:400px!important;
            </style>
          </div>
        </div>
      </div>

      <p className="py-3 m-0 mt-5 text-center text-secondary"></p>
    </Section>
  );
};

export default Contact;
