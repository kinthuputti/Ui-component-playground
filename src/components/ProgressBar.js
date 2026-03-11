import "./ProgressBar.css";
function ProgressBar({ progress }) {
  return (
    <div style={{ width: "200px", background: "#eee" }}>
      <div style={{
        width: progress + "%",
        background: "green",
        height: "10px"
      }} />
    </div>
  );
}

export default ProgressBar;