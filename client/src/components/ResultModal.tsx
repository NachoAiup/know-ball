import { Modal } from "flowbite-react";

interface ResultModalProps {
  homeScoreGuess: string;
  awayScoreGuess: string;
  toggleModal: boolean;
  roundPoints: number;
  matchesArr: Match;
  handleNextClick: () => void;
}

function ResultModal({
  homeScoreGuess,
  awayScoreGuess,
  toggleModal,
  roundPoints,
  matchesArr,
  handleNextClick,
}: ResultModalProps) {
  return (
    <>
      <button
        type="submit"
        className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm p-2 lg:px-5 lg:py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
      >
        Submit!
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
                RESULT
              </h3>
            </div>
            <div className="p-6 text-center">
              <p className="mb-8 bg-slate-100 p-2 text-gray-500 lg:text-xl dark:text-gray-400 uppercase tracking-widest font-bold text-gray-900 dark:text-gray-100">
                Your guess:
                <span className="lg:text-4xl ml-4">
                  {homeScoreGuess} : {awayScoreGuess}
                </span>
              </p>
              <p className="mb-8 bg-slate-100 p-2 text-gray-500 lg:text-xl dark:text-gray-400 uppercase tracking-widest font-bold text-gray-900 dark:text-gray-100">
                Correct answer:
                <span className="lg:text-4xl ml-4">
                  {matchesArr.home_score} : {matchesArr.away_score}
                </span>
              </p>
              <p className="mb-8 bg-slate-100 p-2 text-gray-500 lg:text-xl dark:text-gray-400 uppercase tracking-widest font-bold text-gray-900 dark:text-gray-100">
                You got:
                <span className="lg:text-4xl ml-4">{roundPoints} points</span>
              </p>
              <button
                type="button"
                onClick={handleNextClick}
                className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              >
                Next!
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ResultModal;
