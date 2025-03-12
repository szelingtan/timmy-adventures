"use client";

import { useState } from "react";

const questions = [
  // Question - WCR Option
  {
    question: "Why not cars? It’s so convenient — and there’s aircon! ",
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
  {
    question: "You come across a stray puppy! What do you do?",
    imgSrc: "./PersonalityQuizImages/Puppy.png",
    options: [
      { text: "Try to name it something cool and make it your adventure buddy", type: "Grizz" },
      { text: "Take pics and post them to find its owner", type: "Panda" },
      { text: "Build it a tiny shelter and care for it", type: "IceBear" },
    ],
  },
  {
    question: "The bears start arguing. How do you handle it?",
    imgSrc: "./PersonalityQuizImages/Argument.jpg",
    options: [
      { text: "Jump in and hype everyone up for a group hug", type: "Grizz" },
      { text: "Say something cool and mysterious to break the tension", type: "IceBear" },
      { text: "Awkwardly try to mediate, but you’re low-key stressed", type: "Panda" },
    ],
  },
  {
    question: "It’s lunch time! What’s your ideal meal?",
    imgSrc: "./PersonalityQuizImages/Lunch.jpg",
    options: [
      { text: "Sushi or something aesthetic", type: "Panda" },
      { text: "A giant burger with fries", type: "Grizz" },
      { text: "Home-cooked stew you made yourself", type: "IceBear" },
    ],
  },
  {
    question: "The day is ending, and you have one last chance to chill with the bears. What’s your move?",
    imgSrc: "./PersonalityQuizImages/Chilling.jpg",
    options: [
      { text: "Quietly enjoy the stars while sipping tea", type: "IceBear" },
      { text: "Crack jokes around a campfire", type: "Grizz" },
      { text: "Snap a photo for your scrapbook", type: "Panda" },
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
