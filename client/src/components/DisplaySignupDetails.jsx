import React from "react";
import { useLocation } from "react-router-dom";

const DisplaySignup = () => {
  const location = useLocation();
  const { userDetails } = location.state || {};

  if (!userDetails) {
    return <div>No data available</div>;
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.cardContainer}>
        <h1 style={styles.title}>User Signup Details</h1>
        <pre>{JSON.stringify(userDetails, null, 2)}</pre>
      </div>
    </div>
  );
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
};

export default DisplaySignup;
