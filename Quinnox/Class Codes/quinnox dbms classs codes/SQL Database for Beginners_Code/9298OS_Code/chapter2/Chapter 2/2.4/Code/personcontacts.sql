select p.firstname, p.lastname, p.dob, ct.label, c.value
from person p, contact c, contacttype ct
where p.id=c.pid  
and c.ctid=ct.id
order by p.lastname asc, ct.id asc
