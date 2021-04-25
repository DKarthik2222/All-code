select * from person
select * from projectperson

select * from person p, projectperson pp
where p.id=pp.pid
and pp.rid=4

select * from person
where id in (
		select pid 
		from projectperson
		where rid=4
	   )

select * from person p
where exists (
					select * from projectperson 
					where pid=p.id
					and rid=4
				  )
