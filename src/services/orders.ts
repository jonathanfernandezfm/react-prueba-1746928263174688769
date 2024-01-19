import { Order } from "../models/Order";
import { API_URL } from "../utils/constants";

export const fetchOrders = async () => {
  const orders = await fetch(`${API_URL}/pedidos`).then(res => res.json());
  return orders;
}

export const addOrder = async (order: Order) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  };

  return await fetch(`${API_URL}/pedidos`, requestOptions).then(res => res.json());
}