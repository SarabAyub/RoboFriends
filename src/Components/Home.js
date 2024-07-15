import React , {useEffect, useState} from 'react'
import { useRobots } from './useRobots'
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import { NavBar } from './NavBar';

const Home = () => {
    const { robots, deleteRobot } = useRobots();
    const [robos, setRobos] = useState(robots);
    const [searchfield, setSearchField] = useState('');

    useEffect(() => {
        setRobos(robots);
    }, [robots]);

    const filteredRobots = robos.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })


    const handleDelete = (id) => {
        deleteRobot(id);
    }

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    } 

    return (
        <div className="tc">
            <NavBar />
            <h1>RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange} />
            <CardList robots={filteredRobots} onDelete={handleDelete} />
        </div>
    );
}

export default Home; 








// import React, { Component } from "react";
// import CardList from "./CardList";
// import SearchBox from "./SearchBox"
// import RobotsService from "../RobotsService";
// import './Home.css';
// import { NavBar } from "./NavBar";

// class Home extends Component {



//     constructor() {
//         super();
//         this.rs = new RobotsService()
//         this.state = {
//             robots:[],
//             searchfield: ''
//         }
//     }

//     componentDidMount () {
//         this.setState({robots:this.rs.getRobots()})
//     }

//     handleDelete = (id) => {
//         this.rs.deleteRobot(id);
//         this.setState({robots:this.rs.getRobots()})
//     };



//     onSearchChange = (event) => {
//         this.setState({ searchfield: event.target.value });
//     }

//     render() {
//         const filteredRobots = this.state.robots.filter((robot) => {
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
//         })
//         return (
//             <div className="tc">
//                 <NavBar />
//                 <h1>RoboFriends</h1>
//                 <SearchBox onSearchChange={this.onSearchChange} />
//                 <CardList robots={filteredRobots} onDelete={this.handleDelete} />
//             </div>
//         );
//     }
// }

// export default Home;