import {create} from "zustand/react";
import axios from "axios";
import { z } from "zod";
import { devtools } from "zustand/middleware";
import {CryptoPriceSchema, CrytoCurrencyResponse} from "./schemas/cripto-schema.ts";
import {CryptoCurrency} from "./schemas/cripto-schema.ts";
import type {Cotizacion, CryptoPrice} from "./types";
type CryptoCurrency = z.infer<typeof CryptoCurrency>;

type CryptoStore = {
    criptoMonedas: CryptoCurrency[],
    result: CryptoPrice,
    fetchCriptos(): Promise<void>,
    fetchData(data: Cotizacion): Promise<void>,
}

async function getCriptomonedas() {
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

async function fetchMonedaCriptoPrecio(data: Cotizacion) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.monedaCripto}&tsyms=${data.moneda}`;
    try {
        const {data: {DISPLAY}} = await axios.get(url);
        const result = CryptoPriceSchema.safeParse(DISPLAY[data.monedaCripto][data.moneda]);
        if (result.success) {
            return result.data;
        } else {
            throw  result.error
        }
    }catch (e) {
        throw e;
    }
}

export const useCriptosStore = create<CryptoStore>()(
    devtools((setState) => ({
        criptoMonedas: [],
        result: {} as CryptoPrice,
        fetchCriptos: async () => {
            const criptomonedas = await getCriptomonedas();
            // @ts-ignore
            setState(() => ({
                criptoMonedas: criptomonedas
            }));
        },
        fetchData: async (data: Cotizacion) => {
            const result = await fetchMonedaCriptoPrecio(data);
            setState(() => ({
                result: result
            }))
        }
    }))
);
