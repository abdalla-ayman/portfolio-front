import { useState } from "react";
import Modal from "./Modal";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/email", {
      method: "POST",
      // mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setResponse(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(
          "Something Went Wrong Try Again or Email me at abdallaaymanshandi3@gmail.com"
        );
      });
  };
  return (
    <div
      className="min-h-screen flex flex-col justify-center   font-bold	 text-white"
      id="contact"
    >
      <div className="flex items-center my-8" data-aos="zoom-out-right">
        <h1 className="text-l text-lg sm:text-3xl mr-3">Contact me</h1>
        <div className="w-32 sm:w-64 h-px bg-d"></div>
      </div>
      <form
        className="flex flex-col w-full sm:w-11/12 lg:10/12 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-col sm:flex-row sm:justify-between">
          <div
            className="flex flex-col sm:w-6/12 mx-1 my-3 "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <label className="my-2" htmlFor="name">
              Name
            </label>
            <input
              required
              className="rounded  outline-none border-2  px-4 py-1 text-black"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className="flex flex-col sm:w-6/12 mx-1 my-3 "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <label className="my-2" htmlFor="email">
              Email
            </label>
            <input
              required
              className="rounded  outline-none border-2  px-4 py-1 text-black"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div
          className="flex flex-col m-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <label className="my-2" htmlFor="message">
            Message
          </label>
          <textarea
            required
            className="rounded  outline-none border-2  px-4 py-1 text-black 
            h-32 w-full"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="my-3 mx-auto text-lg border w-fit px-3 py-1 rounded"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Send <i className="fa-solid fa-paper-plane text-g"></i>
        </button>
      </form>

      {(loading || response || error) && (
        <Modal state={{ loading, response, error, setError, setResponse }} />
      )}
    </div>
  );
}

export default ContactMe;
