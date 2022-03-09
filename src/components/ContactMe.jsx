function ContactMe() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center   font-bold	 text-white"
      id="contact"
    >
      <div className="flex items-center my-8">
        <h1 className="text-l text-2xl mr-3">Contact me</h1>
        <div className="w-64 h-px bg-d"></div>
      </div>
      <form className="flex flex-col w-10/12 mx-auto">
        <div className="flex w-full">
          <div className="flex flex-col w-6/12 m-3">
            <label className="my-2" htmlFor="name">
              Name
            </label>
            <input
              className="rounded  outline-none border-2  px-4 py-1 text-black"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col w-6/12 m-3">
            <label className="my-2" htmlFor="email">
              Email
            </label>
            <input
              className="rounded  outline-none border-2  px-4 py-1 text-black"
              type="email"
              id="email"
            />
          </div>
        </div>

        <div className="flex flex-col m-3">
          <label className="my-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="rounded  outline-none border-2  px-4 py-1 text-black"
            id="message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="my-3 mx-auto text-lg border w-fit px-3 py-1 rounded"
        >
          Send <i class="fa-solid fa-paper-plane text-g"></i>
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
