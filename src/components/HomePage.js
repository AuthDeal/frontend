import React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import "../styles/Home.css"
import Header from "../Component/Header";

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div>
                <Header />
                </div>
                <div>
                    <h1 className ="home1">Deals near you </h1>
                    <Link to="/Product/" style={{color:'blue'}}>
                        <div className = "home2">See All</div>
                    </Link>
                </div>

                <div className="home3">
                <Main/>
                </div>
            </div>
            
        );
    }
}
 
export default HomePage;