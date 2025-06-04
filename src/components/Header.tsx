import React from "react";
import { Users } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="bg-white/20 p-2.5 rounded-lg mr-4">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-tight">Mini CRM</h1>
            <p className="text-blue-100 text-sm mt-1">Gerenciador de leads e clientes</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;