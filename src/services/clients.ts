import { clients } from "../utils/data"
import { sleep } from "../utils/functions"

export const fetchClients = async () => {
  await sleep(1000) // Simulated fetch delay
  return clients;
}