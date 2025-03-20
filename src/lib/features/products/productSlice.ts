import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  products: IProduct[];
}

const initialState: IState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToList: (state, { payload }: PayloadAction<IProduct>) => {
      const exist = state.products.find((product) => product.id === payload.id);

      if (!exist) state.products.push(payload);
    },
    removeFromList: (state, { payload }: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToList, removeFromList } = productSlice.actions;

export default productSlice.reducer;
