import { useState } from "react";
import ResultModal from "./ResultModal";
import { formatDate, calculateScore } from "../utils/rules";
import LoadingSpinner from "./LoadingSpinner";

interface MatchCardProps {
  helpsUsed: boolean;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  matchesArr: Match;
  setCurrentMatchesArrIndex: React.Dispatch<React.SetStateAction<number>>;
  setHelpsUsed: React.Dispatch<React.SetStateAction<boolean>>;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
  currentMatchesArrIndex: number;
}

function MatchCard({
  helpsUsed,
  setPoints,
  matchesArr,
  setCurrentMatchesArrIndex,
  setHelpsUsed,
  setEndGame,
  currentMatchesArrIndex,
}: MatchCardProps) {
  const [homeScoreGuess, setHomeScoreGuess] = useState("");
  const [awayScoreGuess, setAwayScoreGuess] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [roundPoints, setRoundPoints] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (homeScoreGuess && awayScoreGuess) {
      setToggleModal(true);
    } else {
      return;
    }
    const points = calculateScore(
      homeScoreGuess,
      awayScoreGuess,
      matchesArr.home_score,
      matchesArr.away_score,
      helpsUsed
    );
    setRoundPoints(points);
    setPoints((prevState) => prevState + points);
  };

  const handleNextClick = () => {
    if (currentMatchesArrIndex === 4) {
      setToggleModal(false);
      return setEndGame(true);
    }
    setCurrentMatchesArrIndex((prevState) => prevState + 1);
    setHomeScoreGuess("");
    setAwayScoreGuess("");
    setHelpsUsed(false);
    setToggleModal(false);
  };

  return (
    <div className="my-6 bg-white rounded-lg lg:shadow-2xl shadow-xl">
      <div className="flex justify-center items-center gap-2 p-2 font-semibold border-b-4">
        <img
          src="https://assets.codepen.io/285131/pl-logo.svg"
          className="w-6"
        />
        English Premier League {matchesArr.season}
      </div>
      <div className="flex relative">
        <div className="lg:p-10 flex justify-center items-center">
          <div className="flex w-24 lg:w-32 max-h-42 flex-col justify-between items-center">
            {!matchesArr.season ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="lg:w-28 p-2 h-32 flex justify-center items-center">
                  <img
                    src={matchesArr.home_logo}
                    className="lg:w-24 w-16 h-auto"
                  />
                </div>
                <h2 className="text-center w-full mt-2 h-10 font-semibold text-sm lg:text-lg">
                  {matchesArr.home_team}
                </h2>
              </>
            )}
          </div>
        </div>
        <div className="lg:p-8 p-2 flex justify-center items-center">
          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSubmit}
          >
            <div className="text-sm lg:text-lg">
              {matchesArr.match_date &&
                formatDate(matchesArr.match_date)[2] + " "}
              {matchesArr.match_date &&
                formatDate(matchesArr.match_date)[0] + ", "}
              <strong>
                {matchesArr.match_date && formatDate(matchesArr.match_date)[1]}
              </strong>
            </div>
            <div className="text-sm lg:text-md font-bold">
              Gameweek {matchesArr.gameweek}°
            </div>
            <div className="flex items-center">
              <input
                className="lg:w-16 w-12 p-2 hover:border-black text-center lg:text-4xl font-semibold border-solid border-2 rounded-full"
                placeholder="?"
                required
                type="number"
                value={homeScoreGuess}
                onChange={(e) => setHomeScoreGuess(e.target.value)}
              />
              <span className="text-2xl font-semibold ml-2 mr-2 text-slate-400">
                :
              </span>
              <input
                className="lg:w-16 w-12 p-2 hover:border-black text-center lg:text-4xl font-semibold border-solid border-2 rounded-full"
                placeholder="?"
                required
                type="number"
                value={awayScoreGuess}
                onChange={(e) => setAwayScoreGuess(e.target.value)}
              />
            </div>
            <ResultModal
              homeScoreGuess={homeScoreGuess}
              awayScoreGuess={awayScoreGuess}
              toggleModal={toggleModal}
              roundPoints={roundPoints}
              matchesArr={matchesArr}
              handleNextClick={handleNextClick}
            />
          </form>
        </div>
        <div className="lg:p-10 flex justify-center items-center">
          <div className="flex w-24 lg:w-32 max-h-42 flex-col justify-between items-center">
            {!matchesArr.season ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="lg:w-28 p-2 h-32 flex justify-center items-center">
                  <img
                    src={matchesArr.away_logo}
                    className="lg:w-24 w-16 h-auto"
                  />
                </div>
                <h2 className="text-center w-full mt-2 h-10 font-semibold text-sm lg:text-lg">
                  {matchesArr.away_team}
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
