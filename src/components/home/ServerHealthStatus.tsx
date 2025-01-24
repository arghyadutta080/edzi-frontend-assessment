"use client";

import React from "react";
import { fetchHealthStatus } from "@/api/serverHealth";
import { HealthResponse } from "@/lib/types/serverHealth";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle, XCircle } from "lucide-react";

const ServerHealthStatus = () => {
  const { data, isLoading, isError, error } = useQuery<HealthResponse>({
    queryKey: ["healthStatus"],
    queryFn: fetchHealthStatus,
    refetchInterval: 30000, // 30 seconds
  });

  if (isLoading) {
    return <div className="text-gray-400">Checking health status...</div>;
  }

  if (isError) {
    return (
      <div className="text-red-500">
        {error?.message || "Error fetching health status"}
      </div>
    );
  }

  const healthData = data?.data;

  return (
    <div className="bg-zinc-900 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Server Health Status</h3>
      <div className="flex items-center space-x-2">
        <span>Status:</span>
        {healthData?.health ? (
          <CheckCircle className="text-green-500" />
        ) : (
          <XCircle className="text-red-500" />
        )}
        <span>{healthData?.health ? "Healthy" : "Unhealthy"}</span>
      </div>
      <div className="mt-2">
        <span>Last Checked: {healthData?.date}</span>
      </div>
    </div>
  );
};

export default ServerHealthStatus;
