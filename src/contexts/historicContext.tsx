import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";

export type SpanProps = {
  className: string;
  children: string;
};

export type TextCard = {
  texto: SpanProps[];
  numero_acertos: number;
  numero_erros: number;
  numero_correcoes: number;
  tempo_total: number;
  palavras_por_minuto: number;
  data: Date | null;
  data_resumida: string | undefined;
};

type ErrorCount = {
  key: string;
  errorCount: number;
  hitCount: number;
  errorPercentage: number;
  hitPercentage: number;
  label: string;
};

interface HistoricProviderProps {
  children: ReactNode;
}

type HistoricContextData = {
  errorsList: ErrorCount[];
  historicList: TextCard[];
  updateHistoric: () => void;
};

export const HistoricContext = createContext({} as HistoricContextData);

export function HistoricProvider({ children }: HistoricProviderProps) {
  const [historicList, setHistoricList] = useState([] as TextCard[]);
  const [errorsList, setErrorsList] = useState([] as ErrorCount[]);

  function updateHistoric() {
    api
      .get("/historico/teclas", {
        timeout: 3000,
        params: {
          id_usuario: localStorage.getItem("id_usuario"),
        },
      })
      .then((response: any) => {
        setErrorsList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <HistoricContext.Provider
      value={{ errorsList, historicList, updateHistoric }}
    >
      {children}
    </HistoricContext.Provider>
  );
}
