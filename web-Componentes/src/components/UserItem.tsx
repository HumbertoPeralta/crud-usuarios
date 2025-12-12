import type { User } from "../types/User.type";
import ListItem from "./ListItem";

type UserItemProps = {
  user: User;
  onEdit: (u: User) => void;
  onDelete: (id: number) => void;
};

const UserItem = ({ user, onEdit, onDelete }: UserItemProps) => {
  return (
    <ListItem>
      <>
        <b>{user.id}</b>: {user.name} ({user.email})
        <button style={{ marginLeft: "10px" }} onClick={() => onEdit(user)}>
        Editar
        </button>
        <button
          style={{ marginLeft: "5px", color: "red" }}
          onClick={() => onDelete(user.id)}
        >
          ❌
        </button>
      </>
    </ListItem>
  );
};

export default UserItem;
