import QRCode from "react-qr-code";

const QrCode = ({ petId }) => {
  const REACT_APP_FRONTEND = process.env.REACT_APP_FRONTEND;
  const url = `${REACT_APP_FRONTEND}public/pets/${petId}`;
  return (
    <div
      style={{ height: "auto", margin: "15px", maxWidth: 180, width: "100%" }}
    >
      <QRCode
        size={1024}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={url}
        viewBox={`0 0 1024 1024`}
      />
    </div>
  );
};

export default QrCode;
