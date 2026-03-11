function Input({ placeholder }) {
  return (
    <input 
      type="text" 
      placeholder={placeholder}
      style={{
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
    />
  );
}

export default Input;