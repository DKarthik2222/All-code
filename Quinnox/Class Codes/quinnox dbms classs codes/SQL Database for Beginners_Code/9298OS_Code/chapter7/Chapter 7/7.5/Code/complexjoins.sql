select * from person
select * from contact
select * from contacttype
select * from project
select * from projectperson
select * from role

// inner joins
select *
from person p, contact c
where p.id=c.pid  

select *
from person p, contact c, contacttype ct
where p.id=c.pid  
and c.ctid=ct.id

select *
from person p, contact c, contacttype ct
where p.id=c.pid  
and c.ctid=ct.id
and left(p.firstname,1)='J'
	
select *
from project pr, projectperson pp, person p, contact c, contacttype ct
where pr.id=pp.prid
and pp.pid=p.id
and p.id=c.pid  
and c.ctid=ct.id

select pr.label 'project name', pr.budget, p.firstname, p.lastname, ct.label 'contact type', c.value 'contact detail'
from project pr, projectperson pp, person p, contact c, contacttype ct
where pr.id=pp.prid
and pp.pid=p.id
and p.id=c.pid  
and c.ctid=ct.id


// outer joins
select *
from 
project pr left join projectperson pp
on pr.id=pp.prid 

// warning: not as maybe expected
select *
from 
((project pr left join projectperson pp
on pr.id=pp.prid)
inner join person p
on pp.pid=p.id)

// this works
select *
from 
((project pr left join projectperson pp
on pr.id=pp.prid)
left join person p
on pp.pid=p.id)

// equally not as expected
select *
from 
((project pr left join projectperson pp
on pr.id=pp.prid)
right join person p
on pp.pid=p.id)
