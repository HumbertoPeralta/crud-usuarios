import ListContainer from './components/ListContainer';
import type { User } from './types/User.type';
import UserItem from './components/UserItem';
import useGetUsers from './hooks/useGetUsers';
import AddEditForm from './components/AddEditForm';
import useCreateEditUser from './hooks/useCreateEditUser';
import { useState } from 'react';

function App() {
  const { users, addUserToList, updateUserInList, deleteUserFromList, isLoading: isFetchingUsers } = useGetUsers();
  const { createUser, updateUser, deleteUser, isLoading: isSubmitLoading } = useCreateEditUser();

  const [userEditing, setUserEditing] = useState<User | null>(null);

  const handleOnSubmit = async (user: User) => {
    if (userEditing) {
      const updated = await updateUser(user);
      if (updated) {
        updateUserInList(updated.user);
        setUserEditing(null);
      }
    } else {
      const newUser = await createUser({
        user: {
          ...user,
          created: new Date()
        }
      });
      if (newUser) {
        addUserToList(newUser.user);
      }
    }
  };

  const handleEdit = (user: User) => {
    setUserEditing(user);
  };

  const handleCancelEdit = () => {
    setUserEditing(null);
  };

  const handleDelete = async (id: number) => {
    const deleted = await deleteUser(id);
    if (deleted) deleteUserFromList(id);
  };

  return (
    <div>
      <h1>Todo list</h1>

      <AddEditForm 
        onSubmit={handleOnSubmit}
        loading={isSubmitLoading}
        userEditing={userEditing}
        onCancel={handleCancelEdit}
      />

      {isFetchingUsers && <p>Loading...</p>}

      {!isFetchingUsers && (
        <ListContainer>
          {users.map((user) => (
            <UserItem 
              key={user.id} 
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </ListContainer>
      )}
    </div>
  );
}

export default App;
