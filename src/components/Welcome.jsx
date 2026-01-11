import { useLocation, useNavigate } from "react-router-dom";
import Message from "../components/ui/Message/Message";
import { useAuth } from "../context/AuthContext";
import FormButtons from "./ui/FormButtons";

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const message = location.state?.message;

  if (!user) return null;

  const handleLogout = async () => {
    await logout();
    navigate("/", {
      state: { message: "You have been logged out " },
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      {message && <Message type="success" text={message} />}

      <h1 className="text-2xl font-bold mt-4">
        Welcome, {user.username} 
      </h1>

      <div className="mt-6 space-y-3 text-gray-700">
        <p><b>Email:</b> {user.email}</p>
        <p><b>Role:</b> {user.role}</p>
        <p><b>User ID:</b> {user.uid}</p>
      </div>

     <FormButtons onclick={handleLogout} text="Log out" />
    </div>
  );
};

export default Welcome;
