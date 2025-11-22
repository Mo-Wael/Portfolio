import { useState } from "react";
import type { IContact } from "@/interface/IContact";
import Alert from "./Alert";
import emailjs from '@emailjs/browser';
// import process from "process";

const ContactForm = () => {
  const [formData, setFormData] = useState<IContact>({
    name: "",
    email: "",
    message: "",
  });

  const service : string = import.meta.env.VITE_SERVICE_ID;
  const template : string = import.meta.env.VITE_TEMPLATE_ID;
  const option : string = import.meta.env.VITE_OPTIONS;

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertText, setAlertText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = ({ type, text }: { type: string; text: string }) => {
    setAlertType(type);
    setAlertText(text);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        service,
        template,
        {
          from_name: formData.name,
          to_name: "Mohamed",
          from_email: formData.email,
          to_email: "mohamed.wael.dev@gmail.com",
          message: formData.message,
        },
        option
      );

      setIsLoading(false);

      showAlertMessage({
        type: "success",
        text: "Your message has been sent!",
      });

      setFormData({ name: "", email: "", message: "" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsLoading(false);
      showAlertMessage({
        type: "danger",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <>
      <div className="w-full max-w-[380px] rounded-xl border border-gray-700 bg-black/40 backdrop-blur-md p-6 shadow-xl">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Let's Talk</h2>
          <p className="text-sm text-gray-400 mt-1">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              placeholder="Mohamed..."
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-black/60 border border-gray-600 focus:border-purple-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="m...@gmail.com"
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-black/60 border border-gray-600 focus:border-purple-400 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-3 py-2 rounded-md bg-black/60 border border-gray-600 focus:border-purple-400 focus:outline-none min-h-[120px]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-900 hover:bg-purple-800 transition-colors text-white py-2 rounded-md cursor-pointer">
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
        
      </div>

      {showAlert && <Alert type={alertType} text={alertText} />}
    </>
  );
};

export default ContactForm;
