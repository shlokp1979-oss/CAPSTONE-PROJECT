function ResumePreview({ resume, template }) {
  if (!resume) return null;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      
      {template === "modern" && (
        <div style={{ color: "cyan" }}>
          <h2>Modern Resume</h2>
          <pre>{resume}</pre>
        </div>
      )}

      {template === "classic" && (
        <div style={{ fontFamily: "serif" }}>
          <h2>Classic Resume</h2>
          <pre>{resume}</pre>
        </div>
      )}

    </div>
  );
}

export default ResumePreview;