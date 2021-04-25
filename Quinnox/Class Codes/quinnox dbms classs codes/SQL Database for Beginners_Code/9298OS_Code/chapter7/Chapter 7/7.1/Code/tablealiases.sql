select * from person
select * from contact

select * 
from person, contact
where person.id=contact.pid

select *
from person p, contact c
where p.id=c.pid  

select p.firstname, p.lastname, c.value
from person p, contact c
where p.id=c.pid  

select p.firstname, p.lastname, c.value contactnumber
from person p, contact c
where p.id=c.pid  
