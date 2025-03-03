import React from "react";
import TransactionTable from "./components/TransactionTable";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7fafc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <TransactionTable />
    </div>
  );
};

export default App;

