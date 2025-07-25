import type {CryptoPriceSchema} from "../schemas/cripto-schema.ts";
import {z} from "zod"
export type Moneda = {
    code: string,
    name: string
}
export type Cotizacion = {
    moneda: string,
    monedaCripto: string,
}
export type CryptoPrice = z.infer<typeof  CryptoPriceSchema>