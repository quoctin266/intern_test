"use client";

import { Grid2, Pagination } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useScrollTop } from "@/util/Hooks";

const LIMIT = 12;

function ProductList(props: IProductListProps) {
  const { products } = props;

  const [displayData, setDisplayData] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);

  const handlePaginate = (page: number) => {
    const startIndex = (page - 1) * LIMIT;
    const endIndex = startIndex + LIMIT;
    return products.slice(startIndex, endIndex);
  };

  useEffect(() => {
    let paginatedData = handlePaginate(page);
    if (paginatedData.length === 0 && page > 1) {
      setPage(page - 1);
    }

    setDisplayData(paginatedData);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, products]);

  useScrollTop();

  return (
    <Grid2 container py={5} spacing={3}>
      {displayData.map((product) => {
        return (
          <Grid2
            key={product.id}
            size={{ xs: 12, sm: 6, md: 3 }}
            display={"flex"}
          >
            <ProductCard product={product} />
          </Grid2>
        );
      })}

      {Math.ceil(products.length / LIMIT) > 1 && (
        <Grid2 size={12} display={"flex"} justifyContent={"center"} mt={5}>
          <Pagination
            count={Math.ceil(products.length / LIMIT)}
            color="primary"
            onChange={(e, page) => setPage(page)}
            page={page}
          />
        </Grid2>
      )}
    </Grid2>
  );
}

export default ProductList;
