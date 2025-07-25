import Form from "./components/Form.tsx";
import {useCriptosStore} from "./store.ts";
import {useEffect} from "react";
import Cotizacion from "./components/Cotizacion.tsx";

function App() {
    const {fetchCriptos, result} = useCriptosStore();

    useEffect(() => {
        fetchCriptos()
    }, []);

    return (
        <>
            <div className="max-w-4xl mx-auto my-10">
                <h1 className="font-orbitron font-semibold text-center text-5xl text-white my-10 uppercase shadow-md">
                    Cotizador <span className="text-green-600">Criptomonedas</span></h1>

                <div className="max-w-xl mx-auto bg-white py-5 px-5 rounded-lg shadow-lg">
                    <Form/>
                    {Object.keys(result).length === 0 ? (
                        <p></p>
                    ) : (
                        <Cotizacion/>
                    )}
                </div>
            </div>
        </>
    )
}

export default App
