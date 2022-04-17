SELECT cohorts.name as cohort_name, COUNT(students.*) as student_count
FROM cohorts JOIN students 
ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
HAVING COUNT(students.*) > 17
ORDER BY student_count;
