  
<?php
$user = 'megamusi_test';
$password = '1132967933074423';
$db = 'megamusi_test';
$host = 'megamusicagratis.com';
$port = 8889;

$link = mysqli_init();
$success = mysqli_real_connect(
   $link,
   $host,
   $user,
   $password,
   $db,
   $port
);

?>