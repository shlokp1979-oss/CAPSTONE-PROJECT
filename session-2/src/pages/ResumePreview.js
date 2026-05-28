function ResumePreview({ data }) {
  return (
    <div style={{ border: "1px solid white", padding: "20px" }}>
      <h2>{data.name}</h2>
      <p>{data.email}</p>

      <h3>Skills</h3>
      <p>{data.skills}</p>

      <h3>Experience</h3>
      <p>{data.experience}</p>
    </div>
  );
}

export default ResumePreview;