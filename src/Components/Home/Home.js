import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Team from '../Team/Team';
import './Home.css';


const Home = () => {
    const [teams,setTeams]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])
    return (
        <div>
            <Container>

                <div className="background">
                    <h1>Team tracker</h1>
                    
                </div>
                <div className="Allteam ">
                    {
                        teams.map(team=><Team team={team}></Team>)

                    }

                </div>
                
                




            </Container>
            
        </div>
    );
};

export default Home;