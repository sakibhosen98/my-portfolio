import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Lottie from "lottie-react";
import lottieAnimation from "../../../../public/lottie.json";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vcshu67",
        "template_tikqg7t",
        form.current,
        "0U470BXDY0_P44gkx"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <Lottie className="w-7/12" animationData={lottieAnimation}></Lottie>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form ref={form} onSubmit={sendEmail} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                placeholder="Message"
                id=""
                cols="30"
                rows="4"
                className="input input-bordered"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4 text-black"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
