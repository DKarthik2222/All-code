select * from person

insert into person
values (7,'Martin', 'Holzke', '1980-05-05', 5, 'xxx', now())

insert into person(firstname, lastname, managerid, dob)
values ('Martin', 'Holzke', 5, '1970-05-05')

insert into person(firstname, lastname, managerid, dob)
values ('Martin', 'Holzke', 5, '1970-05-05');
insert into person(firstname, lastname, managerid, dob)
values ('Fred', 'Flintstone', 5, '0070-05-05');

insert into person(firstname, lastname, managerid, dob)
values ('Martin', 'Holzke', 5, '1970-05-05'),
	   ('Fred', 'Flintstone', 5, '0070-05-05')


select concat('copy of ',firstname), lastname, managerid, dob
from person
where id>=id

insert into person(firstname, lastname, managerid)
select concat('copy of ',firstname), lastname, managerid, dob
from person
where id>=id
