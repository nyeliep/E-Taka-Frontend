import { useEffect, useState } from "react";
import { getDelivery } from "../utilities/utils";

interface Delivery {

    id: number;
    customer_name: String;
    delivery_time: String;
    delivery_method: String;
    status: String;
    order: number;
}

const useGetDelivery = () => {
  const [delivery, setDelivery] = useState<Delivery[]>([]);

  useEffect(() => {
    (async () => {
        const delivery = await getDelivery();
        console.log({delivery:delivery})
        setDelivery(delivery)
    })();
  }, []);

  return { delivery };
};
export default useGetDelivery;
