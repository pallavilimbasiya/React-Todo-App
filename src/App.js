// import logo from './logo.svg';
// import {} from 'react';
// import React,{component} from 'react';
import './App.css';

import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
// import React, { useState } from 'react';
import { useState } from "react";
import { useEffect } from 'react';
// write this on terminal to import react router
// npm install react-router-dom@5.2.0
import {
  BrowserRouter as Router,
  Switch,
  // Routes,
  Route
} from "react-router-dom";

import Test from './MyComponents/Test';
import About from './MyComponents/About';




function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
    // console.log(initTodo)
  }



  const onDelete = (todo) => {
    // console.log("I am on delete of Todo", todo);



    // setTodos(todos =>{
    //      return todo;
    // });

    setTodos(todos.filter((e) => {
      return e != todo;
    }));


    // localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addtodo = (title, desc) => {
    // console.log(title,desc);

    // to find last todo sno and add 1 for newest added todo
    let sno;
    if (todos.length == 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc

    }
    // console.log(myTodo)

    setTodos([...todos, myTodo]);

    // to store on local, so when page reload it keeps data
    localStorage.setItem("todos", JSON.stringify(todos));

  }



  // const [todos, setTodos] = useState([
  // {
  //     sno: 1,
  //     title: "First work title",
  //     desc: "first work to do"
  // },
  // {
  //     sno: 2,
  //     title: "Second work title",
  //     desc: "second work to do"
  // },
  // {
  //     sno: 3,
  //     title: "Third work title",
  //     desc: "third work to do"
  // }
  // ]);

  const [todos, setTodos] = useState(initTodo);


  // use useeffect hooks (second argument is optional)
  // useEffect(() => {
  //   localStorage.setItem("todos",JSON.stringify(todos));
  // },[todos]);


  // whenever todos are changed, useeffect function automatically run and it save new todos in localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });




  let mywrapperstyle = {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "82vh"
  }

  return (

    <>

      <Router>
        <Header title="My TodosList" searchBar={true} />

        <Switch>

          <Route path="/" exact render={() => {
            return (
              <div className="container py-5" style={mywrapperstyle}>
                <AddTodo addTodo={addtodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </div>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/test">
            <Test />
          </Route>

        </Switch>

        <Footer />


      </Router>


    </>

  );
}

export default App;
