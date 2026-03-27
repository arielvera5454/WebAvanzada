import React from 'react';
import UserCard from './UserCard';
import { UsersState } from '../types';
import '../styles/users.css';

interface UsersListProps extends UsersState {}

const UsersList: React.FC<UsersListProps> = ({ data, loading, error }) => {
  return (
    <div className="users-container">
      <h1>Usuarios desde JSONPlaceholder</h1>

      {loading && <p className="loading">Cargando usuarios...</p>}

      {error && (
        <p className="error">
          Error al cargar los usuarios: {error}
        </p>
      )}

      {data && (
        <div className="users-grid">
          {data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersList;
