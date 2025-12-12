import { useState } from "react";
import type { CreateUserPayload, CreateUserResponse, User } from "../types/User.type";
import HttpClient from "../utils/HttpClient";

const httpClient = new HttpClient();

const useCreateEditUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createUser = async (data: CreateUserPayload) => {
    setIsLoading(true);
    try {
      const response = await httpClient.post("users/add", data);
      const userData = await response.json();
      setIsLoading(false);
      return userData as CreateUserResponse;
    } catch (error) {
      console.error("Error while creating user", error);
      setIsLoading(false);
      return null;
    }
  };

  const updateUser = async (user: User) => {
    setIsLoading(true);
      try {
        const response = await httpClient.put("users/update", { user });
        const updatedData = await response.json();
        setIsLoading(false);
        return updatedData as CreateUserResponse;
      } catch (error) {
        console.error("Error while updating user", error);
        setIsLoading(false);
        return null;
      }
  };

  const deleteUser = async (id: number) => {
    try {
      const response = await httpClient.delete(`users/delete/${id}`);
      return response.ok;
    } catch (error) {
      console.error("Error deleting user", error);
      return false;
    }
  };

  return {
    createUser,
    updateUser,     
    deleteUser,    
    isLoading,
  };
};

export default useCreateEditUser;