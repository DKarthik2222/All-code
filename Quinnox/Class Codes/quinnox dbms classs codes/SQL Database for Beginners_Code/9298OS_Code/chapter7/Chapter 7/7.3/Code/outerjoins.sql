select * from person
select * from projectperson
select * from project

// left join
select *
from person p 
inner join projectperson pp
on p.id=pp.pid 

select *
from person p 
left join projectperson pp
on p.id=pp.pid 

select *
from person p 
left join projectperson pp
on p.id=pp.pid 
where pp.pid is null


// right join

select *
from projectperson pp 
right join person p
on p.id=pp.pid 

select *
from projectperson pp 
right join project pr
on pp.prid=pr.id 

