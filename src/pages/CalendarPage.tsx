
import React from "react";

const CalendarPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-7 gap-2 mb-2 text-center font-medium">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {/* Previous month days would be grayed out */}
          <div className="h-24 p-2 border text-gray-400">28</div>
          <div className="h-24 p-2 border text-gray-400">29</div>
          <div className="h-24 p-2 border text-gray-400">30</div>
          <div className="h-24 p-2 border">1</div>
          <div className="h-24 p-2 border">2</div>
          <div className="h-24 p-2 border">3</div>
          <div className="h-24 p-2 border">4</div>
          
          {/* Current month days */}
          <div className="h-24 p-2 border">5</div>
          <div className="h-24 p-2 border">6</div>
          <div className="h-24 p-2 border">7</div>
          <div className="h-24 p-2 border">
            8
            <div className="text-xs mt-1 p-1 bg-blue-100 text-blue-800 rounded">React Class</div>
          </div>
          <div className="h-24 p-2 border">9</div>
          <div className="h-24 p-2 border">10</div>
          <div className="h-24 p-2 border">11</div>
          
          {/* More days would follow... */}
          <div className="h-24 p-2 border">12</div>
          <div className="h-24 p-2 border">13</div>
          <div className="h-24 p-2 border">14</div>
          <div className="h-24 p-2 border">15</div>
          <div className="h-24 p-2 border">
            16
            <div className="text-xs mt-1 p-1 bg-green-100 text-green-800 rounded">TypeScript Workshop</div>
          </div>
          <div className="h-24 p-2 border">17</div>
          <div className="h-24 p-2 border">18</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
