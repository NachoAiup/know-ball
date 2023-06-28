import { useEffect, useState } from "react";
import "./App.css";
import RulesModal from "./components/RulesModal";
import LineupsModal from "./components/LineupsModal";
import MatchCard from "./components/MatchCard";
import EndGameModal from "./components/EndGameModal";
import { dataInitialState } from "./utils/rules";

const API_URL = "http://localhost:5000/api";

function App() {
  const [helpsUsed, setHelpsUsed] = useState(false);
  const [points, setPoints] = useState(0);
  const [matchesArr, setMatchesArr] = useState<Matches>(dataInitialState);
  const [currentMatchesArrIndex, setCurrentMatchesArrIndex] = useState(0);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMatchesArr(data));
  }, []);

  return (
    <main className="relative">
      <div className="flex lg:flex-row flex-col relative overflow-hidden">
        <div
          className="w-full bg-center lg:bg-left opacity-90 hover:opacity-100 lg:w-80 lg:h-screen lg:h-40 text-center lg:text-right lg:p-5 shadow-2xl flex flex-col items-center lg:justify-end lg:items-end"
          style={{
            backgroundImage:
              "url(https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-04/Tottenham%20Stadium.jpg?itok=TLTD0HBM)",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-white text-2xl lg:text-6xl">
            know <br></br> ball
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-screen">
          <div className="flex flex-col justify-center items-center">
            <h1 className="my-6 text-center lg:mb-12 text-4xl text-slate-500 font-medium leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
              Points: {points}
            </h1>
            <LineupsModal
              setHelpsUsed={setHelpsUsed}
              matchesArr={matchesArr[currentMatchesArrIndex]}
            />
          </div>
          <MatchCard
            helpsUsed={helpsUsed}
            setHelpsUsed={setHelpsUsed}
            setPoints={setPoints}
            matchesArr={matchesArr[currentMatchesArrIndex]}
            setCurrentMatchesArrIndex={setCurrentMatchesArrIndex}
            currentMatchesArrIndex={currentMatchesArrIndex}
            setEndGame={setEndGame}
          />
        </div>
      </div>
      <RulesModal />
      <EndGameModal endGame={endGame} points={points} />
    </main>
  );
}

export default App;
