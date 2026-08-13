export const mockStudentSchedule = [
  {
    id: '1',
    time: '09:00 AM',
    endTime: '10:20 AM',
    course: 'Data Structures',
    room: 'Room 302',
    teacher: 'Dr. Rahman',
    status: 'completed',
  },
  {
    id: '2',
    time: '11:30 AM',
    endTime: '12:50 PM',
    course: 'Software Engineering',
    room: 'Room 405',
    teacher: 'Dr. Ahmed',
    status: 'starting-soon',
  },
  {
    id: '3',
    time: '02:00 PM',
    endTime: '03:20 PM',
    course: 'Database Systems',
    room: 'Room 210',
    teacher: 'Dr. Karim',
    status: 'upcoming',
  }
];

export const mockStudentAttendance = [
  { course: 'Data Structures', percentage: 92 },
  { course: 'Software Engineering', percentage: 87 },
  { course: 'Database Systems', percentage: 85 },
  { course: 'Algorithms', percentage: 94 },
];

export const mockEvents = [
  {
    id: '1',
    title: 'Robotics Workshop',
    date: '14 Aug',
    location: 'Auditorium',
    status: 'Registered'
  },
  {
    id: '2',
    title: 'Programming Contest',
    date: '18 Aug',
    location: 'CSE Lab',
    status: 'Register'
  },
  {
    id: '3',
    title: 'Career Seminar',
    date: '21 Aug',
    location: 'Hall Room',
    status: 'Register'
  }
];

export const mockRecentUpdates = [
  { id: '1', message: 'Bus 02 reached Library', time: '2 min ago', type: 'info' },
  { id: '2', message: 'Room 405 class started', time: '5 min ago', type: 'success' },
  { id: '3', message: 'New exam notice published', time: '20 min ago', type: 'warning' },
  { id: '4', message: 'Event registration confirmed', time: '1 hr ago', type: 'info' },
];

export const mockBusStatus = {
  busId: 'Bus 02',
  status: 'On Route',
  currentStop: 'Library',
  nextStop: 'Engineering Building',
  eta: '4 min',
  route: ['Main Gate', 'Library', 'Engineering', 'Dormitory'],
  currentStopIndex: 1
};
