select * from person

select managerid, count(*)
from person
group by managerid

select managerid, count(*)
from person
group by managerid
having count(*)>1

select managerid, count(*) directreports
from person
group by managerid
having directreports>1

select managerid, count(*)
from person
group by managerid
having managerid is not null

select managerid, count(*)
from person
group by managerid
having managerid is null

select managerid, count(*) directreports
from person
group by managerid
having managerid is not null
and directreports>1
