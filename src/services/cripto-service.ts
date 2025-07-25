import axios from "axios";
import {CrytoCurrencyResponse} from "../schemas/cripto-schema.ts";

export async function getCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
    try {
        const response = await axios.get(url);
        const result = CrytoCurrencyResponse.safeParse(response.data.Data);
        if (result.success) {
            return result.data;
        } else {
            throw result.error;
        }
    } catch (e) {
        throw e;
    }
}