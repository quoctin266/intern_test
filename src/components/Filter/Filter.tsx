"use client";

import styles from "./Filter.module.scss";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import {
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  Typography,
} from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import { useState } from "react";

function Filter() {
  const [open, setOpen] = useState(false);
  const [openFilterCategory, setOpenFilterCategory] = useState(true);
  const [openFilterPrice, setOpenFilterPrice] = useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconButton className={styles.btn} onClick={toggleDrawer(true)}>
          <FilterAltOutlinedIcon />
        </IconButton>

        <Typography>Lọc sản phẩm</Typography>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <List
          sx={{ width: 300, bgcolor: "background.paper" }}
          component="nav"
          subheader={
            <ListSubheader component="div">Lọc sản phẩm</ListSubheader>
          }
        >
          <ListItemButton
            onClick={() => setOpenFilterCategory(!openFilterCategory)}
          >
            <ListItemIcon>
              <CategoryRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Loại sản phẩm" />
            {openFilterCategory ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openFilterCategory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <FormGroup sx={{ pl: 4 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Quần áo thời trang"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Thiết bị điện tử"
                />
                <FormControlLabel control={<Checkbox />} label="Thực phẩm" />
                <FormControlLabel control={<Checkbox />} label="Đồ gia dụng" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Dụng cụ thể thao"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Sách và truyện"
                />
              </FormGroup>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpenFilterPrice(!openFilterPrice)}>
            <ListItemIcon>
              <MonetizationOnRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Mức giá" />
            {openFilterPrice ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openFilterPrice} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <FormGroup sx={{ pl: 4 }}>
                <FormControlLabel control={<Checkbox />} label="0 - 500K" />
                <FormControlLabel control={<Checkbox />} label="500K - 1M" />
                <FormControlLabel control={<Checkbox />} label="1M - 2M" />
                <FormControlLabel control={<Checkbox />} label="2M - 5M" />
                <FormControlLabel control={<Checkbox />} label="> 5M" />
              </FormGroup>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}

export default Filter;
