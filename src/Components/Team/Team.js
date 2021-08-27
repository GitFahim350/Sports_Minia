import { Button } from  'react-bootstrap';
import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Team = (props) => {
    return (
        <div className="team_card mt-5">
            
            <img src={props.team.strTeamBadge} alt="" />
            <div className="team_inf">
                    <h3>{props.team.strTeam}</h3>
                    <p>Sports type:Football</p>
                    <p> <Link className="arrow" to={`/team/${props.team.strTeamShort}`}>Explore <FontAwesomeIcon icon={faArrowRight} /></Link></p>


            </div>
            
        </div>
    );
};

export default Team;

