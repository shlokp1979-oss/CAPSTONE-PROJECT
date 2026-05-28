function ResumeForm({ data, setData }) {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-box">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <textarea
        name="skills"
        placeholder="Skills"
        onChange={handleChange}
      />

      <textarea
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
      />
    </div>
  );
}

export default ResumeForm;