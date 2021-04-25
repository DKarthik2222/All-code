select firstname, lastname, dob
from person

select firstname as christian_name, lastname 'family name', dob birthday
from person

select left(firstname,1), lastname, dob
from person

select left(firstname,1) initial, lastname, dob
from person

select left(firstname,1) initial, lastname, dob
from person
order by initial asc
