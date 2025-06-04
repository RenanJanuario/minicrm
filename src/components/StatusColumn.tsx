import React from "react";
import { Client } from "../types";
import ClientCard from "./ClientCard";
import { STATUS_HEADERS } from "../constants";

interface StatusColumnProps {
  status: string;
  clients: Client[];
  onMoveClient: (id: number, newStatus: string) => void;
}

const StatusColumn: React.FC<StatusColumnProps> = ({ 
  status, 
  clients, 
  onMoveClient 
}) => {
  const headerClass = STATUS_HEADERS[status as keyof typeof STATUS_HEADERS];
  
  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className={`p-3 ${headerClass} flex items-center justify-between`}>
        <h3 className="font-semibold">{status}</h3>
        <span className="bg-white text-gray-800 text-xs font-medium rounded-full px-2 py-0.5">
          {clients.length}
        </span>
      </div>
      
      <div className="p-3 flex-1 overflow-y-auto max-h-[calc(100vh-15rem)]">
        {clients.length === 0 ? (
          <div className="text-sm text-gray-500 text-center py-4 italic">
            Nenhum cliente neste status
          </div>
        ) : (
          clients.map((client) => (
            <ClientCard
              key={client.id}
              client={client}
              currentStatus={status}
              onMoveClient={onMoveClient}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StatusColumn;