import {z} from "zod";

export const criptoSchema = z.object({
    code: z.string(),
    name: z.string()
});