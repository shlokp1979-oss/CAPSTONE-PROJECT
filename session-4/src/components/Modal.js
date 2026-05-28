function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        background: "#111827",
        padding: "20px",
        margin: "100px auto",
        width: "300px",
        borderRadius: "10px"
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;