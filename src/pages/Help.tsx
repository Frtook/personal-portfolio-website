export default function Help() {
  return (
    <main className="flex flex-col gap-5">
      <p className="text-4xl font-bold text-center">Need help?</p>
      <p className="text-2xl text-center">
        We are here to help you with any question you have
      </p>
      <form className="flex flex-col items-center gap-5">
        <input
          className="p-3 border border-gray-300 rounded-lg w-96"
          type="text"
          placeholder="Your email"
        />
        <textarea
          className="p-3 border border-gray-300 rounded-lg w-96"
          placeholder="Your message"
        ></textarea>
        <button className="p-3 text-white bg-black rounded-lg w-96 hover:bg-black/75">
          Send
        </button>
      </form>
    </main>
  );
}
