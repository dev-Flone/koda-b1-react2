import { useEffect, useState } from "react";

const STORAGE_KEY = "contactMessages";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    subject: "",
    message: "",
    gender: "",
  });

  const [messages, setMessages] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      ...form,
      createdAt: new Date().toLocaleDateString("id-ID"),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setForm({
      name: "",
      username: "",
      email: "",
      subject: "",
      message: "",
      gender: "",
    });
  }
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error("Gagal menyimpan pesan: ", error);
    }
  }, [messages]);

  function handleDelete(id) {
    setMessages((prevMessage) =>
      prevMessage.filter((message) => message.id !== id),
    );
  }
  return (
    <section className="py-8 px-2">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Contact Us</h1>
        </div>
        {/* Membuat Form untuk di submit ke localstorage */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold"
            ></label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name here"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div>
            <label htmlFor="username"></label>
            <input
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username here"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div className="flex flex-wrap gap-5">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                name="gender"
                value="Laki-laki"
                checked={form.gender === "Laki-laki"}
                onChange={handleChange}
                required
                className="h-4 w-4 accent-indigo-600"
              />
              Laki-laki
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
              <input
                id="gender"
                name="gender"
                type="radio"
                value={form.gender === "Perempuan"}
                onChange={handleChange}
                required
                className="h-4 w-4 accent-indigo-600"
              />
              Perempuan
            </label>
          </div>
          <div>
            <label htmlFor="subject"></label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 cursor-pointer"
          >
            Send Message
          </button>
        </form>
        {/* Menampilkan isi pesan yang disimpan di localstorage */}
        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Submitted Messages
            </h2>

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              {messages.length} messages
            </span>
          </div>

          {messages.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
              <p className="text-base font-medium text-slate-700">
                No messages yet
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Your submitted messages will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
                >
                  <div className="mb-4 flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {message.subject}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Submitted on {message.createdAt}
                      </p>
                    </div>

                    <span className="w-fit rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      Submitted
                    </span>
                  </div>

                  <div className="grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Name
                      </p>
                      <p className="mt-1 font-medium text-slate-800">
                        {message.name}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Username
                      </p>
                      <p className="mt-1 font-medium text-slate-800">
                        {message.username}
                      </p>
                    </div>

                    <div className="sm:col-span-2">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Email
                      </p>
                      <p className="mt-1 break-all text-slate-800">
                        {message.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Gender
                      </p>
                      <p className="mt-1 font-medium text-slate-800">
                        {message.gender || "Belum diisi"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-lg bg-slate-50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Message
                    </p>
                    <p className="whitespace-pre-wrap wrap-break-word text-sm leading-6 text-slate-700">
                      {message.message}
                    </p>
                  </div>

                  <div className="mt-5 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDelete(message.id)}
                      className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:border-red-300 hover:bg-red-50 active:bg-red-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 6h18M9 6V4h6v2m-9 0 1 14h10l1-14M10 10v6m4-6v6"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
