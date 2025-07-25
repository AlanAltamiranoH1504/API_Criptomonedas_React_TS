import {Monedas} from "../data/data.ts";
import {useCriptosStore} from "../store.ts";
import {useForm} from "react-hook-form";
import type {Cotizacion} from "../types";

const Form = () => {
    const {criptoMonedas, fetchData} = useCriptosStore();
    const {register, handleSubmit, formState: {errors}} = useForm<Cotizacion>();

    function fetchCotizacion(data: Cotizacion) {
        fetchData(data);
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(fetchCotizacion)}
                className="space-y-5">
                <div>
                    <label htmlFor={"moneda"}
                           className="font-orbitron font-semibold block mb-2 uppercase">Moneada:</label>
                    <select
                        id={"moneda"}
                        className="w-full p-2 rounded-lg border border-gray-200 font-orbitron"
                        {...register("moneda", {
                            required: "La moneda es obligatoria"
                        })}
                    >
                        <option value={""}>--- Selecciona una moneda ---</option>
                        {Monedas.map((moneda) => {
                            return (
                                <option key={moneda.code} value={moneda.code}>{moneda.name}</option>
                            );
                        })}
                    </select>
                    <div className="mt-1 bg-red-100 text-center rounded-md text-red-600 font-orbitron font-semibold">
                        {errors.moneda && String(errors.moneda.message)}
                    </div>
                </div>
                <div>
                    <label htmlFor={"cripto"}
                           className="font-orbitron font-semibold block mb-2 uppercase">Criptomoneda:</label>
                    <select
                        id={"cripto"}
                        className="w-full p-2 rounded-lg border border-gray-200 font-orbitron"
                        {...register("monedaCripto", {
                            required: "La criptomoneda es obligatoria"
                        })}
                    >
                        <option value={""}>--- Selecciona una criptomoneda ---</option>
                        {criptoMonedas.map((cripto) => {
                            return (
                                <option key={cripto.CoinInfo.Name}
                                        value={cripto.CoinInfo.Name}>{cripto.CoinInfo.FullName}</option>
                            )
                        })}
                    </select>
                    <div className="mt-1 bg-red-100 text-center rounded-md text-red-600 font-orbitron font-semibold">
                        {errors.monedaCripto && String(errors.monedaCripto.message)}
                    </div>
                </div>

                <input type="submit" value="Cotizar"
                       className="p-2 w-full transition-colors duration-300 hover:bg-green-600 bg-green-500 text-white font-orbitron rounded-lg font-bold text-lg uppercase  cursor-pointer"/>
            </form>
        </>
    );
}
export default Form;