// src/redux/productSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=10"
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;
