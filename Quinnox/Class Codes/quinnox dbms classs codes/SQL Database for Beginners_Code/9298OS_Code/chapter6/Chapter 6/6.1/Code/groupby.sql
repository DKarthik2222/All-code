select * from person

select managerid
from person
group by managerid

select count(*) from person

select managerid, count(*)
from person
group by managerid

select left(firstname,1) initial, count(*)
from person
group by initial

//doesn't work
select initial, count(*)
from person
group by left(firstname,1) initial

select managerid, left(firstname,1) initial, count(*)
from person
group by managerid, initial

select managerid, count(*), min(dob), max(dob)
from person
group by managerid
