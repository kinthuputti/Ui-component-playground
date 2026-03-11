function Avatar({ image }) {
  return (
    <img 
      src={image}
      alt="avatar"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%"
      }}
    />
  );
}

export default Avatar;