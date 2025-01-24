import { baseURL } from "@/utils/constraints/constants";

export const fetchPublicExamSubjects = async (exam: string) => {
    const url = `${baseURL}/public-exam-subjects`;
    const payload = {
        examSubject: {
            examSlug: exam,
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