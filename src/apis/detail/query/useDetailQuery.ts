import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { getDetailHandler } from "./getDetailHandler";
import { FirebaseData } from "@/static/types/common";

const useDetailQueryHook = (pageId: string) => {
  const { data, isLoading, error }: QueryObserverResult<FirebaseData> =
    useQuery({
      queryKey: ["getPage", pageId],
      queryFn: async (queryKey) => {
        const keyParams = queryKey.queryKey[1] as string;
        return await getDetailHandler(keyParams);
      },
      staleTime: 5 * 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 3,
      enabled: pageId !== "" || !!pageId,
    });

  return { pageData: data, isLoading, error };
};
export default useDetailQueryHook;
