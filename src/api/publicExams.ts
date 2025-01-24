import { baseURL } from "@/utils/constraints/constants";

export const fetchPublicExams = async () => {
    const url = `${baseURL}/public-exams`;
    const response = await fetch(url, { method: "POST", });

    if (!response.ok) {
        throw new Error("Failed to fetch public exams");
    }

    return response.json();
};

export const fetchPublicExam = async (exam: string) => {
    const url = `${baseURL}/public-exam`;
    const payload = {
        exam: {
            slug: exam,
        }
    }
    const response = await fetch(url, {
        method: "POST", body: JSON.stringify(payload), headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch public exam subjects");
    }

    return response.json();
}