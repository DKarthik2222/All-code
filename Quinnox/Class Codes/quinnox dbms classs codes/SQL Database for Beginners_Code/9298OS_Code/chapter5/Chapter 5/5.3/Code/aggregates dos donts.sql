select * from project

select max(budget)
from project

select max(budget), max(label)
from project

select max(budget), min(label)
from project

select max(budget), min(budget)
from project

select count(*), min(budget), max(budget) 
from project

select count(*), min(budget), max(label) 
from project

// versions that don't work correctly
select max(budget), label
from project

select avg(budget), label
from project

select min(budget), label
from project
