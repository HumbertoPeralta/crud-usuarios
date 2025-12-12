import { useEffect, useState } from "react"
import type { User, UserResponse } from "../types/User.type"
import HttpClient from "../utils/HttpClient";

const httpClient = new HttpClient();

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    httpClient
      .get("users/all")
      .then((response) => {
        response
          .json()
          .then((data: UserResponse) => {
            setUsers(data.users);
          })
          .catch((error) => {
            console.error("Error while parsing users/all", error);
            setUsers([]);
          })
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch((error) => {
        console.error("Fail fetching users/all", error);
        setUsers([]);
      });
  };

  // 👉 AGREGAR ESTO
  const addUserToList = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const updateUserInList = (updatedUser: User) => {
    setUsers(prev => prev.map(u => (u.id === updatedUser.id ? updatedUser : u)));
  };

  const deleteUserFromList = (id: number) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    getUsers,
    addUserToList,
    updateUserInList,
    deleteUserFromList,
    isLoading,
  };
};

export default useGetUsers;