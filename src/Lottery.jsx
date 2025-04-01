import { useState } from "react";
import "./Lottery.css";
import { generateRandom, sum } from "./Helper";

export default function Lottery() {
    const [lottery, setLottery] = useState(() => generateRandom(3));  // Lazy initialization
    let isWinner = sum(lottery) === 15;

    function generateTicket (){
        setLottery(generateRandom(3));
    
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="Lottery">
                <span>{lottery[0]}</span>
                <span>{lottery[1]}</span>
                <span>{lottery[2]}</span>
            </div>
            <br />
            <button onClick={generateTicket}>Buy Ticket</button> 
            <h2>{isWinner ? "Hurrah you have won" : "Try again babe"}</h2>
        </div>
    );
}