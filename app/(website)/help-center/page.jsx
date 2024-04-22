"use client";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Textarea from "@/components/ui/Textarea";
import Textinput from "@/components/ui/Textinput";
import React from "react";

function HelpCenterpage() {
  return (
    <div className="container my-8">
      <Breadcrumbs />
      <div className="xs:w-[80%] md:w-[70%] lg:w-[60%] mx-auto bg-white rounded-lg py-8 md:px-8 px-4">
        <h1 className="text-center text-main text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
          Help Centre
        </h1>
        <form
          className="flex flex-col gap-4 my-4"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <Textinput
            name={"name"}
            //   register={register}
            type={"text"}
            label={"Name"}
            placeholder="Enter your Name"
            //   error={errors.name}
            //   onChange={(e)=> setValue("name", e.target.value)}
          />
          <Textinput
            name={"email"}
            //   register={register}
            type={"text"}
            label={"Email"}
            placeholder="Enter your Email"
            //   error={errors.email}
            //   onChange={(e)=> setValue("email", e.target.value)}
          />
          <Textinput
            name={"phone"}
            //   register={register}
            type={"text"}
            label={"Phone #"}
            placeholder="Enter your Phone #"
            //   error={errors.phone}
            //   onChange={(e)=> setValue("phone", e.target.value)}
          />
          <Textarea
            label={"Message"}
            //   register={register}
            name={"message"}
            placeholder={"Enter your Message Here"}
            //   error={errors.message}
            row={5}
            //   onChange={(e)=> setValue("message", e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary w-max"
            //   disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default HelpCenterpage;
