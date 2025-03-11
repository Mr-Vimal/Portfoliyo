import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7bf73c3-d92a-4c78-a092-95f2f0136d85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="pt-16 pb-10 pl-7 pr-7 sm:pt-16 lg:pb-16 md:h-[92vh] items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-[#223]/30 rounded-3xl items-center justify-center">
        <div className="mb-2">
          <div className="mb-2 max-w-3xl text-center sm:text-center md:mx-auto">
            <h2 className="font-heading mb-4 font-bold tracking-tight gray-primary-color text-3xl sm:text-5xl">
              Let's Connect
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              and start working on amazing things
            </p>
          </div>
        </div>

        <div className="items-center justify-center">
          <div
            className="max-w-full p-5 md:p-12 items-center justify-center"
            id="form"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-300 text-center">
              Ready to Get Started?
            </h2>
            <form
              method="post"
              onSubmit={onSubmit}
              className="flex flex-col items-center justify-center"
            >
              <div className="mb-6 flex flex-col items-center justify-center w-full">
                <div className="mx-0 mb-4 sm:mb-4 w-full flex justify-center">
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your Name"
                    className="rounded h-8 px-2 py-5 w-80 mt-8 md:w-3/4 "
                  />
                </div>
                <div className="mx-0 mb-4 sm:mb-4 w-full flex justify-center">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your Email Address"
                    className="rounded w-80 h-8 px-2 py-5 md:w-3/4 mt-3"
                  />
                </div>
              </div>
              <div className="mx-0 mb-4 sm:mb-4 w-full flex justify-center">
                <textarea
                  id="textarea"
                  placeholder="Your Text"
                  cols="30"
                  rows="5"
                  className="rounded-lg w-80 px-2 py-2 md:w-3/4"
                ></textarea>
              </div>
              <div className="text-center w-full">
                <button
                  type="submit"
                  className="w-3/4 mt-3 bg-primary-color text-white px-6 py-3 font-xl rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
