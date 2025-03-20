import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Sort() {
  return (
    <FormControl fullWidth size="small">
      <Select defaultValue={1}>
        <MenuItem value={1}>Giá thấp đến cao</MenuItem>
        <MenuItem value={2}>Giá cao đến thấp</MenuItem>
        <MenuItem value={3}>Phổ biến</MenuItem>
        <MenuItem value={4}>Mới nhất</MenuItem>
        <MenuItem value={4}>Bán chạy</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sort;
