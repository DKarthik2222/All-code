select pr.label projectname, pr.budget, p.firstname, p.lastname, ct.label contacttype, c.value contactdetail
from project pr, projectperson pp, person p, contact c, contacttype ct
where pr.id=pp.prid
and pp.pid=p.id
and p.id=c.pid  
and c.ctid=ct.id


delimiter @@
create procedure projectteam (p_projectname text)
begin
	select p.firstname, p.lastname, ct.label contacttype, c.value contactdetail
	from project pr, projectperson pp, person p, contact c, contacttype ct
	where pr.id=pp.prid
	and pp.pid=p.id
	and p.id=c.pid  
	and c.ctid=ct.id
	and pr.label=p_projectname
	order by p.firstname asc;
end;
@@
delimiter ;

call projectteam('Website')

drop procedure if exists projectteam
