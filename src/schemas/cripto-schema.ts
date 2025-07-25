import {z} from "zod";

export const criptoSchema = z.object({
    code: z.string(),
    name: z.string()
});

export const CrytoCurrencyResponse = z.array(
    z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Name: z.string()
        })
    })
);

export const CryptoCurrency = z.object({
    FullName: z.string(),
    Name: z.string()
});