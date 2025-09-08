import { api } from "encore.dev/api";

interface InitialServiceProps {
  name: string;
}

interface InitialServiceResponse {
  status: number;
  message: string;
}

export const get = api<InitialServiceProps, InitialServiceResponse>(
  { path: "/initial-service/:name", method: "GET", expose: true, auth: false },
  async (props) => {
    return {
      status: 200,
      message: `Hello, ${props.name}`,
    };
  }
);
