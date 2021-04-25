select * from person
select * from projectperson

select * from person p
where exists (
				select * from projectperson 
				where pid=p.id
			  )

select * from person p
where not exists (
					select * from projectperson 
					where pid=p.id
				  )

select * from person p
where exists (
					select * from projectperson 
					where pid=p.id
					and rid=4
				  )

