function Modal({ message }) {
  return (
    <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      background: "white",
      padding: "20px",
      border: "1px solid black"
    }}>
      {message}
    </div>
  );
}

export default Modal;