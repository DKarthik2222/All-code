select * from person

select firstname, lastname, managerid
from person
where left(firstname,1)='J'

select firstname, lastname, managerid
from person
where dob>'1980-01-01'

select firstname, lastname, managerid
from person
where left(firstname,1)='J'
union
select firstname, lastname, managerid
from person
where dob>'1980-01-01'

select firstname, lastname, managerid
from person
where left(firstname,1)='J'
union all
select firstname, lastname, managerid
from person
where dob>'1980-01-01'

select firstname, lastname, managerid
from person
where left(firstname,1)='J'
union all
select firstname, lastname, managerid
from person
where dob>'1980-01-01'
order by lastname asc


select * from contacttype
select * from role

select * from contacttype
union
select * from role
