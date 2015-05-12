<?php

$tricog_type = $_POST['tricog_type'];
$from = $_POST['email'];
$name = $_POST['name'];
$messages = $_POST['messages'];
$subject = "Receive Enquiry";
$to = "harshadmaladkar21@gmail.com";
//content start here
$content = '
<html>
<head>
  <title>Tricog Enquiry</title>
</head>
<body>
  <table border="0px" bordercolor="#FFFFFF" cellpadding="0px" style="margin:0 auto;width:400px;background:#EBEBEB;color:#5e5c5c;font-size:17px;border: 1px solid #BDBDBD;padding: 10px;">
	<tr>
		<td colspan="2" align="center" style="border-bottom: 1px solid #8A8585;padding-bottom: 5px;text-transform:uppercase">
			Received Enquiry
		</td>
	<tr>
    <tr>
		<th valign="top" align="left" width="100" style="padding: 4px 0px;">Type</th>
		<td style="padding: 4px 0px;">'.$tricog_type.'</td>
    </tr>
	<tr>
		<th valign="top" align="left" width="40" style="padding: 4px 0px;">Email</th>
		<td style="padding: 4px 0px;">'.$from.'</td>
    </tr>
	<tr>
		<th valign="top" align="left" width="40" style="padding: 4px 0px;">Name</th>
		<td style="padding: 4px 0px;">'.$name.'</td>
    </tr>
	<tr>
		<th valign="top" align="left" width="40" style="padding: 4px 0px;">Message</th>
		<td style="padding: 4px 0px;">'.$messages.'</td>
    </tr>
  </table>
</body>
</html>
';
//content end here

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'To:'.$to . "\r\n";
$headers .= 'From: '.$from . "\r\n";
$headers .= 'Reply-To: '.$from . "\r\n";



if(mail($to,$subject,$content,$headers))
{echo "success";}
else 
{echo "error";}
?>