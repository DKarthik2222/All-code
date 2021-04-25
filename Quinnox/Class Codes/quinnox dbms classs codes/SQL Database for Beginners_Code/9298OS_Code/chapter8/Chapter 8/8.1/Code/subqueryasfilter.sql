select * from person

// scalar subquery

select max(dob) from person

select * from person
where dob=(select max(dob) from person)

select avg(dob) from person
select date(avg(dob)) from person

select * from person
where dob<(select avg(dob) from person)

select * from person
where dob>(select avg(dob) from person)


// vector subquery

select * from projectperson

select * from projectperson
where rid=4

select * from person
where
id in (
		select pid 
		from projectperson
		where rid=4
	   )

