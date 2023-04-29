<?php
 
/**
 * A class file to connect to database
 */
class DB_CONNECT {
    private $con;
 
    // constructor
    function __construct() {
        // connecting to database
        $this->connect();
    }
 
    
    /**
     * Function to connect with database
     */
    function connect() {
        // import database connection variables
        require_once __DIR__ . '/db_config.php';
 
        // Connecting to mysql database
        $this->con = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
 
        // Selecing database
        //$db = mysql_select_db(DB_DATABASE) or die(mysql_error()) or die(mysql_error());
 
        // returing connection cursor
        return $this->con;
    }
    
    function close(){
        if(mysqli_close($this->con)){
            return true;
        }
        return false;
    }
}
 
?>