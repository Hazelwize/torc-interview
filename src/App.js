import './App.css';
import List from './components/List'
import {useState} from 'react'
//4 lists

// a name for each

// different todos per user

function App() {
  const [users, setUsers] = useState([{name: 'Winnie', todos:['buy eggs','buy milk']},{name:'Brad', todos:['buy meat','buy vegi']},{name:'Bob', todos: ['buy eggs', 'buy apples']},{name:'Thomas', todos:['buy ham', 'buy bananas']}])
  
  function moveLeft(userId, i){
    let newArr = users.slice()
    //take item from userId.todos[i]
     //variable of above todo
    let todo = newArr[userId].todos.splice(i,1)
   
     //insert into userId - 1.todos.splice(i,0,)  
    if(userId === 0){
      newArr[newArr.length - 1].todos.splice(i,0,todo)
    }else{
      newArr[userId - 1].todos.splice(i,0,todo)
    }
    setUsers(newArr)
  }
  
  function moveRight(userId, i){
    let newArr = users.slice()
    //take item from userId.todos[i]
     //variable of above todo
    let todo = newArr[userId].todos.splice(i,1)
     //insert into userId - 1.todos.splice(i,0,)  
    if(userId === newArr.length-1){
      newArr[0].todos.splice(i,0,todo)
    }else{
      newArr[userId + 1].todos.splice(i,0,todo)
    }
    setUsers(newArr)
  }
  function addTask(userId, todo){
    let newArr = users.slice()
    newArr[userId].todos.push(todo)
    setUsers(newArr)
  }
  return (
    <div className="App">
      {users.map((user, i) => {
        return(
          <List addTask={addTask} moveLeft={moveLeft} moveRight={moveRight} userId={i} user={user}/>
        )
      })}
    </div>
  );
}

export default App;
