<?php

	// db connection parameter

	$db_server="localhost";
	$db="sql";
	$db_user="root"; // new default user in 3.23.58
	$db_pw="root";
	
	$connection=mysql_connect($db_server, $db_user, $db_pw);
	if ($connection && mysql_select_db($db, $connection))
	{
		$sql="select * from person";
		$recset=mysql_query($sql, $connection);
		if ($recset)
		{
?>
	<table border=0 cellspacing=3 cellpadding=0 width=100%>
        <th>id</th>
        <th>firstname</th>
        <th>lastname</th>
        <th>dob</th>
        <th>managerid</th>
        <th>notes</th>
        <th>created</th>
<?php					
			while ($row=mysql_fetch_object($recset))
			{	
?>
		<tr>
<?php
				echo '<td>'.$row->id.'<td>';
				echo '<td>'.$row->firstname.'<td>';
				echo '<td>'.$row->lastname.'<td>';
				echo '<td>'.$row->dob.'<td>';
				echo '<td>'.$row->managerid.'<td>';
				echo '<td>'.$row->noted.'<td>';
				echo '<td>'.$row->created.'<td>';
				
?>
		</tr>
<?php
			}
?>
	</table>
<?php
			mysql_free_result($recset);
		}
		mysql_close($connection);
		$connection=false;
	}
?>
