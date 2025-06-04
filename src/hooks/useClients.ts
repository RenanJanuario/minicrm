import { useState } from "react";
import { Client, ClientFormData } from "../types";
import { EMPTY_FORM } from "../constants";

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [form, setForm] = useState<ClientFormData>({ ...EMPTY_FORM });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddClient = () => {
    // Basic validation
    if (!form.nome.trim()) {
      alert("Por favor, informe o nome do cliente.");
      return;
    }

    const newClient: Client = { 
      ...form, 
      id: Date.now() 
    };
    
    setClients(prev => [...prev, newClient]);
    setForm({ ...EMPTY_FORM });
  };

  const moveClient = (id: number, newStatus: string) => {
    setClients(
      clients.map((client) => 
        client.id === id ? { ...client, status: newStatus } : client
      )
    );
  };

  const getClientsByStatus = (status: string) => {
    return clients.filter((client) => client.status === status);
  };

  return {
    clients,
    form,
    handleInputChange,
    handleAddClient,
    moveClient,
    getClientsByStatus,
  };
}