import { Layers, Briefcase, PenTool, ShoppingBag, Activity, DollarSign } from 'react-feather'
// import * as ROUTES from '../../constants/routes'
export const SurveyData = {
  options: {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: 'series-1',
      data: [90, 40, 55, 20, 69, 34, 88, 31],
    },
  ],
  colors: ['#F3B415', '#F27036', '#663F59'],
}
export const OverallStatistics = [
  {
    name: 'Dashboard',
    number: 20,
    icon: <Layers />,
  },
  {
    name: 'Appointments',
    number: 50,
    icon: <Briefcase />,
  },
  {
    name: 'Doctors',
    number: 46,
    icon: <PenTool />,
  },
  {
    name: 'Departments',
    number: 83,
    icon: <ShoppingBag />,
  },
]
export const Income = [
  {
    series: [
      {
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
          '12/11/2000',
          '1/11/2001',
          '2/11/2001',
          '3/11/2001',
          '4/11/2001',
          '5/11/2001',
          '6/11/2001',
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          },
        },
      },
      title: {
        text: 'This Week',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['red'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40,
      },
    },
  },
  {
    series: [
      {
        name: 'Sales',
        data: [6, 4, 11, 14, 30, 40, 25, 11, 13, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
          '12/11/2000',
          '1/11/2001',
          '2/11/2001',
          '3/11/2001',
          '4/11/2001',
          '5/11/2001',
          '6/11/2001',
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          },
        },
      },
      title: {
        text: 'This Month',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['yellow'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40,
      },
    },
  },
]
export const AppointmentActivityTableData = [
  {
    avatar: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
    name: 'Leslie Alexander',
    email: 'lesie.alexander@example.com',
    date: '10/10/2020',
    visit_time: '09:15-09:45am',
    doctor: 'Dr. Jacob Jones',
    conditions: 'Mumps Stage II',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Ronald Richards',
    email: 'ronald.richards@example.com',
    date: '10/12/2020',
    visit_time: '12:00-12:45pm',
    doctor: 'Dr. Theresa Webb',
    conditions: 'Depression',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    date: '10/13/2020',
    visit_time: '01:15-01:45pm',
    doctor: 'Dr. Jacob Jones',
    conditions: 'Arthritis',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Robert Fox',
    email: 'robert.fox@gmail.com',
    date: '10/14/2020',
    visit_time: '02:00-02:45pm',
    doctor: 'Dr. Arlene McCoy',
    conditions: 'Fracture',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Jenny Wilson',
    email: 'jenny.wilson@example.com',
    date: '10/15/2020',
    visit_time: '12:00-12:45pm',
    doctor: 'Dr. Esther Howard',
    conditions: 'Depression',
  },
]
export const TrafficIssues = [
  {
    shit: 'shit',
  },
]
