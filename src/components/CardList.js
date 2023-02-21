import React from "react";
import Card from './Card';


const CardList= ({robots})=>{
    // if(true){
    //     throw new Error('NO')
    // }
    return(
        <div className="ma3">
        {
            robots.map((user ,i) =>{
                return (
                <Card 
                    key={robots[i].id} 
                    id={robots[i].id} 
                    email={robots[i].email} 
                    name={robots[i].name} 
                    />
                );
            })
        }
        </div>
    );
}
export default CardList 