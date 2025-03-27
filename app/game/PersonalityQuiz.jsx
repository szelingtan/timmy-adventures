"use client";

import { useState } from "react";

/* Question Format specs per question block:
 * .initialQuestion:
 *    .question (text)
 *    .imgSrc (relative img link)
 *    .options:
 *        .text (option text),
 *        .transport (transport type used)
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
      { text: "Car, for sure!", transport: "Car", followup: "carOption" },
      { text: "Bus, of course!", transport: "WCR", followup: "WCROption" },
      { text: "Train is the way to go!", transport: "WCR", followup: "WCROption" },
      { text: "Let's walk", transport: "WCR", followup: "WCROption" },
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
      { text: "Public transport is eco-friendly!", followup: "noFollowUp", rationale: "env" },
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
      { text: "Let me call my parents to drive us there!", transport: "Car", followup: "noFollowUp" },
      { text: "Public transport is the way to go!", transport: "WCR", followup: "WCROption" },
      { text: "Are those bikes? Let’s rent them and cycle there!", transport: "WCR", followup: "WCROption" },
    ],
  },
  WCROption:   {
    question: "What about cars? Are you sure you want to take the public transport, walk or cycle there?",
    imgSrc: "./PersonalityQuizImages/WCR_OPTION.png",
    options: [
      { text: "Of course, that’s more eco-friendly!", followup: "noFollowUp", rationale: "env" },
      { text: "If we take the car, the traffic jam is gonna be bad...", followup: "noFollowUp", rationale: "speed" },
      { text: "I’d love to take the car, but my family doesn’t own one.", followup: "noFollowUp", rationale: "parents" },
    ],
  },
};

const questions = [
  goodMorning,
  zoo
];

const transportDisplayNames = {
  Car: "Car",
  WCR: "Walk Cycle Ride",
};

const rationaleDisplayNames = {
  health: "Health",
  env: "Environment",
  speed: "Speed",
  parents: "Parents",
  convenience: "Convenience",
  comfort: "Comfort",
};

export default function PersonalityQuiz() {
  // current question idx and question id
  const [currQ, setCurrQ] = useState({ idx: 0, question: 'initialQuestion' });
  const [optScores, setOptScores] = useState({ Car: 0, WCR: 0 });
  const [rationaleScores, setRationaleScores] = useState({
    health: 0, env: 0, speed: 0, parents: 0, convenience: 0, comfort: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (opt) => {
    if ("rationale" in opt) {
      setRationaleScores((prevs) => {
        const updatedRationaleScores = {
          ...prevs,
          [opt.rationale]: prevs[opt.rationale] + 1,
        };
        return updatedRationaleScores;
      });
    }

    if ("transport" in opt) {
      setOptScores((prevScores) => {
        const updatedScores = {
          ...prevScores,
          [opt.transport]: prevScores[opt.transport] + 1,
        };
        return updatedScores;
      });
    }

    if (opt.followup !== 'noFollowUp') {
      setCurrQ((prev) => {
        return { idx: prev.idx, question: opt.followup };
      });
    } else if (currQ.idx < questions.length - 1) {
      setCurrQ((prev) => {
        return { idx: prev.idx + 1, question: 'initialQuestion' };
      });
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-center bg-[#F6EEEE] shadow-lg rounded-lg">
      {showResults ? (
        <div>
          <div>
            <h1 className="text-3xl font-bold">Thank you for participating in Timmy's Adventures!</h1>
          </div>
          <br />
          <div>
            <h2 className="text-xl"> You chose these modes of transport:</h2>
            {Object.entries(optScores).map(([transportType, timesSelected], idx) => {
              if (timesSelected !== 0) {
                return (
                  <h3 key={idx}>
                    {transportDisplayNames[transportType]}: {timesSelected} scenario{timesSelected !== 1 && 's'}
                  </h3>
                );
              }
            })}
          </div>
          <br />
          <div>
            <h2 className="text-xl"> You prioritized these aspects for your choice of transport:</h2>
            {Object.entries(rationaleScores).map(([k, v], idx) => {
              if (v !== 0) {
                return (
                  <h3 key={idx}>
                    {rationaleDisplayNames[k]}: {v} scenario{v !== 1 && 's'}
                  </h3>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="relative w-full bg-gray-300 rounded-full h-3 mb-6">
            <div
              className="bg-[#171717] h-3 rounded-full"
              style={{ width: `${((currQ.idx + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <img src={questions[currQ.idx][currQ.question].imgSrc} className="rounded-2xl" />

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
