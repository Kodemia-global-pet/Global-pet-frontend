import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";

const QrCode = () => {
  return ReactDOM.render(
    <QRCodeSVG value="https://reactjs.org/" />,
    document.getElementById("mountNode")
  );
};

export default QrCode;
