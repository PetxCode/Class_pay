import useSWR from "swr";
import { storeData } from "../api/API";

const useStore = () => {
  const { data } = useSWR(`api/store`, storeData);
  return { data };
};

export default useStore;
