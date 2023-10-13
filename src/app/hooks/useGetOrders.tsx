import { useEffect, useState } from "react";
import { getOrder } from "../utilities/utils";

interface Order {
    id: number;
    quantity: number;
    total_price: number;
    order_date: String;
    order_status: String;
    user: number;

}

const useGetOrders = () => {
  const [order, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    (async () => {
        const orders = await getOrder();
        console.log({order:order})
        setOrders(orders);
    })();
  }, []);

  return { order };
};

export default useGetOrders;
