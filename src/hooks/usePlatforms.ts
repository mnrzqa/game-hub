import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platfroms from "../data/platfroms";
import Platform from "../entities/Platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platfroms,
  });

export default usePlatforms;
