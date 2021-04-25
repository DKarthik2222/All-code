select * from person

select managerid, count(*), min(dob), max(dob)
from person
group by managerid

// wrong yet working in some environments
select managerid, count(*), dob
from person
group by managerid

select managerid, left(lastname,1) initial, count(*), min(dob), max(dob)
from person
group by managerid, initial

// wrong yet working in some environments
select managerid, left(lastname,1) initial, count(*), min(dob), max(dob)
from person
group by managerid
