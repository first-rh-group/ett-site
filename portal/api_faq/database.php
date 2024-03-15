<?php
class Database {
    private $host = "10.0.0.96";
    private $db_name = "grupofir_firstrh3";
    private $username = "dtc_saga";
    private $password = "179856";
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>