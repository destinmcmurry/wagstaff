const { db, Homeroom, Student } = require('./server/db/models/index');

const homerooms =
  [
    {
      teacher: 'Ms. Jacobson',
      teacherImg: '/images/Ms-Jacobson.jpg',
      roomNumber: '204',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non velit est. Nulla facilisi. Fusce mollis efficitur ex a dignissim. Phasellus eu lacus et diam consectetur eleifend vel nec nibh. Vestibulum volutpat augue eget odio faucibus scelerisque. Ut vehicula posuere neque sit amet molestie. Donec ac porttitor nisi. Morbi molestie turpis quis massa varius, id porttitor sem tristique.'
      // 8th grade 
    },
    {
      teacher: 'Ms. LaBonz',
      teacherImg: '/images/Ms-LaBonz.jpg',
      roomNumber: '305',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non velit est. Nulla facilisi. Fusce mollis efficitur ex a dignissim. Phasellus eu lacus et diam consectetur eleifend vel nec nibh. Vestibulum volutpat augue eget odio faucibus scelerisque. Ut vehicula posuere neque sit amet molestie. Donec ac porttitor nisi. Morbi molestie turpis quis massa varius, id porttitor sem tristique.'
      // 4th grade
    },
    {
      teacher: 'Ms. Twitchell',
      teacherImg: '/images/Ms-Twitchell.jpg',
      roomNumber: '201',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non velit est. Nulla facilisi. Fusce mollis efficitur ex a dignissim. Phasellus eu lacus et diam consectetur eleifend vel nec nibh. Vestibulum volutpat augue eget odio faucibus scelerisque. Ut vehicula posuere neque sit amet molestie. Donec ac porttitor nisi. Morbi molestie turpis quis massa varius, id porttitor sem tristique.'
      // 6th grade 
    }
  ]

const students = [
    {
      firstName: 'Tina',
      lastName: 'Belcher',
      studentImg: '/images/Tina-Belcher.png',
      gpa: 3.9,
      homeroomId: 1
    },
    {
      firstName: 'Jimmy',
      lastName: 'Pesto Jr.',
      studentImg: '/images/Jimmy-Pesto-Jr.png',
      gpa: 2.5,
      homeroomId: 1
    },
    {
      firstName: 'Tammy',
      lastName: 'Larsen',
      studentImg: '/images/Tammy-Larsen.jpg',
      gpa: 2.1,
      homeroomId: 1
    },
    {
      firstName: 'Jocelyn',
      lastName: 'Unclear',
      studentImg: '/images/Jocelyn.png',
      gpa: 3.3,
      homeroomId: 1
    },
    {
      firstName: 'Zeke',
      lastName: 'Unclear',
      studentImg: '/images/Zeke.png',
      gpa: 2.5,
      homeroomId: 1
    },
    {
      firstName: 'Louise',
      lastName: 'Belcher',
      studentImg: '/images/Louise-Belcher.jpg',
      gpa: 3.7,
      homeroomId: 2
    },
    {
      firstName: 'Andy and Ollie',
      lastName: 'Pesto',
      studentImg: '/images/Andy-and-Ollie-Pesto.png',
      gpa: 3.6,
      homeroomId: 2
    },
    {
      firstName: 'Millie',
      lastName: 'Frock',
      studentImg: '/images/Millie-Frock.jpg',
      gpa: 4.0,
      homeroomId: 2
    },
    {
      firstName: 'Regular-Sized',
      lastName: 'Rudy',
      studentImg: '/images/Regular-Rudy.jpg',
      gpa: 3.9,
      homeroomId: 2
    },
    {
      firstName: 'Gene',
      lastName: 'Belcher',
      studentImg: '/images/Gene-Belcher.png',
      gpa: 2.7,
      homeroomId: 3
    },
    {
      firstName: 'Courtney',
      lastName: 'Wheeler',
      studentImg: '/images/Courtney-Wheeler.png',
      gpa: 3.5,
      homeroomId: 3
    },
    {
      firstName: 'Peter',
      lastName: 'Pescadero',
      studentImg: '/images/Peter-Pescadero.jpg',
      gpa: 3.1,
      homeroomId: 3
    }
  ]

  // separated them intially so that I could see the homerooms' ids, so I could set the student's homeroomIds manually

  // can refactor later..

  const seedHomerooms = () =>
    Promise.all(homerooms.map(homeroom => 
      Homeroom.create(homeroom)));

  const seedStudents = () =>
    Promise.all(students.map(student =>
      Student.create(student)));

  db.sync({force: true})
    .then(() => {
      console.log('Seeding homerooms');
      return seedHomerooms()
    .then(() => {
      console.log('Seeding students');
      return seedStudents()
    })
    .catch(err => 
      console.log('Error while seeding', err.message))
    .then(() => {
      db.close();
      return null;
    })
  });
