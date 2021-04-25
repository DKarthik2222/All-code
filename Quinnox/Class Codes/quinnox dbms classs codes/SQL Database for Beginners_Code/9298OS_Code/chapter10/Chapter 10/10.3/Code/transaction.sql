select * from person

start transaction;

update person
set dob='1967-08-09'
where id=6

rollback;

commit;

