import { useState } from "react";
import FormLayout from "../ui/FormLayout/FormLayout";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <FormLayout>
        <section className="flex flex-col rounded-3xl items-center gap-2 bg-white/20 backdrop-blur-md border border-white/20 text-white px-20 py-10 shadow-sm hover:shadow-md transition-all duration-200 ">
          <div className="mb-2 text-white text-center">
            <h1 className="text-4xl font-bold ">Create New Account</h1>
            <p>Sign up to start using our service!</p>
          </div>
          <div className="inouts-boxes flex flex-col my-3">
            <div className="flex flex-col gap-5 mb-5 w-100">
              <label htmlFor="Username" className="font-bold">
                Username
              </label>
              <input
                type="text"
                placeholder="enter your username"
                id="username"
                autoComplete="off"
                className="bg-white/90 outline-none focus:border-purple-500 focus:shadow-xl/20 shadow-purple-700 border-2 w-full placeholder:text-gray-400 px-5 py-3 rounded-md "
              />
            </div>
            <div className="flex flex-col gap-5 mb-5 w-100">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                id="email"
                autoComplete="off"
                className="bg-white/90 outline-none focus:border-purple-500 focus:shadow-xl/20 shadow-purple-700 border-2 w-full placeholder:text-gray-400 px-5 py-3 rounded-md "
              />
            </div>
            <div className="flex flex-col gap-5 mb-5 w-100">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                placeholder="enter your password"
                id="password"
                autoComplete="off"
                className="bg-white/90 outline-none focus:border-purple-500 focus:shadow-xl/20 shadow-purple-700 border-2 w-full placeholder:text-gray-400 px-5 py-3 rounded-md "
              />
            </div>
            <div className="flex flex-col gap-5 mb-5 w-100">
              <label htmlFor="confPassword" className="font-bold">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="confirm your password"
                autoComplete="off"
                className="bg-white/90 outline-none focus:border-purple-500 focus:shadow-xl/20 shadow-purple-700 border-2 w-full placeholder:text-gray-400 px-5 py-3 rounded-md "
              />
            </div>
          </div>
          <div className="flex items-center  gap-3">
            <input
              type="checkbox"
              id="terms"
              className="w-5 h-5 cursor-pointer"
            />
            <label htmlFor="terms" className="font-bold cursor-pointer">
              I agree to the Terms and Conditions and Privacy Policy
            </label>
          </div>
          <button type="submit">
            <span class="text">Sign Up</span>
            <span>Now!</span>
          </button>
          <p>
            Already have an account?{" "}
            <a href="#" className="font-bold text-purple-700">
              Log in
            </a>
            .
          </p>
        </section>
      </FormLayout>
    </>
  );
};

export default Register;
