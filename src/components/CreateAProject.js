import React from "react";

const CreateAProject = () => {
  return (
    <div>
      <div className=" opacity-90 uppercase text-center mx-auto py-40 w-[40%] grid text-9xl font-lexend font-extrabold place-items-center">
        Get A Quote
      </div>
      <form>
        <input type="text" name="name" />

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default CreateAProject;
