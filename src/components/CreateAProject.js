import React from "react";
import { Form, useSubmit } from "react-router-dom";

const CreateAProject = () => {
  let submit = useSubmit();

  return (
    <div>
      <div className=" opacity-90 uppercase text-center mx-auto py-40 w-[40%] grid text-9xl font-lexend font-extrabold place-items-center">
        Get A Quote
      </div>
      <Form
        method="post"
        action="/events"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <input type="text" name="name" />

        <button type="submit"> Submit </button>
      </Form>
    </div>
  );
};

export default CreateAProject;
