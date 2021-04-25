select * from person

// dangerous
update person
set dob='1990-01-01'

select * from person
where id=10

update person
set dob='1990-01-01'
where id=10

update person
set dob='1990-01-01', firstname='Mike'
where id=10

select * from person
where firstname='Martin'

update person
set firstname='Mike'
where firstname='Martin'


select * from project

update project
set budget=budget*1.2

update project
set budget=budget/1.2
