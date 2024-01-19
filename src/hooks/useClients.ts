import { useState } from "react";
import Client from "../models/Client";
import { fetchClients } from "../services/clients";

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getClients = async () => {
    setLoading(true);
    const newClients = await fetchClients();
    setClients(newClients);
    setLoading(false);
  }

  return { clients, loading, getClients };
}