"use client";

import ProductList from "@/components/ProductList/ProductList";
import { useAppSelector } from "@/lib/hooks";
import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  const products = useAppSelector((state) => state.product.products);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h5">
        Wishlist {products.length > 0 && `(${products.length})`}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <ProductList products={products} />
    </Container>
  );
}
