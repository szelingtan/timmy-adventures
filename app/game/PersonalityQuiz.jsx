"use client";

import { useState } from "react";


/* Question Format specs per question block:
 * .initialQuestion:
 *    .question (text)
 *    .imgSrc (relative img link)
 *    .options:
 *        .text (option text),
 *        .followup (ID of followup question, or 'noFollowUp' to go to the next question block)
 * 
 * Afterwards, feedback questions:
 * .ID (set this ID yourself)
 *    .question (text)
 *    .imgSrc (relative img link)
 *    .options:
 *        .text (option text),
 *        .followup (ID of followup question, or 'noFollowUp' to go to the next question block.
 *                    Flexibility to ask further feedback questions, BUT avoid infinite loops.)
 *        .rationale (store result type of follow ups)
*/

const goodMorning = {
  initialQuestion: {
    question: "Good Morning! How do you want to go to school today?",
    imgSrc: "./PersonalityQuizImages/INTRO.png",
    options: [
      { text: "Car, for sure!", followup: "carOption" },
      { text: "Bus, of course!", followup: "WCROption" },
      { text: "Train is the way to go!", followup: "WCROption" },
      { text: "Let's walk", followup: "WCROption" },
    ],
  },
  carOption: {
    question: "Cars? I prefer enviro-maxxing and taking public transport!  Why would you even take cars?",
    imgSrc: "./PersonalityQuizImages/CAR_OPTION.png",
    options: [
      { text: "It's faster that way!", followup: "noFollowUp", rationale: "speed" },
      { text: "I still need to walk if I take public transport...", followup: "noFollowUp", rationale: "convenience"},
      { text: "My parents offered to drop me off, so why not!", followup: "noFollowUp", rationale: "parents" },
      { text: "Public transport is just... uncomfortable.", followup: "noFollowUp", rationale: "comfort" },
    ],
  },
  WCROption: {
    question: "Why not cars? It’s so convenient — and there’s aircon!",
    imgSrc: "./PersonalityQuizImages/WCR_OPTION.png",
    options: [
      { text: "Walking keeps me healthy!", followup: "noFollowUp", rationale: "health" },
      { text: "Public transport is eco-friendly!", followup: "noFollowUp", rationale: "eco" },
      { text: "Traffic jams are so annoying!", followup: "noFollowUp", rationale: "speed" },
      { text: "My family does not have a car.", followup: "noFollowUp", rationale: "parents" },
    ],
  },
};

const zoo = {
  initialQuestion: {
    question: "School’s finally over, let’s head to the zoo to play! How do you want to go there?",
    imgSrc: "./PersonalityQuizImages/ZOO.png",
    options: [
      { text: "Let me call my parents to drive us there!", followup: "noFollowUp" },
      { text: "Public transport is the way to go!", followup: "WCROption" },
      { text: "Are those bikes? Let’s rent them and cycle there!", followup: "WCROption" },
    ],
  },
  WCROption:   {
    question: "What about cars? Are you sure you want to take the public transport, walk or cycle there?",
    imgSrc: "./PersonalityQuizImages/WCR_OPTION.png",
    options: [
      { text: "Of course, that’s more eco-friendly!", followup: "noFollowUp", rationale: "eco" },
      { text: "If we take the car, the traffic jam is gonna be bad...", followup: "noFollowUp", rationale: "speed" },
      { text: "I’d love to take the car, but my family doesn’t own one.", followup: "noFollowUp", rationale: "parents" },
    ],
  }
};

const questions = [
  goodMorning,
  zoo
];

export default function PersonalityQuiz() {
  // current question idx and question id
  const [currQ, setCurrQ] = useState({ idx: 0, question: 'initialQuestion' });
  const [optScores, setOptScores] = useState({ WCROption: 0, carOption: 0 });
  const [rationaleScores, setRationaleScores] = useState({
    health: 0, eco: 0, speed: 0, parents: 0, convenience: 0, comfort: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (opt) => {
    if ("rationale" in opt) {
      setRationaleScores((prevs) => {
        const updatedRationaleScores = {
          ...prevs,
          [opt.rationale]: prevs[opt.rationale] + 1,
        };

        console.log("Updated rationales:", updatedRationaleScores);
        return updatedRationaleScores;
      })
    }

    if (opt.followup != 'noFollowUp') {
      setOptScores((prevScores) => {
        const updatedScores = {
          ...prevScores,
          [opt.followup]: prevScores[opt.followup] + 1,
        };

        setCurrQ((prev) => {
          return {idx: prev.idx, question: opt.followup};
        });


        console.log("Updated option selections:", updatedScores); // ✅ Logs scores after update
    
        return updatedScores;
      });
    } else {
      if (currQ.idx < questions.length - 1) {
        setCurrQ((prev) => {
          return {idx: prev.idx + 1, question: 'initialQuestion'};
        });
      } else {
        setShowResults(true);
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-center bg-[#F6EEEE] shadow-lg rounded-lg">
      {showResults ? (
        <div>
          <h2 className="text-3xl font-bold">You’re most like {results[getResult()].bear}!</h2>
          <img 
                src={results[getResult()].imgSrc} 
                alt="Bear Result"
                className="mx-auto md:w-1/2"
            />
          <p className="mt-4 text-lg">
            {results[getResult()].descr}
          </p>
        </div>
      ) : (
        <div>
          <div className="relative w-full bg-gray-300 rounded-full h-3 mb-6">
            <div
              className="bg-[#171717] h-3 rounded-full"
              style={{ width: `${((currQ.idx + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <img src={questions[currQ.idx][currQ.question].imgSrc} className="rounded-2xl"/>

          <div className="relative w-full bg-[#F9DD81] rounded-full h-16 mb-6 mt-4 text-center flex items-center justify-center font-bold px-4 border-4 border-[#F9DD81]">
            {questions[currQ.idx][currQ.question].question}
          </div>

          <div className="flex flex-col gap-4">
            {questions[currQ.idx][currQ.question].options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(opt)}
                className="bg-[#BFF3F9] px-4 py-2 rounded-md hover:shadow-lg transition transform hover:translate-y-[-4px]"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
