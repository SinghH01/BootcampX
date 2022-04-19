const { argv } = require('process');
const { Pool } = require('pg');

//Parameterized Query

let args = process.argv.slice(2);
let values = [`${args[0]}%`, args[1]]

let text = `SELECT students.id, students.name, cohorts.name as cohort_id
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
group by students.id, students.name, cohorts.name
LIMIT $2;`


const pool = new Pool({
  user: 'veersingh',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
pool.query(text, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));