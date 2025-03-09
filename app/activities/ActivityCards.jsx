import React from "react";

const activities = [
  { time: "4:00pm - 6:00pm", 
    note: "",
    activity: "Cookie Decorating 🍪", 
    description: "", 
    location: "Chatterbox (Starts at 4:30pm) and Saga Buttery",
    houses: ["Welfare Projects"],
  },
  { time: "6:00pm - 7:00pm", 
    note: "",
    activity: "The Flower Lab: Friendships in Bloom 🌸", 
    description: "Inspired by Grizzy, you can get crafty and work together to create unique flower bouquets from origami and pipe cleaners!", 
    location: "Chatterbox",
    houses: ["Coruscant", "Orianna", "Pyxis", "Evren"],
  },
  { time: "7:00pm - 8:00pm",
    activity: "Scoop and Seek: Love and Luck ⭐", 
    description: "Come to Pan Pan's mystical kitchen party for chicken nuggets, tarot card reading and ice cream making!", 
    location: "Saga Buttery",
    houses: ["Iris", "Dionysus", "Luna", "Elios"],
  },
  { time: "8:00pm - 9:00pm", 
    note: "",
    activity: "Last note standing 🎤", 
    description: "Test your music knowledge and race to match song lyrics in this activity! Then, rock the mic and show your inner Ice Bear in a fun karaoke finale!", 
    location: "Theme Room Blue",
    houses: ["Kyela", "Axel", "Sentinel", "Odyssea"],
  },
  { time: "9:30pm - 11:30pm", 
    note: "",
    activity: "Live release of prizes and winners from lucky draw on website",
    description: "", 
    location: "",
    houses: [],
  },
];

const ActivityCards = () => {
  return (
    <div className="-mt-7 md:mt-0 text-center md:text-left">
      <div>
        <h1 className="text-4xl font-semibold text-[#2e0d0d] mb-1 md:mb-4 pl-2">Activities</h1>
        <h3 className="text-lg font-semibold text-[#2e0d0d] mb-4 pl-2"> 12 February 2025</h3>
      </div>
      <div className="space-y-4">
      {activities.map((item, index) => (
        <div
          key={index}
          className="flex bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all max-w-screen-sm bg-opacity-85"
        >
          <div className="flex flex-col rounded-l-lg h-full">
            <p className="font-semibold text-sm text-left">{item.time}</p>
            <p className="font-semibold text-xs text-left whitespace-pre-line text-[#d02828]">{item.note}</p>
          </div>

          <div className="w-3/4 pl-8 flex flex-col justify-center">
            <p className="font-semibold text-sm whitespace-pre-line">{item.activity}</p>
            <p className="font-semibold text-[#647993] text-sm">{item.location}</p>
            <p className="font-normal text-sm whitespace-pre-line">{item.description}</p>
          </div>
        </div>
      ))}


      </div>
    </div>
  );
};

export default ActivityCards;
