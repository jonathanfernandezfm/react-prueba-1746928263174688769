import { useState } from "react";
import { addOrder, fetchOrders } from "../services/orders";
import { Order } from "../models/Order";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getOrders = async () => {
    setLoading(true);
    const newOrders = await fetchOrders();
    setOrders(newOrders);
    setLoading(false);
  }

  const createOrder = async (order: Order) => {
    const newOrder = await addOrder(order);
    setOrders([...orders, newOrder]);
  }

  return { orders: orders, count: orders.length, loading, getOrders, createOrder };
}