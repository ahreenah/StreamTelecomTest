import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

function App() {
  let users = [{
    fullname:"Иванов Иван Иванович",
    email:"asdas@sdsfs.dsfds",
    phone:"+70000000000"
  },{
    fullname:"Петрова Арина Олеговна",
    email:"arina123@yandex.ru",
    phone:"+79031234532"
  },{
    fullname:"Пушкарева Василиса Алексеевна",
    email:"vasya@gmail.com",
    phone:"+79999999999"
  }]
  return (
    <div className="App" style={{margin:30}}>
      <UserList list={users}/>
    </div>
  );
}

export default App;
