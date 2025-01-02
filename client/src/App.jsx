import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  // Inline styles for the Signup form
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
    inputGroup: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
    },
    optionsContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
    },
    checkbox: {
      marginRight: "5px",
    },
    forgotPassword: {
      fontSize: "14px",
      color: "#007bff",
      textDecoration: "none",
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
        {/* Header Section */}
        <h1 style={styles.title}>Customer Service Portal</h1>
        <p style={styles.subtitle}>Sign in to access your dashboard</p>

        {/* Form Section */}
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="name@company.com"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.optionsContainer}>
            <label style={styles.checkboxContainer}>
              <input type="checkbox" style={styles.checkbox} />
              Remember me
            </label>
            <a href="#" style={styles.forgotPassword}>
              Forgot your password?
            </a>
          </div>

          <button type="submit" style={styles.signInButton}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
