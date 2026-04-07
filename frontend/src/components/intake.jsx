import { useState } from "react";

function Intake() {
  const [formData, setFormData] = useState({
    intake_name: "",
    start_date: "",
    end_date: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:2000/api/intake/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(data?.message || "Failed to create intake.");
      }

      setSuccess("Intake created successfully.");
      setFormData({
        intake_name: "",
        start_date: "",
        end_date: "",
      });
    } catch (submitError) {
      setError(submitError.message || "Failed to create intake.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Intake</h2>

      <div>
        <label htmlFor="intake_name">Intake Name</label>
        <input
          id="intake_name"
          name="intake_name"
          type="text"
          value={formData.intake_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="start_date">Start Date</label>
        <input
          id="start_date"
          name="start_date"
          type="date"
          value={formData.start_date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="end_date">End Date</label>
        <input
          id="end_date"
          name="end_date"
          type="date"
          value={formData.end_date}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Intake"}
      </button>

      {error ? <p>{error}</p> : null}
      {success ? <p>{success}</p> : null}
    </form>
  );
}

export default Intake;
