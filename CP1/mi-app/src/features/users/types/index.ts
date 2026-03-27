// Interface para los usuarios de la API
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  company: {
    name: string;
  };
}

// Interface para el estado del componente padre
export interface UsersState {
  data: User[] | null;
  loading: boolean;
  error: string | null;
}
