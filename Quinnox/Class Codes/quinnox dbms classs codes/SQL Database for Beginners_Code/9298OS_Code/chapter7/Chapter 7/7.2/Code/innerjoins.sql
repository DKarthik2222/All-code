select * from person
select * from contact

select *
from person, contact
where person.id=contact.pid  

select *
from person p, contact c
where p.id=c.pid  

select p.firstname, p.lastname, p.dob, c.value
from person p, contact c
where p.id=c.pid  
order by p.lastname asc, c.ctid asc

select p.firstname, p.lastname, p.dob, c.value
from person p, contact c
where p.id=c.pid  
and left(p.firstname,1)='J'
order by p.lastname asc, c.ctid asc


select *
from 
person p 
inner join contact c
on p.id=c.pid  

