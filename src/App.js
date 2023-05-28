import React, { Component, useState, useEffect } from "react";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robot: [],
//       searchfield: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((Response) =>
//       Response.json().then((users) => this.setState({ robot: users }))
//     );
//     this.setState({ robot: Robots });
//   }

//   onsearchChange = (event) => {
//     this.setState({ searchfield: event.target.value });
//   };

//   render() {
//     const filteredRobots = this.state.robot.filter((el) => {
//       return el.name
//         .toLowerCase()
//         .includes(this.state.searchfield.toLowerCase());
//     });

//     if (!this.state.robot) {
//       return <h1 className="tc">Loading...</h1>;
//     } else {
//       return (
//         <div className="tc">
//           <h1 className="f1">Robo Friends</h1>
//           <SearchBox searchChange={this.onsearchChange} />
//           <Scroll>
//             <CardList robots={filteredRobots} />
//           </Scroll>
//         </div>
//       );
//     }
//   }
// }

const App = () => {
  const [Robots, setRobots] = useState([]);
  const [searchfield, setsearchfield] = useState("");
  const [count, setcount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((Response) =>
      Response.json().then((users) => setRobots(users))
    );
    setRobots(Robots);
  }, [Robots]);

  const onsearchChange = (event) => {
    setsearchfield(event.target.value);
  };

  const filteredRobots = Robots.filter((el) => {
    return el.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (!Robots) {
    return <h1 className="tc">Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange={onsearchChange} />
        <button onClick={() => setcount(count + 1)}>Refresh</button>

        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
};

export default App;
