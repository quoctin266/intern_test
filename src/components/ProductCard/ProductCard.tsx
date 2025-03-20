"use client";

import styles from "./ProductCard.module.scss";
import { currencyFormatter, formatSold } from "@/util/HelperFunctions";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addToList,
  removeFromList,
} from "@/lib/features/products/productSlice";

dayjs.extend(customParseFormat);

const dateFormat = "MM/DD/YYYY HH:mm";

function ProductCard(props: IProductCardProps) {
  const { product } = props;

  const dispatch = useAppDispatch();

  const wishlish = useAppSelector((state) => state.product.products);

  return (
    <Card className={styles.container}>
      <Box position={"relative"}>
        <CardMedia sx={{ height: 280 }} image={product.image} />

        {product.discount && (
          <div className={styles.discount}>-{product.discount}%</div>
        )}

        {wishlish.find((item) => item.id === product.id) ? (
          <IconButton
            className={styles.wishlistBtn}
            onClick={() => {
              dispatch(removeFromList(product));
            }}
          >
            <FavoriteRoundedIcon color="error" />
          </IconButton>
        ) : (
          <IconButton
            className={styles.wishlistBtn}
            onClick={() => {
              dispatch(addToList(product));
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        )}

        <div className={styles.tags}>
          {product.freeShip && (
            <div className={`${styles.common} ${styles.shipping}`}>
              <LocalShippingRoundedIcon fontSize="small" />
              <div>FREE</div>
            </div>
          )}

          {product.gift && (
            <div className={`${styles.common} ${styles.gift}`}>
              <CardGiftcardOutlinedIcon fontSize="small" />
              <div>Quà tặng</div>
            </div>
          )}
        </div>
      </Box>

      <CardContent>
        {product.flashSale && (
          <div className={styles.flashsale}>
            <img src="image/flashsale.png" width={70} />
            <li>{dayjs(product.flashSale, dateFormat).format("HH:mm")}</li>
            <li>{dayjs(product.flashSale, dateFormat).format("DD/MM")}</li>
          </div>
        )}

        <Typography gutterBottom component="div" className={styles.title}>
          {product.title}
        </Typography>
        <Typography className={styles.price}>
          {currencyFormatter(product.price)}
        </Typography>

        {product.sold && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {formatSold(product.sold)} Đã bán
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default ProductCard;
