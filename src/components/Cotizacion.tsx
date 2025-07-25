import {useCriptosStore} from "../store.ts";
const Cotizacion = () => {
    const {result} = useCriptosStore();
    return (
        <>
            <h2 className="font-orbitron mt-8 mb-2 text-center uppercase font-semibold text-lg">Cotizacion</h2>
            <img
                className="max-h-40 mx-auto mb-5"
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
            />
            <div className="font-orbitron space-y-2">
                <div className="flex flex-row justify-center">
                    <p>El precio es de: <span className="text-green-600 font-orbitron font-semibold">{result.PRICE}</span></p>
                </div>
                <div className="flex flex-row justify-center">
                    <p>El precio maximo del dia es: <span className="text-green-600 font-orbitron font-semibold">{result.HIGHDAY}</span></p>
                </div>
                <div className="flex flex-row justify-center">
                    <p>El precio minimo del dia es: <span className="text-green-600 font-orbitron font-semibold">{result.LOWDAY}</span></p>
                </div>
                <div className="flex flex-row justify-center">
                    <p>Cambio en ultimas 24 hrs: <span className="text-green-600 font-orbitron font-semibold">{result.CHANGEPCT24HOUR}</span></p>
                </div>
            </div>
        </>
    );
}
export default Cotizacion;