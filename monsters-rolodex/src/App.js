// import { Component } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.componet";
import SearchBox from "./components/search-box/search-box.componet";

/* FUNCTIONAL COMPONENT */ //There is no lifeclicle componet in functional components
const App = () => {
  const [searchField, setSearchFiel] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('rendered')

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users") //taking data from this URL
      .then((reponse) => reponse.json()) //it returns a reponse, whitch we will parse as JSON
      .then((users) => setMonsters(users));
  }, []); // It will fetch only when this part got mounted.

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]); //It will build this code only when either monsters or searchField changes

  //REACT WILL RE RENDER THE COMPONET ONLY IF THE VALUES IN USESTATE ARE DIFFERENT
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchFiel(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder="Searh monsters"
        className="search-box"
      />
      {<CardList monsters={filteredMonsters} />}
    </div>
  );
};

/* CLASS COMPONENT */
// class App extends Component {
//   //constructor runs first
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   //It runs third
//   componentDidMount() {
//     fetch("http://jsonplaceholder.typicode.com/users") //taking data from this URL
//       .then((reponse) => reponse.json()) //it returns a reponse, whitch we will parse as JSON
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }; //JSX the keyname = value of the key => {searchField: searchField}
//     });
//   };

//   //render runs second
//   render() {
//     //Destructuring for optimization
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeHolder="Searh monsters"
//           className="search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
