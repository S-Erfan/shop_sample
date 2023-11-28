import axios from "axios";
import { BASE_URL } from "./routes";

type ResponseBack<O> = { status: number, data: O }

axios.defaults.baseURL = BASE_URL;

export async function callApi<I, O>(method: string = "get", url: string = "", headers = {}, body: I): Partial<ResponseBack<O>> {
    return await axios[method](url, JSON.parse(headers), JSON.parse(body))
} 