export const STATUSES = ["Novos", "Em negociação", "Fechados", "Perdidos"];

export const STATUS_COLORS = {
  "Novos": "bg-blue-100 border-blue-300 text-blue-800",
  "Em negociação": "bg-amber-100 border-amber-300 text-amber-800",
  "Fechados": "bg-emerald-100 border-emerald-300 text-emerald-800",
  "Perdidos": "bg-rose-100 border-rose-300 text-rose-800"
};

export const STATUS_HEADERS = {
  "Novos": "bg-blue-500 text-white",
  "Em negociação": "bg-amber-500 text-white",
  "Fechados": "bg-emerald-500 text-white",
  "Perdidos": "bg-rose-500 text-white"
};

export const EMPTY_FORM: {
  nome: string;
  contato: string;
  data: string;
  origem: string;
  interesse: string;
  status: string;
  observacoes: string;
} = {
  nome: "",
  contato: "",
  data: "",
  origem: "",
  interesse: "",
  status: "Novos",
  observacoes: ""
};