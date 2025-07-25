import {Monedas} from "../data/data.ts";
const Form = () => {
    return (
        <>
            <form className="space-y-5">
                <div>
                    <label htmlFor={"moneda"} className="font-orbitron font-semibold block mb-2 uppercase">Moneada:</label>
                    <select id={"moneda"} className="w-full p-2 rounded-lg border border-gray-200 font-orbitron">
                        <option value={""}>--- Selecciona una moneda ---</option>
                        {Monedas.map((moneda) => {
                            return(
                                <option key={moneda.code} value={moneda.code}>{moneda.name}</option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor={"cripto"} className="font-orbitron font-semibold block mb-2 uppercase">Criptomoneda:</label>
                    <select id={"cripto"} className="w-full p-2 rounded-lg border border-gray-200 font-orbitron">
                        <option value={""}>--- Selecciona una criptomoneda ---</option>
                    </select>
                </div>

                <input type="submit" value="Cotizar" className="p-2 w-full transition-colors duration-300 hover:bg-green-600 bg-green-500 text-white font-orbitron rounded-lg font-bold text-lg uppercase  cursor-pointer"/>
            </form>
        </>
    );
}
export default Form;