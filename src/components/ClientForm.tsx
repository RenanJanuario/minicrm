import React from "react";
import { ClientFormData } from "../types";
import { STATUSES } from "../constants";
import { UserPlus } from "lucide-react";

interface ClientFormProps {
  form: ClientFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onAddClient: () => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ 
  form, 
  onInputChange, 
  onAddClient 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
        <UserPlus className="w-5 h-5 mr-2 text-blue-500" />
        Adicionar Novo Cliente
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            value={form.nome}
            onChange={onInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nome do cliente"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contato" className="block text-sm font-medium text-gray-700">
            Contato
          </label>
          <input
            id="contato"
            name="contato"
            type="text"
            value={form.contato}
            onChange={onInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Telefone ou email"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="data" className="block text-sm font-medium text-gray-700">
            Data de Contato
          </label>
          <input
            id="data"
            name="data"
            type="date"
            value={form.data}
            onChange={onInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="origem" className="block text-sm font-medium text-gray-700">
            Origem
          </label>
          <input
            id="origem"
            name="origem"
            type="text"
            value={form.origem}
            onChange={onInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Site, indicação, etc."
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="interesse" className="block text-sm font-medium text-gray-700">
            Serviço de Interesse
          </label>
          <input
            id="interesse"
            name="interesse"
            type="text"
            value={form.interesse}
            onChange={onInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Serviço de interesse"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={onInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
          Observações
        </label>
        <textarea
          id="observacoes"
          name="observacoes"
          rows={3}
          value={form.observacoes}
          onChange={onInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Observações adicionais"
        />
      </div>

      <div className="mt-6">
        <button
          onClick={onAddClient}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Adicionar Cliente
        </button>
      </div>
    </div>
  );
};

export default ClientForm;