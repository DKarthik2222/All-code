select * from person

select * 
from person p, person m
where p.managerid=m.id

select p.firstname, p.lastname, p.dob, m.firstname, m.lastname  
from person p, person m
where p.managerid=m.id

select p.firstname, p.lastname, p.dob, m.firstname, m.lastname  
from person p 
left join person m
on p.managerid=m.id

select p.firstname, p.lastname, p.dob, m.firstname, m.lastname  
from person p 
left join person m
on p.managerid=m.id
order by m.lastname asc
