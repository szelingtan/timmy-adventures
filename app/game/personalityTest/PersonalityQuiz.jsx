"use client";

import { useState } from "react";

const questions = [
  // Question - Good Morning (Introduction)
  {
    question: "Good Morning! How do you want to go to school today?",
    imgSrc: "./PersonalityQuizImages/INTRO.png",
    options: [
      { text: "Car, for sure!", type: "Grizz" },
      { text: "Bus, of course!", type: "IceBear" },
      { text: "Train is the way to go!", type: "Panda" },
      { text: "Let's walk", type: "Panda" },
    ],
  },
  // Question - Car Option
  {
    question: "Cars? I prefer enviro-maxxing and taking public transport!  Why would you even take cars?",
    imgSrc: "./PersonalityQuizImages/CAR_OPTION.png",
    options: [
      { text: "It's faster that way!", type: "Grizz" },
      { text: "I still need to walk if I take public transport...", type: "IceBear" },
      { text: "My parents offered to drop me off, so why not!", type: "Panda" },
      { text: "Public transport is just... uncomfortable.", type: "Panda" },
    ],
  },
  // Question - WCR Option
  {
    question: "Why not cars? It’s so convenient — and there’s aircon!",
    imgSrc: "./PersonalityQuizImages/WCR_OPTION.png",
    options: [
      { text: "Walking keeps me healthy!", type: "Grizz" },
      { text: "Public transport is eco-friendly!", type: "IceBear" },
      { text: "Traffic jams are so annoying!", type: "Panda" },
      { text: "My family does not have a car.", type: "Panda" },
    ],
  },
  // Question - Zoo
  {
    question: "School’s finally over, let’s head to the zoo to play! How do you want to go there?",
    imgSrc: "./PersonalityQuizImages/ZOO.png",
    options: [
      { text: "Let me call my parents to drive us there!", type: "Panda" },
      { text: "Public transport is the way to go!", type: "IceBear" },
      { text: "Are those bikes? Let’s rent them and cycle there!", type: "Grizz" },
    ],
  },
  // Question - Zoo WCR Option
  {
    question: "What about cars? Are you sure you want to take the public transport, walk or cycle there?",
    imgSrc: "./PersonalityQuizImages/WCR_OPTION.png",
    options: [
      { text: "Of course, that’s more eco-friendly!", type: "IceBear" },
      { text: "If we take the car, the traffic jam is gonna be bad...", type: "Grizz" },
      { text: "I’d love to take the car, but my family doesn’t own one.", type: "Panda" },
    ],
  },
];

const results = [
    {
       bear: "Grizz",
       imgSrc: "./PersonalityQuizImages/Grizz.png",
       descr: "You’re energetic, adventurous, and love bringing people together. You’re the ultimate hype person!",
    },
    {
        bear: "Panda",
        imgSrc: "./PersonalityQuizImages/Panda.png",
        descr: "You’re sweet, a little shy, and super relatable. You care about others and have a soft spot for aesthetic vibes.",
    },
    {
        bear: "Ice Bear",
        imgSrc: "./PersonalityQuizImages/IceBear.png",
        descr: "You’re calm, independent, and always prepared. You have a mysterious coolness and a heart of gold beneath it.",
    },
]

export default function PersonalityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Grizz: 0, Panda: 0, IceBear: 0 });
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (type) => {
    setScores((prevScores) => {
      const updatedScores = {
        ...prevScores,
        [type]: prevScores[type] + 1,
      };
  
      console.log("Updated Scores:", updatedScores); // ✅ Logs scores after update
  
      return updatedScores;
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResult = () => {
    const maxScore = Math.max(scores.Grizz, scores.Panda, scores.IceBear);
    if (scores.Grizz === maxScore) return 0;
    if (scores.Panda === maxScore) return 1;
    return 2;
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
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <img src={questions[currentQuestion].imgSrc} className="rounded-2xl"/>

          <div className="relative w-full bg-[#F9DD81] rounded-full h-16 mb-6 mt-4 text-center flex items-center justify-center font-bold px-4 border-4 border-[#F9DD81]">
            {questions[currentQuestion].question}
          </div>

          <div className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.type)}
                className="bg-[#BFF3F9] px-4 py-2 rounded-md hover:shadow-lg transition transform hover:translate-y-[-4px]"

              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
