import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./Searchbar"

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    borderBottom: `2px solid black`,
    backgroundImage: `url(https://suindependent.com/wp-content/uploads/2018/11/cranberries.jpg)`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: 900,
    color: "#333453"
  },
  link: {
    margin: theme.spacing(6, 1.5)
  }
}));

export default function RecipeList(props) {
  const classes = useStyles();
  const [search, setSearch] = useState('')

  const handleChange = event => {
    const {value} = event.target;
    setSearch(value);
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav>
              <SearchBar
              search={search} 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              />
              <RouterLink style={{ textDecoration: "none" }} to="/add-recipe">
                <Button onClick={() => {
                
                }}
                href="#"
                  variant="contained"
                  className={classes.link}
                  color="primary"
                  style={{ fontWeight: 700 }}
                >
                Add Recipe
                </Button>
              </RouterLink>
            {localStorage.getItem("token") ? (
              <RouterLink style={{ textDecoration: "none" }} to="/">
                <Button
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                  href="#"
                  variant="contained"
                  className={classes.link}
                  color="primary"
                  style={{ fontWeight: 700 }}
                >
                  Logout
                </Button>
              </RouterLink>
            ) : (
              <RouterLink style={{ textDecoration: "none" }} to="/login">
                <Button
                  href="#"
                  color="primary"
                  variant="contained"
                  className={classes.link}
                >
                  Login
                </Button>
              </RouterLink>
            )}
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}