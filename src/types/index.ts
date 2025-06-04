export interface Client {
  id: number;
  nome: string;
  contato: string;
  data: string;
  origem: string;
  interesse: string;
  status: string;
  observacoes: string;
}

export interface ClientFormData {
  nome: string;
  contato: string;
  data: string;
  origem: string;
  interesse: string;
  status: string;
  observacoes: string;
}