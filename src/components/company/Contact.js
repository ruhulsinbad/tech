import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <div>
      <div className=" bg-white min-h-screen px-32 grid lg:grid-cols-2 gap-8">
        <div className="  flex flex-col  justify-center gap-8 ">
          {/* <div className="uppercase max-w-[500px] text-8xl font-saira font-extrabold px-6 py-6 rounded-3xl">
          <span className=" opacity-80   text-white"> Work </span> with us
        </div> */}

          <div className=" text-cyan-600">
            <h1 className=" text-6xl font-viga font-extrabold "> Contact Us</h1>
            <p className=" font-saira text-2xl mt-4">
              We'd love to hear from you
            </p>
          </div>

          <div className=" text-cyan-600 opacity-90 flex flex-col gap-6 p-16 border-2 border-cyan-600">
            <div className=" ">
              <div className=" font-lexend text-xl mb-2">
                Email us for projects big and small
              </div>
              <a
                className=" font-ubuntu text-4xl font-semibold"
                href="contact@techsinu.com"
              >
                contact@techsinu.com
              </a>
            </div>
            <div>
              <div className=" font-lexend text-xl mb-2">
                Call us for quick phone support
              </div>
              <a
                className=" font-ubuntu text-4xl font-semibold"
                href="contact@techsinu.com"
              >
                +8801729888667
              </a>
            </div>
            <div className=" ">
              <div className=" font-lexend text-xl mb-2">
                Or start a new project
              </div>
              <a
                className=" font-ubuntu text-4xl font-semibold"
                href="contact@techsinu.com"
              >
                Fill out our quote form
              </a>
            </div>
          </div>
        </div>
        <div className=" h-full flex justify-center items-center">
          <form className=" bg-gray-200 rounded-xl p-16">
            <h1 className=" text-3xl font-semibold mb-4">
              Fill out the form below
            </h1>
            <label className=" text-xs font-lexend" for="name">
              Your Name
            </label>
            <br />
            <input
              className=" bg-white w-full p-2 shadow-lg rounded-sm my-2"
              type="text"
              id="name"
              placeholder=" What can we call you?"
            />
            <label className=" text-xs font-lexend" for="name">
              Phone Number
            </label>
            <br />
            <input
              className=" bg-white w-full p-2 shadow-lg rounded-sm my-2"
              type="text"
              id="name"
              placeholder=" So we can have a quick chat"
            />
            <label className=" text-xs font-lexend" for="name">
              Email Address
            </label>
            <br />
            <input
              className=" bg-white w-full p-2 shadow-lg rounded-sm my-2"
              type="text"
              id="name"
              placeholder=" It's better than fax"
            />
            <label className=" text-xs font-lexend" for="name">
              Message
            </label>
            <br />
            <textarea
              className=" bg-white w-full p-2 shadow-lg rounded-sm my-2"
              rows={4}
              id="name"
              placeholder=" Ok! let's do this."
            />

            <p className=" my-4 opacity-80">
              This site is protected by reCAPTCHA and Google privacy policy and
              Terms of Service applied
            </p>
            <button
              className=" px-4 py-2 font-ubuntu font-medium rounded-full bg-blue-500 text-white"
              type="submit"
            >
              Send it!
            </button>
          </form>
        </div>
      </div>
      <div className=" px-32 py-20 ]  grid grid-cols-4 divide-x-2  ">
        <div>
          <p className=" text-4xl font-lexend font-semibold text-cyan-600">
            Our Location
          </p>
          <p className=" text-md text-justify font-lexend mt-8 pr-4">
            We are operating our business whole earth but we have some specific
            location where our clients can meet us.
          </p>
        </div>
        <div className=" col-span-3 divide-x-2 grid grid-cols-3">
          <div className=" flex flex-col px-8">
            <p className=" font-ubuntu text-2xl"> Italy </p>
            <div className=" mt-4 flex flex-col gap-1">
              <address> Via Nunzio Morello, 3 - Palermo </address>
              <address> 50121, Florence </address>
              <p className=" flex gap-3">
                {" "}
                <PhoneIcon /> +39 123 123 23
              </p>
              <a className=" flex gap-3" href="mailto:contact@techsinu.com">
                {" "}
                <EmailIcon />
                contact@techsinu.com
              </a>
              <button className=" mt-4 w-fit font-saira text-md text-white bg-cyan-600 px-4 py-2 rounded-full">
                <PlaceIcon />
                See Direction{" "}
              </button>
            </div>
          </div>

          <div className=" flex flex-col px-8">
            <p className=" font-ubuntu text-2xl"> Italy </p>
            <div className=" mt-4 flex flex-col gap-1">
              {" "}
              <address> Via Nunzio Morello, 3 - Palermo </address>
              <address> 50121, Florence </address>
              <p className=" flex gap-3">
                {" "}
                <PhoneIcon /> +39 123 123 23
              </p>
              <a className=" flex gap-3" href="mailto:contact@techsinu.com">
                {" "}
                <EmailIcon />
                contact@techsinu.com
              </a>
              <button className=" mt-4 w-fit font-saira text-md text-white bg-cyan-600 px-4 py-2 rounded-full">
                <PlaceIcon />
                See Direction{" "}
              </button>
            </div>
          </div>

          <div className=" flex flex-col px-8">
            <p className=" font-ubuntu text-2xl"> Italy </p>
            <div className=" mt-4 flex flex-col gap-1">
              {" "}
              <address> Via Nunzio Morello, 3 - Palermo </address>
              <address> 50121, Florence </address>
              <p className=" flex gap-3">
                {" "}
                <PhoneIcon /> +39 123 123 23
              </p>
              <a className=" flex gap-3" href="mailto:contact@techsinu.com">
                {" "}
                <EmailIcon />
                contact@techsinu.com
              </a>
              <button className=" mt-4 w-fit font-saira text-md text-white bg-cyan-600 px-4 py-2 rounded-full">
                <PlaceIcon />
                See Direction{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
