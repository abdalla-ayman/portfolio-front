function Modal({ state }) {
  const { loading, response, error, setError, setResponse } = state;
  return (
    <div className="fixed inset-2/4 -translate-y-1/2 -translate-x-1/2 z-30 modal w-6/12 h-32 flex flex-col justify-center items-center rounded border  ">
      <div>
        {loading ? (
          <div>
            Loading
            <i class="fa-solid fa-gear animate-spin mx-2"></i>
          </div>
        ) : response ? (
          <div>
            {response}

            <i class="fa-regular fa-face-laugh-beam mx-2 text-amber-300"></i>
          </div>
        ) : (
          <div>
            {error}
            <i class="fa-regular fa-face-frown-open mx-2 text-amber-300"></i>
          </div>
        )}
      </div>

      {!loading && (
        <button
          className="px-4 border rounded my-3"
          onClick={() => {
            setError("");
            setResponse("");
          }}
        >
          Ok
        </button>
      )}
    </div>
  );
}

export default Modal;
