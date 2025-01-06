import React from "react";
import { useLocation } from "react-router-dom";
import Chat from "./Chat"; // Correctly importing the default export

const Dashboard = () => {
  const location = useLocation();
  const { formData } = location.state || { formData: {} };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
    },
    card: {
      padding: "20px",
      marginBottom: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "400px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    data: {
      fontSize: "18px",
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Dashboard</h1>
        <p style={styles.data}>Welcome, {formData.email || "Guest"}!</p>
        <p style={styles.data}>Active Users: 50</p>
        <p style={styles.data}>Number of Logins: 130</p>
      </div>
      <Chat />
    </div>
  );
};

export default Dashboard;
