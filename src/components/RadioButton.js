// RadioButton.js
function RadioButton({ name, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
      <input type="radio" name={name} id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default RadioButton;