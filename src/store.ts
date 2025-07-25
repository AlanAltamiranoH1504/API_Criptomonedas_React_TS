import {create} from "zustand/react";
import axios from "axios";
import { z } from "zod";
import { devtools } from "zustand/middleware";
import {CrytoCurrencyResponse} from "./schemas/cripto-schema.ts";
import {CryptoCurrency} from "./schemas/cripto-schema.ts";
type CryptoCurrency = z.infer<typeof CryptoCurrency>;

type CryptoStore = {
    criptoMonedas: CryptoCurrency[];
    fetchCriptos(): Promise<void>
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

export const useCriptosStore = create<CryptoStore>()(
    devtools((setState) => ({
        criptoMonedas: [],
        fetchCriptos: async () => {
            const criptomonedas = await getCriptomonedas();
            // @ts-ignore
            setState(() => ({
                criptoMonedas: criptomonedas
            }));
        }
    }))
);
