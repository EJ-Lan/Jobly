"use client";
import { useState } from "react";
import "./signup.css";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    skills: [""],
    websites: [""],
    education: [{ name: "", location: "", startTime: "", endTime: "" }],
    projects: [{ title: "", summary: "" }],
    experiences: [
      { position: "", company: "", location: "", dateStart: "", dateEnd: "" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Account created!");
  };

  return (
    <div className="form-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Projects */}
        <label>Projects</label>
        {formData.projects.map((project, index) => (
          <input
            key={index}
            type="text"
            value={project}
            onChange={(e) =>
              handleArrayChange(index, "projects", e.target.value)
            }
            placeholder={`Project ${index + 1}`}
          />
        ))}
        <button type="button" onClick={() => addField("projects")}>
          + Add Project
        </button>

        {/* Education Section */}
        <h2>Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="form-section">
            <label>School Name</label>
            <input
              type="text"
              value={edu.name}
              onChange={(e) => {
                const newEducation = [...formData.education];
                newEducation[index].name = e.target.value;
                setFormData({ ...formData, education: newEducation });
              }}
            />

            <label>Location</label>
            <input
              type="text"
              value={edu.location}
              onChange={(e) => {
                const newEducation = [...formData.education];
                newEducation[index].location = e.target.value;
                setFormData({ ...formData, education: newEducation });
              }}
            />

            <label>Start Time</label>
            <input
              type="date"
              value={edu.startTime}
              onChange={(e) => {
                const newEducation = [...formData.education];
                newEducation[index].startTime = e.target.value;
                setFormData({ ...formData, education: newEducation });
              }}
            />

            <label>End Time</label>
            <input
              type="date"
              value={edu.endTime}
              onChange={(e) => {
                const newEducation = [...formData.education];
                newEducation[index].endTime = e.target.value;
                setFormData({ ...formData, education: newEducation });
              }}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              education: [
                ...formData.education,
                { name: "", location: "", startTime: "", endTime: "" },
              ],
            })
          }
        >
          ➕ Add Education
        </button>

        {/* Skills */}
        <label>Skills</label>
        {formData.skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            value={skill}
            onChange={(e) => handleArrayChange(index, "skills", e.target.value)}
            placeholder={`Skill ${index + 1}`}
          />
        ))}
        <button type="button" onClick={() => addField("skills")}>
          + Add Skill
        </button>

        {/* Websites */}
        <label>Websites</label>
        {formData.websites.map((site, index) => (
          <input
            key={index}
            type="url"
            value={site}
            onChange={(e) =>
              handleArrayChange(index, "websites", e.target.value)
            }
            placeholder={`Website ${index + 1}`}
          />
        ))}
        <button type="button" onClick={() => addField("websites")}>
          + Add Website
        </button>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Create Account
        </button>
      </form>
    </div>
  );
}
