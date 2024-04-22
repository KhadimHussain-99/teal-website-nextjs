"use client";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Textarea from "@/components/ui/Textarea";
import Textinput from "@/components/ui/Textinput";
import { Icon } from "@iconify/react";
import React from "react";

function ContactusPage() {
  return (
    <div className="container mt-12 mb-24">
      <Breadcrumbs />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className=" flex flex-col gap-6">
          <a
            href="mailto:hello@gmail.com"
            className="flex items-center gap-2 md:text-lg text-sm bg-white py-4 px-4 rounded-lg transition-all ease-in-out text-main hover:bg-main hover:text-white"
          >
            <Icon icon={"material-symbols:mail-outline"} className="text-2xl" />
            Mail : info@teal.com
          </a>
          <a className="flex items-center gap-2 md:text-lg text-sm bg-white py-4 px-4 rounded-lg transition-all ease-in-out text-main hover:bg-main hover:text-white">
            <Icon icon={"mdi:location"} className="text-2xl" />
            Address : Abu Dahbi, UAE
          </a>
          <a className="flex items-center gap-2 md:text-lg text-sm bg-white py-4 px-4 rounded-lg transition-all ease-in-out text-main hover:bg-main hover:text-white">
            <Icon icon={"mingcute:phone-fill"} className="text-2xl" />
            Phone : +966 333 000 0000
          </a>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465132.9787968857!2d54.22827178154109!3d24.386472416406836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1713610947559!5m2!1sen!2s"
            width="100%"
            className="rounded-lg"
            height="350"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="bg-white rounded-lg py-8 md:px-8 px-4">
          <h5 className="text-main font-semibold ">Contact Us</h5>
          <form
            className="flex flex-col gap-4 my-4"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <Textinput
              name={"name"}
              // register={register}
              type={"text"}
              label={"Name"}
              placeholder="Enter your Name"
              // error={errors.name}
              // onChange={(e) => setValue("name", e.target.value)}
            />
            <Textinput
              name={"email"}
              // register={register}
              type={"text"}
              label={"Email"}
              placeholder="Enter your Email"
              // error={errors.email}
              // onChange={(e) => setValue("email", e.target.value)}
            />
            <Textinput
              name={"phone"}
              // register={register}
              type={"text"}
              label={"Phone #"}
              placeholder="Enter your Phone #"
              // error={errors.phone}
              // onChange={(e) => setValue("phone", e.target.value)}
            />
            <Textarea
              label={"Message"}
              // register={register}
              name={"message"}
              placeholder={"Enter your Message Here"}
              // error={errors.message}
              row={5}
              // onChange={(e) => setValue("message", e.target.value)}
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
    </div>
  );
}

export default ContactusPage;
