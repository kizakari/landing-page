export const homeUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://main--gentle-lolly-617c28.netlify.app";


    export const apiPayment =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8000/user/payment"
      : "https://tmdt-backend.onrender.com/user/payment";

    export const apiMessage =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8000/user/message-send"
      : "https://tmdt-backend.onrender.com/user/message-send";
