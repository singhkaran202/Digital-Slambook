-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: userdb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments1`
--

DROP TABLE IF EXISTS `comments1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments3` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  'email_address' varchar(50) NOT NULL,
  `to_email_address` varchar(50) NOT NULL,
  `comments` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments1`
--

-- LOCK TABLES `comments1` WRITE;
/*!40000 ALTER TABLE `comments1` DISABLE KEYS */;
-- INSERT INTO `comments1` VALUES (1,'kdsr@gmail.com','Hello, I am Karan, I welcome you all to this beautiful website!!');
/*!40000 ALTER TABLE `comments1` ENABLE KEYS */;
-- UNLOCK TABLES;

--
-- Table structure for table `registration2`
--

DROP TABLE IF EXISTS `registration2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration2` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `department` varchar(30) NOT NULL,
  `email_address` varchar(50) NOT NULL,
  `hostel` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration2`
--

LOCK TABLES `registration2` WRITE;
/*!40000 ALTER TABLE `registration2` DISABLE KEYS */;
INSERT INTO `registration2` VALUES (1,'Karandeep Singh','civil','kdsr@gmail.com','Zircon-B','$2b$10$/ME6FXWJ/JNYvDrCG.jJQOrFtc2XUfLZagq2K.NNlRKwDvT3G2ehm'),(2,'Rishi','IT','rsr@gmail.com','Zircon-a','$2b$10$shqslv.3czho/UHSSn1V8e/V.wDEoURGbLCKaSXwFIUZjBYQexJNi'),(3,'Vinayak','Civil','vd@gmail.com','Zircon-C','$2b$10$e8PVMqaMxwT5SJPG/.lxV.fNALUcbVNVMr6wbIEwYvrWkZoNEdnMS'),(4,'Neeraj ','Civil','neeraj@gmail.com','Zircon-A','$2b$10$qXUme7CQnz4XRcDznAJJAuBX8wQsd1biltxTi6bHCwqoNb0YBokbu'),(5,'Ajay','Civil','ajay@gmail.com','Zircon-B','$2b$10$t/mluDnjNZevwQ5vhUg0HOQPdeJnT6hMMZOtHmhDSIDsiqo82vpG.');
/*!40000 ALTER TABLE `registration2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-09  9:05:45
