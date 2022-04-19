const { Pool } = require('pg');
const { argv } = require('process');

const pool = new Pool({
  user: 'veersingh',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// Parameterized Query
const values = [`${process.argv[2] || 'JUL02'}`];

const text = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort, COUNT(assistance_requests.*) as total_assistances
FROM teachers 
JOIN assistance_requests on assistance_requests.teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
GROUP BY teacher, cohort
ORDER BY teacher;
`;

pool.query(text, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort} : ${user.teacher}`);
  }) 
})
.catch(err => console.error('query error', err.stack));