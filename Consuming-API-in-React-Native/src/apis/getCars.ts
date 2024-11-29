import { CarModel } from "../components/CardView/CardViewProps";
import axios from "axios/index";
import { CAR_API_BASE_URL } from "../constants/car";

interface ApiResponse {
    cars: CarModel[];
}

export const fetchGetCarData = async (id: number) => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);

        return response.data.cars.find((car) => car.id === id) ?? null;
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
};
