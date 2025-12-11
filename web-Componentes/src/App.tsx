import ListContainer from './components/ListContainer.tsx';
import UserItem from "./components/UserItem.tsx";
import useGetUsers from "./hooks/useGetUsers.ts";
import addEditForm from "./components/AddEditForm.tsx";
import type {User} from "./types/User.type.ts";
import useCreateEditUser from "./hooks/useCreatedEditUser.ts";

function App() {
  const [list, setList]= useState<string[]>([]);
  const handleOnSubmit = (value: string) => {
    setList([
      ...list,
      value
    ])
  }
  const handleOnSearchSubmit = (value: string) => {
    console.log(
      list.find(e => e === value)
    );
  }
  fetch('http://localhost:3000/ap/users/all'.{
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'Acept': 'aplication/json'
    }
  })
  return(
     <div>
      <h1>Todo list</h1>
      <FormWhitInput
      id='add'
      buttonText='Agregar'
      placeholder='Ingrese una tarea...'
      onSubmit={handleOnSubmit}
      />
      <FormWhitInput
      id='search'
      buttonText='Buscar'
      placeholder='Buscar en mis tareas'
      onSubmit={handleOnSearchSubmit}
      />
      <ListContainer>
        {
          list.map((item,index)=>{
            return(
              <ListItem key={index}>
                {item}
              </ListItem>
            )
          })
        }        
      </ListContainer>
    </div>
  );
}

export default App