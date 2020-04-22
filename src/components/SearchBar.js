import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    console.log("searchTerm", searchTerm);
    event.preventDefault();
    onFormSubmit(searchTerm);
  };
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search.... "
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
    </Paper>
  );
};

export default SearchBar;
