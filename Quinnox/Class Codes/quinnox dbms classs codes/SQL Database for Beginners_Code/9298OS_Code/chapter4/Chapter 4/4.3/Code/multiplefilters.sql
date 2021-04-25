select * from person

select *
from person
where dob>'1970-12-31'

select *
from person
where dob>'1970-12-31'
and managerid=5

select *
from person
where dob>'1970-12-31'
and managerid=5
and id>1

select *
from person
where dob>'1970-12-31'
or managerid=5

// bad
select *
from person
where dob>'1970-12-31'
and managerid=5
or id>2

// better
select *
from person
where (dob>'1970-12-31'
and managerid=5)
or id>2

select *
from person
where dob>'1970-12-31'
and 
(managerid=5 or id>2)




