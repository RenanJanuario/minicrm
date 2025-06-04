import React from "react";
import { Client } from "../types";
import { STATUSES, STATUS_COLORS } from "../constants";
import { Calendar, User, Phone, Tag, Building, Info } from "lucide-react";

interface ClientCardProps {
  client: Client;
  onMoveClient: (id: number, newStatus: string) => void;
  currentStatus: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ 
  client, 
  onMoveClient, 
  currentStatus 
}) => {
  const statusClass = STATUS_COLORS[client.status as keyof typeof STATUS_COLORS];
  
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('pt-BR').format(date);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div 
      className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 mb-3 overflow-hidden"
    >
      <div className={`px-4 py-2 border-l-4 ${statusClass} flex justify-between items-center`}>
        <h3 className="font-medium text-gray-800 truncate">{client.nome}</h3>
        <span className="text-xs text-gray-500">{formatDate(client.data)}</span>
      </div>
      
      <div className="p-4 space-y-3">
        {client.contato && (
          <div className="flex items-start text-sm">
            <Phone className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{client.contato}</span>
          </div>
        )}
        
        {client.origem && (
          <div className="flex items-start text-sm">
            <Building className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{client.origem}</span>
          </div>
        )}
        
        {client.interesse && (
          <div className="flex items-start text-sm">
            <Tag className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{client.interesse}</span>
          </div>
        )}
        
        {client.observacoes && (
          <div className="flex items-start text-sm">
            <Info className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 line-clamp-2">{client.observacoes}</span>
          </div>
        )}
      </div>
      
      <div className="px-4 py-3 bg-gray-50 border-t">
        <div className="flex flex-wrap gap-2">
          {STATUSES.filter((status) => status !== currentStatus).map((status) => (
            <button
              key={status}
              onClick={() => onMoveClient(client.id, status)}
              className="text-xs px-2 py-1 rounded bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 flex items-center"
            >
              Mover para {status}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCard;