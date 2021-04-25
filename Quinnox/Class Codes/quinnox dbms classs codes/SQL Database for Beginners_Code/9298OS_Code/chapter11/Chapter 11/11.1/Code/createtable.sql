// generic 
create table myperson 
(
  id int(11) not null,
  firstname varchar(255) not null,
  lastname varchar(255) not null,
  dob date,
  managerid int(11),
  notes text,
  created timestamp not null,
  primary key (id)
);

select * from myperson

describe myperson

drop table myperson


// with mysql specifics
create table if not exists `myperson` (
  `id` int(11) not null auto_increment,
  `firstname` varchar(255) not null,
  `lastname` varchar(255) not null,
  `dob` date default null,
  `managerid` int(11) default null,
  `notes` text,
  `created` timestamp not null default current_timestamp,
  primary key (`id`)
) engine=innodb  default charset=latin1 auto_increment=7 ;

// constraints
create table if not exists `mycontact` (
  `pid` int(11) not null,
  `ctid` int(11) not null,
  `value` text not null,
  primary key (`pid`,`ctid`),
  key `ctid` (`ctid`)
) engine=innodb default charset=latin1;

alter table `mycontact`
  add constraint `contact_ibfk_1` foreign key (`pid`) references `myperson` (`id`),
  add constraint `contact_ibfk_2` foreign key (`ctid`) references `contacttype` (`id`);



