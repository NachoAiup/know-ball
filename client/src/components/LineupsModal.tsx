import { Modal } from "flowbite-react";
import { nanoid } from "nanoid";
import { useState } from "react";

interface LineupsModalProps {
  setHelpsUsed: React.Dispatch<React.SetStateAction<boolean>>;
  matchesArr: Match;
}

function LineupsModal({ setHelpsUsed, matchesArr }: LineupsModalProps) {
  const [toggleModal, setToggleModal] = useState(false);
  const [homeTeamSelected, setHomeTeamSelected] = useState(true);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setToggleModal(!toggleModal);
          setHelpsUsed(true);
        }}
        className="text-black w-44 justify-center bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="eye"
          className="w-4 mr-1"
        >
          <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path>
        </svg>
        Reveal lineups
      </button>
      <Modal
        show={toggleModal}
        size="lg"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700  outline outline-offset-2 outline-1 outline-slate-600">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-2xl text-slate-500 font-bold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
                LINEUPS
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm lg:p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setToggleModal(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 flex justify-between relative">
              <div className="sm:hidden absolute top-0 left-0">
                <button
                  onClick={() => setHomeTeamSelected(true)}
                  className={`p-1 ${
                    homeTeamSelected && "underline underline-offset-8 font-bold"
                  } text-sm `}
                >
                  {matchesArr.home_team}
                </button>
                <button
                  className={`p-1 ${
                    !homeTeamSelected &&
                    "underline underline-offset-8 font-bold"
                  } text-sm `}
                  onClick={() => setHomeTeamSelected(false)}
                >
                  {matchesArr.away_team}
                </button>
              </div>
              <ul className="sm:hidden mt-5">
                {(homeTeamSelected
                  ? JSON.parse(matchesArr.home_lineup)
                  : JSON.parse(matchesArr.away_lineup)
                )
                  ?.sort((a: any, b: any) => {
                    return a.number - b.number;
                  })
                  .map((x: any) => (
                    <li key={nanoid()} className="lg:text-base text-sm">
                      <strong>{x.number && x.number + ". "}</strong>
                      {x.name}
                    </li>
                  ))}
              </ul>
              <div className="hidden sm:block">
                <p className="sm:block hidden font-bold h-10 italic lg:text-lg mb-2">
                  {matchesArr.home_team}
                </p>
                <ul>
                  {JSON.parse(matchesArr.home_lineup)
                    .sort((a: any, b: any) => {
                      return a.number - b.number;
                    })
                    .map((x: any) => (
                      <li key={nanoid()} className="lg:text-base text-sm">
                        <strong>{x.number && x.number + ". "}</strong>
                        {x.name}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="hidden sm:block">
                <p className="sm:block hidden font-bold h-10 italic lg:text-lg mb-2">
                  {matchesArr.away_team}
                </p>
                <ul>
                  {JSON.parse(matchesArr.away_lineup)
                    ?.sort((a: any, b: any) => {
                      return a.number - b.number;
                    })
                    .map((x: any) => (
                      <li key={nanoid()} className="lg:text-base text-sm">
                        <strong>{x.number && x.number + ". "}</strong>
                        {x.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LineupsModal;
