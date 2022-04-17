-- Get the name of all teachers that performed an assistance request during a cohort

SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers 
JOIN assistance_requests on assistance_requests.teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;