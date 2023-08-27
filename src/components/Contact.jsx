import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Handle form submission here

    setLoading(false);
    alert("Thank you. We will get back to you as soon as possible.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden mt-24`}>
      <div className="mx-auto">
        <h3 className="sectionHeadText">Contact Us</h3>
        {/* <p className={styles.serviceSubText}>Get in touch</p> */}

        <div className="flex gap-6 mt-12">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 bg-black-100 p-8 rounded-2xl w-[500px]"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          <div class="contact-info text-white text-2xl leading-10">
            <h2 className="text-orange text-3xl font-bold">
              Establish Connection
            </h2>
            <p>Planet Hop</p>
            <p>Galactic HQ: Crater Copernicus, Moon</p>
            <p>Earth Outpost: 123 Space Avenue, Mars City, Mars</p>
            <p>Interstellar Line: (123) 456-7890</p>
            <p>Hypernet: contact@planethop.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
