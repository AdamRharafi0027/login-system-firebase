import { CheckCircle, XCircle } from "lucide-react";
import "./Message.css"
const Message = ({ type = "success", text }) => {
  if (!text) return null;

  const styles = {
    success: {
      wrapper: "bg-green-50 border-green-500 text-green-700",
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    },
    error: {
      wrapper: "bg-red-50 border-red-500 text-red-700",
      icon: <XCircle className="w-5 h-5 text-red-600" />,
    },
  };

  return (
    <div
      className={`fixed -bottom-30 -left-150 flex items-center gap-3 border-l-4 px-4 py-3 rounded-md shadow-sm animate-fade-in ${styles[type].wrapper}`}
    >
      {styles[type].icon}
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

export default Message;
