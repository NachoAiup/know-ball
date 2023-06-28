import { Modal } from "flowbite-react";

interface EndGameModalProps {
  endGame: boolean;
  points: number;
}

function EndGameModal({ endGame, points }: EndGameModalProps) {
  return (
    <>
      <Modal
        show={endGame}
        position="center"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-emerald-100 rounded-lg shadow dark:bg-gray-700  outline outline-offset-2 outline-1 outline-slate-600 flex flex-col items-center justify-center">
            <h3 className="text-lg italic tracking-wide text-center p-10 text-slate-500 font-bold leading-none tracking-tight md:text-5xl lg:text-3xl dark:text-white">
              FINAL SCORE:{" "}
              <strong>
                {points} POINT{points !== 1 && "S"}
              </strong>
            </h3>
            <button
              type="submit"
              onClick={() => window.location.reload()}
              className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm p-2 lg:px-5 lg:py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              Play again!
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EndGameModal;
