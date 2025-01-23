import { baseURL } from "@/utils/constraints/constants";

export const fetchPublicExams = async () => {
    const url = `${baseURL}/public-exams`;
    const response = await fetch(url, { method: "POST", });

    if (!response.ok) {
        throw new Error("Failed to fetch public exams");
    }

    return response.json();
};