<?php
    // Change directory to private file system on web server
    chdir("../httpd.private");
    // Open the ip address file
    $ip_file = fopen("local_ip", "r") or die("Can't locate ip file!");
    // Read in the ip address and remove the new line at the end of it
    $jenkins_ip = trim(fread($ip_file, filesize("local_ip")));
    fclose($ip_file);

    $jenkins_port = "8080";
    $uri = $_SERVER['REQUEST_URI'];
    $this_page = "/jenkins.php";
    $uri = preg_replace("|".$this_page."|", '', $uri, 1);
    $jenkins_url = "http://".$jenkins_ip.":".$jenkins_port.$uri;

    if(!sizeof($_POST)) {

        if(!header("Location: ".$jenkins_url)) {
            echo $jenkins_url." is currenly unreachable.\n";
        }
        exit;
    }

    foreach($_POST as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
    rtrim($fields_string, '&');

    //open connection
    $ch = curl_init();

    //set the url, number of POST vars, POST data
    curl_setopt($ch,CURLOPT_URL, $jenkins_url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
    curl_setopt($ch,CURLOPT_POST, count($_POST));
    curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    //execute post
    $result = curl_exec($ch);

    //close connection
    curl_close($ch);

    echo "<html><head></head><body><p>".$result."</p></body></html>";

?>
