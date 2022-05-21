import React, { useState } from "react";
import { Link } from "gatsby";
import { List, Divider } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./BlogCategories.scss";

const BlogCategories = ({ current }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="blog-categories">
      <List>
        <ListItemButton onClick={handleDropdown}>
          <ListItemText primary="Select a category" />
          {dropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Divider />
        <Collapse in={dropdown} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton component={Link} to="/blog">
              <ListItemText primary="All" />
            </ListItemButton>
            <ListItemButton component={Link} to="/blog/category/programming">
              <ListItemText primary="Programming" />
            </ListItemButton>
            <ListItemButton component={Link} to="/blog/category/technology">
              <ListItemText primary="Technology" />
            </ListItemButton>
            <ListItemButton component={Link} to="/blog/category/life">
              <ListItemText primary="Life" />
            </ListItemButton>
            <ListItemButton component={Link} to="/blog/category/basketball">
              <ListItemText primary="Basketball" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default BlogCategories;
