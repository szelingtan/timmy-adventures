"use client";

import { useState } from 'react';

const ActivitiesPage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [countdown, setCountdown] = useState({ days: '--', hours: '--', mins: '--' });
  const [groupCode, setGroupCode] = useState('');

  // Leaderboard data
  const leaderboard = [
    { rank: 1, user: 'user1234', points: 2500 },
    { rank: 2, user: 'user1235', points: 2300 },
    { rank: 3, user: 'user1234', points: 2100 },
  ];

  // Timeline data
  const timeline = [
    {
      date: '11 February 2025, Tuesday',
      activities: [
        {
          name: 'Valentine Card Making',
          location: 'Student Lounge',
          time: '10:00 AM - 12:00 PM'
        },
        {
          name: 'Love Letter Writing',
          location: 'Library',
          time: '2:00 PM - 4:00 PM'
        }
      ]
    },
    {
      date: '12 February 2025, Wednesday',
      activities: [
        {
          name: 'Couple Games',
          location: 'Main Hall',
          time: '11:00 AM - 1:00 PM'
        },
        {
          name: 'Movie Night',
          location: 'Auditorium',
          time: '6:00 PM - 9:00 PM'
        }
      ]
    }
  ];

  const Navigation = () => (
    <div className="sticky top-0 left-0 right-0 z-50">
      <div className="bg-blue-400 p-4 text-white text-center text-xl">
        NUSC Valentines Day 2025
      </div>
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="absolute top-4 right-4 z-50"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <div className={`h-0.5 w-full bg-white transform transition-transform ${isNavOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-full bg-white transition-opacity ${isNavOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-full bg-white transform transition-transform ${isNavOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {isNavOpen && (
        <nav className="fixed top-0 right-0 w-64 h-full bg-blue-600 p-6 shadow-lg z-40">
          <div className="flex flex-col space-y-4 mt-12">
            {['home', 'leaderboard', 'timeline'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setIsNavOpen(false);
                }}
                className="text-white text-left hover:bg-blue-700 px-4 py-2 rounded"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );

  const Header = () => (
    <header className="absolute top-0 left-0 w-full p-4 bg-blue-400 text-white text-center text-xl z-10">
      NUSC Valentines Day 2025
    </header>
  );

  const HomePage = () => (
    <div className="relative w-full min-h-screen bg-blue-200">
      {/* Image Section */}
      <div className="relative w-full h-screen">
        <img
          src="/we-bare-bears.png" // Ensure the image path is correct
          alt="We Bare Bears"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
  
      {/* Countdown Section */}
      <div className="w-full bg-white py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          First Activity In:
        </h2>
        <div className="flex justify-center gap-6">
          <div className="bg-blue-100 p-6 rounded shadow-lg text-center">
            <div className="text-3xl font-bold">{countdown.days}</div>
            <div className="text-sm">DAYS</div>
          </div>
          <div className="bg-blue-100 p-6 rounded shadow-lg text-center">
            <div className="text-3xl font-bold">{countdown.hours}</div>
            <div className="text-sm">HOURS</div>
          </div>
          <div className="bg-blue-100 p-6 rounded shadow-lg text-center">
            <div className="text-3xl font-bold">{countdown.minutes}</div>
            <div className="text-sm">MINUTES</div>
          </div>
        </div>
      </div>
    </div>
  );
  


  const LeaderboardPage = () => (
    <div className="relative w-full min-h-screen bg-blue-200">
      <div className="pt-16 px-4">
        <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold mb-4">LEADERBOARD</h2>
          <div className="space-y-4">
            {leaderboard.map((entry) => (
              <div
                key={entry.rank}
                className="flex items-center bg-blue-100 p-4 rounded"
              >
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  {entry.rank}
                </div>
                <div className="ml-4 flex-1">
                  <div className="font-medium">{entry.user}</div>
                  <div className="text-sm text-gray-600">{entry.points} points</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">CHECK YOUR GROUP POINTS:</h3>
            <input
              type="text"
              placeholder="Enter your group code"
              value={groupCode}
              onChange={(e) => setGroupCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const TimelinePage = () => (
    <div className="relative w-full min-h-screen bg-blue-200">
      <div className="pt-16 px-4">
        <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold mb-4">TIMELINE</h2>
          <div className="space-y-6">
            {timeline.map((day) => (
              <div key={day.date}>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">
                  {day.date}
                </h3>
                <div className="space-y-3">
                  {day.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 p-4 rounded"
                    >
                      <div className="font-medium">{activity.name}</div>
                      <div className="text-sm text-gray-600">{activity.location}</div>
                      <div className="text-sm text-gray-600">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-blue-200">
      <Header />
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'leaderboard' && <LeaderboardPage />}
      {currentPage === 'timeline' && <TimelinePage />}
    </div>
  );
};

export default ActivitiesPage;