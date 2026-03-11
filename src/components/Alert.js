function Alert({ message }) {
  return (
    <div style={{
      background: "#ffe5e5",
      padding: "10px",
      border: "1px solid red",
      borderRadius: "5px",
      width: "250px"
    }}>
      {message}
    </div>
  );
}

export default Alert;