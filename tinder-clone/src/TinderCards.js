import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://specials-images.forbesimg.com/imageserve/5de82785e961e100078f2c1b/960x0.jpg?fit=scale",
        },
        {
            name: "Jeff Bezos",
            url: "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/bezos-1-1595479519.jpg",
        },
    ]);

    const swiped =(direction, nameToDelete)=>{
        console.log("removing: "+nameToDelete);
    };

    const outOfFrame=(name)=>{
        console.log(name+" left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}    
                    
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
            

        </div>
    )
}

export default TinderCards
