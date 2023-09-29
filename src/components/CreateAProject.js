import React from "react";

const CreateAProject = () => {
  return (
    <div className=" bg-slate-100">
      <div className=" opacity-90 uppercase text-center mx-auto py-40 w-[40%] grid text-9xl font-lexend font-extrabold place-items-center">
        Get A Quote
      </div>
      <form className=" grid grid-cols-2 gap-8 w-[60%] mx-auto font-ubuntu opacity-90 pb-60">
        <h1 className=" text-3xl font-semibold col-span-2">
          {" "}
          First let's get acquainted
        </h1>
        <div className=" flex flex-col w-full gap-2">
          <label className=" text-sm" htmlFor="name">
            {" "}
            Full Name{" "}
          </label>
          <input
            className=" bg-white border-2 py-2 rounded-md"
            type="text"
            name="name"
          />
        </div>

        <div className=" flex flex-col w-full gap-2">
          <label className=" text-sm" htmlFor="email">
            {" "}
            Email{" "}
          </label>
          <input
            className=" bg-white border-2 py-2 rounded-md"
            type="text"
            name="email"
          />
        </div>

        <div className=" flex flex-col w-full gap-2">
          <label className=" text-sm" htmlFor="name">
            Where are you based?
          </label>
          <input
            className=" bg-white border-2 py-2 rounded-md"
            type="text"
            name="name"
          />
        </div>

        <div className=" flex flex-col w-full gap-2">
          <label className=" text-sm" htmlFor="email">
            Do your have an existing website?
          </label>
          <input
            className=" bg-white border-2 py-2 rounded-md"
            type="text"
            name="email"
          />
        </div>

        <div className=" flex flex-col w-full gap-2">
          <label className=" text-sm" htmlFor="name">
            Do you have an ideal timeline?
          </label>
          <input
            className=" bg-white border-2 py-2 rounded-md"
            type="text"
            name="name"
          />
        </div>

        <div className=" flex flex-col w-full gap-2">
          <label className=" text-sm" htmlFor="email">
            What is your approximate budget?
          </label>
          <input
            className=" bg-white border-2 py-2 rounded-md"
            type="text"
            name="email"
          />
        </div>

        <div className=" flex flex-col w-full gap-2 col-span-2">
          <label className=" text-sm" htmlFor="email">
            Please describe the main purpose and primary goals of your project.
          </label>
          <textarea className=" bg-white border-2 py-2 rounded-md" rows={5} />
        </div>

        <button
          className=" rounded-full bg-rose-500 px-6 py-2 w-fit text-white "
          type="submit"
        >
          {" "}
          Send it!
        </button>
      </form>
    </div>
  );
};

export default CreateAProject;
