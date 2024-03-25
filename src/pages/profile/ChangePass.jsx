import React, { useState, useEffect } from "react";

import MainHeader from "../../component/ProfileHead";
import Card from "../../component/CardProfile";

// import { useSelector } from "react-redux";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import Input from "../../component/Input";
import Button from "../../component/Button";

export default function ChangePass() {
  const [user, setUser] = useState(true);
  const [form, setForm] = useState({});

  //   const user = useSelector((state) => state.user.data);

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);
  return (
    <div className="">
      <Header />
      <section className=" bg-primary bg-opacity-20 p-12 flex gap-8">
        <Sidebar />

        <main className="bg-white w-full rounded-3xl shadow-lg px-7 pt-7 pb-20">
          <MainHeader
            title={"Change Password"}
            content={
              "You must enter your current password and then type your new password twice."
            }
          />

          <form
            action=""
            className="w-full sm:w-[431px] mx-auto text-center space-y-8 mt-24"
            // onSubmit={handleSubmit}
          >
            <div className="grid gap-y-10">
              <Input
                id={"oldPassword"}
                name="oldPassword"
                type={"Password"}
                placeholder={"Current Password"}
                icon={"codicon:lock"}
                icon2={"mage:eye-off"}
                onChange={handleOnChange}
              />
              <Input
                id={"newPassword"}
                name="newPassword"
                type={"Password"}
                placeholder={"New Password"}
                icon={"codicon:lock"}
                icon2={"mage:eye-off"}
                onChange={handleOnChange}
              />
              <Input
                id={"confirmPassword"}
                name="confirmPassword"
                type={"Password"}
                placeholder={"Repeat New Password"}
                icon={"codicon:lock"}
                icon2={"mage:eye-off"}
                onChange={handleOnChange}
              />
            </div>

            <Button
              content={"Change Password"}
              disable={Object.keys(form).length > 2 ? false : true}
            />
          </form>
        </main>
      </section>
    </div>
  );
}
