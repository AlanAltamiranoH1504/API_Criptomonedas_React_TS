import Form from "./components/Form.tsx";
import {useCriptosStore} from "./store.ts";
import {useEffect} from "react";

function App() {
    const {fetchCriptos} = useCriptosStore();

    useEffect(() => {
        fetchCriptos()
    }, []);

    return (
        <>
            <div className="max-w-4xl mx-auto">
                <h1 className="font-orbitron font-semibold text-center text-5xl text-white my-10 uppercase shadow-md">
                    Cotizador <span className="text-green-600">Criptomonedas</span></h1>

                <div className="max-w-xl mx-auto bg-white py-5 px-5 rounded-lg shadow-lg">
                    <Form/>
                </div>
            </div>
        </>
    )
}

export default App
