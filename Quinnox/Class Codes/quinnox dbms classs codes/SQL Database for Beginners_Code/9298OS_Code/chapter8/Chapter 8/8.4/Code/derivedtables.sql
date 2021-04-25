select * from person

select managerid, count(*) no
from person
group by managerid

select max(no)
from 
(
	select managerid, count(*) no
	from person
	group by managerid
) counts

