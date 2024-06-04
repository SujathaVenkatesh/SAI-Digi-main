// import React, { useState } from 'react';
// import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, parseISO } from 'date-fns';

// const CustomCalendar = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);

//   const renderHeader = () => {
//     return (
//       <div className="flex justify-between items-center p-2">
//         <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
//           Prev
//         </button>
//         <div>
//           <span>{format(currentMonth, 'MMMM yyyy')}</span>
//         </div>
//         <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
//           Next
//         </button>
//       </div>
//     );
//   };

//   const renderDays = () => {
//     const days = [];
//     const startDate = startOfWeek(currentMonth);

//     for (let i = 0; i < 7; i++) {
//       days.push(
//         <div className="w-10 h-10 flex justify-center items-center" key={i}>
//           {format(addDays(startDate, i), 'EEEEEE')}
//         </div>
//       );
//     }

//     return <div className="flex">{days}</div>;
//   };

//   const renderCells = () => {
//     const monthStart = startOfMonth(currentMonth);
//     const monthEnd = endOfMonth(monthStart);
//     const startDate = startOfWeek(monthStart);
//     const endDate = endOfWeek(monthEnd);

//     const rows = [];
//     let days = [];
//     let day = startDate;
//     let formattedDate = '';

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         formattedDate = format(day, 'd');
//         const cloneDay = day;
//         days.push(
//           <div
//             className={`w-10 h-10 flex justify-center items-center cursor-pointer ${!isSameMonth(day, monthStart) ? 'text-gray-400' : isSameDay(day, selectedDate) ? 'bg-blue-500 text-white' : ''}`}
//             key={day}
//             onClick={() => setSelectedDate(parseISO(cloneDay))}
//           >
//             <span>{formattedDate}</span>
//           </div>
//         );
//         day = addDays(day, 1);
//       }
//       rows.push(
//         <div className="flex" key={day}>
//           {days}
//         </div>
//       );
//       days = [];
//     }
//     return <div>{rows}</div>;
//   };

//   return (
//     <div className="w-full max-w-xs mx-auto">
//       {renderHeader()}
//       {renderDays()}
//       {renderCells()}
//     </div>
//   );
// };

// export default CustomCalendar;
