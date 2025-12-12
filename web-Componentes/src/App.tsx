import { useEffect, useState } from 'react';
import FormWithInput from './components/FormWithInput.tsx';
import ListContainer from './components/ListContainer.tsx';
import ListItem from './components/ListItem.tsx';
import HttpClient from './utils/HttpClient.ts';
import type { User, UserResponse } from './types/User.type.ts';
import UserItem from './components/UserItem.tsx';


const httpClient = new HttpClient();

function App() {
  const [list, setList]= useState<User[]>([]);
  const handleOnSubmit = (value: string) => {
    //setList([
    // ...list,
    //  value
    //])
  };

  useEffect(()=>{
    httpClient.get('users/all').then((response) =>{
      response.json().then((data: UserResponse) => {
        console.log('usuarios:',data)
        setList(data.users);
      }).catch((error) =>{
        setList([]);
        console.error('Error while parsing users/all',error)
      })
    }).catch((error) =>{
      setList([]);
      console.error('Fail fetching users/all',error)
    })
  }, []);

  return(
     <div>
      <h1>Todo list</h1>
      <FormWithInput
      id='add'
      buttonText='Agregar'
      placeholder='Ingrese una tarea...'
      onSubmit={handleOnSubmit}
      />
      <FormWithInput
      id='search'
      buttonText='Buscar'
      placeholder='Buscar en mis tareas'
      onSubmit={handleOnSubmit}
      />
      <ListContainer>
        {list.map((item)=>{ 
            return <UserItem key={item.id} user={item} />
          })}        
      </ListContainer>
    </div>
  );
}

export default App