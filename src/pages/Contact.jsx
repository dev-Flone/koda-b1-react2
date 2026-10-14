import { useEffect, useState } from "react";

const STORAGE_KEY = "contactMessages";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(STORAGE_KEY);

      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages);

        if (!Array.isArray(parsedMessages)) {
          console.error("Format data pesan tidak valid");
        }
      }
    } catch {
      console.error("Gagal membaca pesan");
    }
  }, []);

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

    const updatedMessages = [...messages, newMessage];

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages));
      setMessages(updatedMessages);

      setForm({
        name: "",
        username: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Gagal menyimpan pesan: ", error);
      alert("Pesan gagal disimpan ke localstorage");
    }
  }
  return (
    <section className="py-8 px-2">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Contact Us</h1>
        </div>
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
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
