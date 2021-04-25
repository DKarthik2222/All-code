select * from person

update person
set dob='1963-08-09'
where id=6

delimiter @@
create trigger setmodified before update on person
for each row begin
    set new.created=now();
end;
@@
delimiter ;

drop trigger setmodified
