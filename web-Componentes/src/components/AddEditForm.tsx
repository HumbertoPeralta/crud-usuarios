import { useState, useEffect } from "react";
import type { User } from "../types/User.type";

const formDefaultValue: User = {
  id: 0,
  email: '',
  name: '',
  created: ''
}

type AddEditFormProps = {
  onSubmit: (value: User) => void;
  onCancel: () => void;
  userEditing?: User | null;
  loading?: boolean;
};

const AddEditForm = ({
  onSubmit,
  loading,
  userEditing,
  onCancel,
}: AddEditFormProps) => {

  const [formState, setFormState] = useState<User>(formDefaultValue);

  // Cargar datos cuando se edita
  useEffect(() => {
    if (userEditing) {
      setFormState(userEditing);
    } else {
      setFormState(formDefaultValue);
    }
  }, [userEditing]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    onSubmit(formState);
  };

  const handleInputChange = (key: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [key]: event.target.value
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        id="email"
        type="email"
        placeholder="Inserte su email"
        value={formState.email}
        onChange={handleInputChange('email')}
        disabled={loading}
      />

      <input
        id="name"
        type="text"
        placeholder="Inserte su nombre"
        value={formState.name}
        onChange={handleInputChange('name')}
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {userEditing ? "Actualizar" : "Guardar"}
      </button>

      {userEditing && (
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default AddEditForm;
