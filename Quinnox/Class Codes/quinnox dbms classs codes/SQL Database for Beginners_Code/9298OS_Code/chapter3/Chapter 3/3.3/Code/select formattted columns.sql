select * from person

// text

select left(firstname,1), lastname
from person

select substr(firstname,1,1), lastname
from person

select concat(firstname, ' ', lastname)
from person

// dates

select firstname, lastname, year(dob)
from person

select firstname, lastname, month(dob), year(dob) 
from person

select firstname, lastname, now()-dob 
from person

// version that don't work
select firstname, lastname, year(now()-dob) 
from person

// version that work
select firstname, lastname, year(now())-year(dob)
from person

select firstname, lastname, datediff(now(), dob)
from person

select firstname, lastname, datediff(now(), dob)/365
from person

select firstname, lastname, round(datediff(now(), dob)/365)
from person

// Sorting

select firstname, lastname, dob
from person
order by lastname asc

select firstname, lastname, dob
from person
order by dob desc

select firstname, lastname, dob
from person
order by firstname asc, dob desc

select firstname, lastname, dob, managerid
from person
order by managerid asc, dob desc

select firstname, lastname, dob
from person
order by managerid asc, dob desc
