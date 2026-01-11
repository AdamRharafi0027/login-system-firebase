import { useState } from "react";
import FormLayout from "../ui/FormLayout/FormLayout";
import "../ui/buttonStyle.css";
import { Link } from "react-router-dom";
import FormHeader from "../ui/FormHeader";
import InputsLayout from "../ui/InputsLayout";
import FormContainer from "../ui/FormContainer";
import FormButtons from "../ui/FormButtons";
import FormCheckBox from "../ui/FormCheckBox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import Message from "../ui/Message/Message";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        role: "user",
        createdAt: new Date(),
      });

      // reset inputs
      setUsername("");
      setEmail("");
      setPassword("");

      setSuccess("Account created successfully 🎉");
    } catch (e) {
      setError(e.message);
    }
  };

  const inputsContent = [
    { label: "Username", placeholder: "enter your username", type: "text" },
    { label: "Email", placeholder: "email@gmail.com", type: "email" },
    { label: "Password", placeholder: "enter your password", type: "password" },
  ];

  const handleInputChange = (e, item) => {
    switch (item.label) {
      case "Username":
        setUsername(e.target.value);
        break;
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
      case "Username":
        return username;
      case "Email":
        return email;
      case "Password":
        return password;
      default:
        return "";
    }
  };

  return (
    <FormLayout onsubmit={handleRegister}>
      <FormContainer>
        <FormHeader
          headline="Create New Account"
          subtitle="Sign up to start using our service!"
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

        <FormCheckBox
          label="terms"
          type="checkbox"
          text="I agree to the Terms and Conditions and Privacy Policy"
        />

        <FormButtons text="Sign Up" />

        <p>
          Already have an account?{" "}
          <Link to="/" className="font-bold text-purple-700">
            Log in
          </Link>
          .
        </p>
      </FormContainer>
    </FormLayout>
  );
};

export default Register;
