import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";
import Filter from "@/components/Filter/Filter";
import Sort from "@/components/Sort/Sort";
import ProductList from "@/components/ProductList/ProductList";

// mock data from backend
import { products } from "@/data";

export default function Home() {
  return (
    <Container sx={{ py: 5 }}>
      <Filter />

      <Grid2
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={2}
      >
        <Grid2 mb={{ xs: 3, sm: 0 }}>
          <Typography variant="h5">Danh sách sản phẩm</Typography>
        </Grid2>

        <Grid2
          container
          alignItems={"center"}
          gap={3}
          size={{ md: 3.5 }}
          flexDirection={"row"}
        >
          <Typography>Sắp xếp theo</Typography>

          <Grid2 flex={1}>
            <Sort />
          </Grid2>
        </Grid2>
      </Grid2>

      <ProductList products={products} />
    </Container>
  );
}
