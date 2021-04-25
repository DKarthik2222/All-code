select * from person

select *
from person
where managerid is null

select *
from person
where managerid is not null

select *
from person
where notes like '%ceo%'

select *
from person
where notes like '%rick%'

select *
from person
where notes like 'rick%'

select *
from person
where notes like 'ceo%'

select *
from person
where lastname like '_a%'

select *
from person
where lastname in ('Palmer', 'James')

select *
from person
where (datediff(now(), dob)/365>40)
