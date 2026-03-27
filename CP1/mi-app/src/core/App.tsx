import React, { useState, useEffect } from 'react';
import { UsersList, UsersState, User } from '../features/users';

const App: React.FC = () => {
  const [state, setState] = useState<UsersState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const users: User[] = await response.json();
        
        setState({
          data: users,
          loading: false,
          error: null,
        });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        
        setState({
          data: null,
          loading: false,
          error: errorMessage,
        });
      }
    };

    fetchUsers();
  }, []);

  return <UsersList {...state} />;
};

export default App;
