// configs/axios.ts
import axios from "axios";
import { env } from "./env"; // clean import

export const api = axios.create({
  baseURL: env.apiUrl,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});
