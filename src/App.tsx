import React from 'react';
import { STATUSES } from './constants';
import { useClients } from './hooks/useClients';
import ClientForm from './components/ClientForm';
import StatusColumn from './components/StatusColumn';
import Header from './components/Header';

function App() {
  const { 
    form, 
    handleInputChange, 
    handleAddClient, 
    moveClient, 
    getClientsByStatus 
  } = useClients();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <ClientForm 
          form={form} 
          onInputChange={handleInputChange} 
          onAddClient={handleAddClient} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-[calc(100vh-20rem)]">
          {STATUSES.map((status) => (
            <StatusColumn
              key={status}
              status={status}
              clients={getClientsByStatus(status)}
              onMoveClient={moveClient}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;