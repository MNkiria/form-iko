import React from "react";
import { Link } from 'react-router-dom';

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import './UserItem.css'
import reactRouterDom from "react-router-dom";

const UserItem = props => {
    return (
        <li className="user-item">
            
            <Card className="user-item__content">
                <Link to={`/${props.id}/events`}>
                <div className="user-item__image">           
                    <Avatar image={props.image} alt={props.name} />
                </div> 

            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.eventCount} {props.eventCount === 1 ? 'Event' : 'Events'}</h3>
            </div> 
            </Link> 
            </Card>   
             
        </li>
    );
};

export default UserItem;