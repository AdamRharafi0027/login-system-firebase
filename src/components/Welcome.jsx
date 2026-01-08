import { useLocation } from "react-router-dom";
import Message from "../components/ui/Message/Message";
import { useAuth } from "../context/AuthContext";

const Welcome = () => {
  const location = useLocation();
  const { user } = useAuth();

  const message = location.state?.message;

  return (
    <div className="max-w-lg mx-auto mt-10">
      <Message type="success" text={message} />

      <h1 className="text-2xl font-bold mt-4">
        Welcome {user?.email}
      </h1>
    </div>
  );
};

export default Welcome;
