import { useState } from "react"

export default function Team(){

    const [team,setTeam]=useState(11);

    const teamUp=()=>{
        const teamUp=team+1;
        setTeam(teamUp);
    }

    const teamDown=()=>{
        if(team>0){
            const teamDown=team-1;
            setTeam(teamDown);
        }
    }

    const reset=()=>{
        setTeam(11);
    }


    const teamStyle={
        color:team>=11?"green":"red",
        border:team>=11?"2px solid green":"2px solid red",
        margin:"10px"
        
    }

    return(
        <div style={teamStyle}>
            <h1>Team:{team}</h1>
            <button onClick={teamUp}>Add</button>
            <button onClick={teamDown}>Remove</button>
            <button onClick={reset} >Reset</button>
        </div>
          )
}