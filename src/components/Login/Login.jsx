import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

import FormLayout from "../ui/FormLayout/FormLayout";
import FormHeader from "../ui/FormHeader";
import FormButtons from "../ui/FormButtons";
import InputsLayout from "../ui/InputsLayout";
import FormContainer from "../ui/FormContainer";
import FormCheckBox from "../ui/FormCheckBox";
import Message from "../ui/Message/Message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const inputsContent = [
    { label: "Email", placeholder: "email@gmail.com", type: "email" },
    { label: "Password", placeholder: "enter your password", type: "password" },
  ];

  const handleInputChange = (e, item) => {
    switch (item.label) {
      case "Email":
        setEmail(e.target.value);
        break;
      case "Password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const checkValues = (item) => {
    switch (item.label) {
      case "Email":
        return email;
      case "Password":
        return password;
      default:
        return "";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("You logged in successfully 🎉");
      setTimeout(() => {
        navigate("/welcome", {
          state: { message: "You logged in successfully 🎉" },
        });
      }, 1500);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <FormLayout onsubmit={handleLogin}>
      <FormContainer>
        <FormHeader
          headline="Log In to Your Account"
          subtitle="Welcome back! Please enter your credentials"
        />

         {/* SUCCESS MESSAGE */}
        {success && <Message type="success" text={success} />}

        {/* ERROR MESSAGE */}
        {error && <Message type="error" text={error} />}

        <div className="inputs-boxes flex flex-col my-3">
          {inputsContent.map((item, i) => (
            <InputsLayout
              key={i}
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
              onchange={(e) => handleInputChange(e, item)}
              value={checkValues(item)}
            />
          ))}
        </div>

        <div className="flex items-center justify-between w-full">
          <a href="#" className="text-sm text-purple-700">
            Forgot Password?
          </a>
          <FormCheckBox label="remember" type="checkbox" text="Remember Me" />
        </div>

        <FormButtons text="Log In" />

        <p>
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-bold text-purple-700">
            Sign up now
          </Link>
          .
        </p>
      </FormContainer>
    </FormLayout>
  );
};

export default Login;
