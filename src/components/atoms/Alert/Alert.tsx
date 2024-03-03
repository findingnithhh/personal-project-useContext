import React, { useState } from "react";

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const [closed, setClosed] = useState(false);

  let alertColor = "";
  switch (type) {
    case "success":
      alertColor = "bg-green-100 text-green-900";
      break;
    case "error":
      alertColor = "bg-red-300 text-red-900";
      break;
    case "warning":
      alertColor = "bg-yellow-100 text-yellow-900";
      break;
    case "info":
      alertColor = "bg-blue-100 text-blue-900";
      break;
    default:
      alertColor = "bg-blue-100 text-blue-900";
      break;
  }

  if (closed) {
    return null;
  }

  return (
    <div
      className={`flex fixed right-0 p-3 w-[500px] rounded-md ${alertColor}`}
      role="alert"
    >
      <p>{message}</p>
      <div className="flex-grow "></div>
      <button onClick={() => setClosed(true)}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export { Alert };
