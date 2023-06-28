import { Modal } from "flowbite-react";
import { useState } from "react";
import { gameRules } from "../utils/rules";

function RulesModal() {
  const [toggleModal, setToggleModal] = useState(true);

  return (
    <>
      <button
        onClick={() => setToggleModal(!toggleModal)}
        className="absolute mt-4 lg:bottom-0 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <span className="relative  font-medium px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          See rules
        </span>
      </button>
      <Modal
        show={toggleModal}
        size={"lg"}
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full bg-orange-200">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 outline outline-offset-2 outline-1 outline-slate-600">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-2xl text-slate-500 font-bold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
                RULES
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
            <div className="p-6 space-y-6">
              <p>{gameRules.description}</p>
              {gameRules.points.map((rule, i) => (
                <p
                  key={i}
                  className="text-xl text-slate-500 font-bold leading-none tracking-tight dark:text-white"
                >
                  {rule.quantity === 1
                    ? rule.quantity + " point:"
                    : rule.quantity + " points:"}
                  <span className="text-base ml-2 text-slate-500 font-bold leading-none tracking-tight dark:text-white">
                    {rule.description}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default RulesModal;
