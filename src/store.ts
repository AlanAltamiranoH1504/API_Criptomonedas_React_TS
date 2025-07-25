import {create} from "zustand/react";
import axios from "axios";

async function getCriptomonedas () {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
    try {
        const response = await axios.get(url);
        console.log(response.data.Data)
    }catch (e) {
        throw e;
    }
}

export const useCriptosStore = create(() => ({
    fetchCriptos: () => {
        getCriptomonedas();
    }
}));