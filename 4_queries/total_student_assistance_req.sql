-- Get the total number of assistance_requests for a student

SELECT COUNT(assistance_requests.id) as total_assistances, students.name as name 
FROM assistance_requests JOIN students
ON student_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY name;