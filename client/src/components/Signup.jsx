import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Data Submitted:", formData); // Log form data to console

    // Send form data to the backend
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      console.log("Server Response:", response.data); // Log server response
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const styles = {
    outerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
    },
    cardContainer: {
      width: "400px",
      padding: "30px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
    },
    signInButton: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.cardContainer}>
        <h1 style={styles.title}>Customer Service Portal</h1>
        <p style={styles.subtitle}>Sign in to access your dashboard</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label style={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember me
          </label>

          <button type="submit" style={styles.signInButton}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
