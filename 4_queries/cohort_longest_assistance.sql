-- cohort with the longest average duration of assistance requests

SELECT cohorts.name as name , AVG(completed_at - started_at) AS average_assistance_time
FROM assistance_requests 
JOIN students ON student_id = students.id 
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC
LIMIT 1;