const { argv } = require('process');
const { Pool } = require('pg');

let args = process.argv.slice(2);
let cohort = args[0];
let limit = args[1];10

const pool = new Pool({
  user: 'veersingh',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_id
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '${cohort}%'
group by students.id, students.name, cohorts.name
LIMIT ${limit};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));