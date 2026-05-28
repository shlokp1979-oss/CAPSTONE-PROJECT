function ResumePreview({ data }) {
  return (
    <div className="preview-box">
      <h3>Name</h3> 
      <p>{data.name}</p>

      <h3>Email</h3>
      <p>{data.email}</p>

      <h3>Skills</h3>
      <p>{data.skills}</p>

      <h3>Experience</h3>
      <p>{data.experience}</p>
    </div>
  );
}

export default ResumePreview;