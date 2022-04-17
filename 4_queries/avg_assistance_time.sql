-- average time of an assistance request

SELECT AVG(completed_at - started_at) as average_assistance_request_duration
from assistance_requests;