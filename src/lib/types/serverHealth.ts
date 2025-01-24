interface HealthData {
    health: boolean
    date: string
}

export interface HealthResponse {
    status: number
    success: boolean
    error: null | string
    message: string
    data: HealthData
}