select pr.label projectname, pr.budget, p.firstname, p.lastname, ct.label contacttype, c.value contactdetail
from project pr, projectperson pp, person p, contact c, contacttype ct
where pr.id=pp.prid
and pp.pid=p.id
and p.id=c.pid  
and c.ctid=ct.id

create view projectteams as
select pr.label projectname, pr.budget, p.firstname, p.lastname, ct.label contacttype, c.value contactdetail
from project pr, projectperson pp, person p, contact c, contacttype ct
where pr.id=pp.prid
and pp.pid=p.id
and p.id=c.pid  
and c.ctid=ct.id

select * from projectteams

drop view projectteams
