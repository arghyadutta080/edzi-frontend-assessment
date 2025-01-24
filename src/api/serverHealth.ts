import { HealthResponse } from "@/lib/types/serverHealth"
import { baseURL } from "@/utils/constraints/constants";

export const fetchHealthStatus = async (): Promise<HealthResponse> => {
    const url = `${baseURL}/health`;
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    return response.json()
}