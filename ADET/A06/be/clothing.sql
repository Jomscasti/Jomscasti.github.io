-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2025 at 11:34 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clothing`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`) VALUES
(1, 'T-Shirts'),
(2, 'Sweaters'),
(3, 'Jeans'),
(4, 'Outerwear');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `brand` varchar(60) NOT NULL,
  `cover_image` varchar(100) NOT NULL,
  `is_available` tinyint(1) NOT NULL DEFAULT 1,
  `price` decimal(8,2) NOT NULL,
  `code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `title`, `brand`, `cover_image`, `is_available`, `price`, `code`) VALUES
(1, 1, 'Classic Tee (S)', 'Generic', 'images/T3.png', 1, 199.00, 'CLT-S'),
(2, 1, 'Classic Tee (M)', 'Generic', 'images/T3.png', 1, 199.00, 'CLT-M'),
(3, 1, 'Classic Tee (L)', 'Generic', 'images/T3.png', 1, 199.00, 'CLT-L'),
(4, 1, 'V-Neck Tee (S)', 'Generic', 'images/T2.png', 1, 249.00, 'VNT-S'),
(5, 1, 'V-Neck Tee (M)', 'Generic', 'images/T2.png', 1, 249.00, 'VNT-M'),
(6, 1, 'V-Neck Tee (L)', 'Generic', 'images/T2.png', 1, 249.00, 'VNT-L'),
(7, 1, 'Graphic Tee (S)', 'Generic', 'images/T1.png', 1, 299.00, 'GRT-S'),
(8, 1, 'Graphic Tee (M)', 'Generic', 'images/T1.png', 1, 299.00, 'GRT-M'),
(9, 1, 'Graphic Tee (L)', 'Generic', 'images/T1.png', 1, 299.00, 'GRT-L'),
(10, 2, 'Crewneck Sweater (S)', 'Generic', 'images/S1.png', 1, 1299.00, 'CRSW-S'),
(11, 2, 'Crewneck Sweater (M)', 'Generic', 'images/S1.png', 1, 1299.00, 'CRSW-M'),
(12, 2, 'Crewneck Sweater (L)', 'Generic', 'images/S1.png', 1, 1299.00, 'CRSW-L'),
(13, 2, 'V-Neck Sweater (S)', 'Generic', 'images/S2.png', 1, 1199.00, 'VNSW-S'),
(14, 2, 'V-Neck Sweater (M)', 'Generic', 'images/S2.png', 1, 1199.00, 'VNSW-M'),
(15, 2, 'V-Neck Sweater (L)', 'Generic', 'images/S2.png', 1, 1199.00, 'VNSW-L'),
(16, 2, 'Turtleneck Sweater (S)', 'Generic', 'images/S3.png', 1, 1499.00, 'TLSW-S'),
(17, 2, 'Turtleneck Sweater (M)', 'Generic', 'images/S3.png', 1, 1499.00, 'TLSW-M'),
(18, 2, 'Turtleneck Sweater (L)', 'Generic', 'images/S3.png', 1, 1499.00, 'TLSW-L'),
(19, 2, 'Cardigan (S)', 'Generic', 'images/S4.png', 1, 1599.00, 'CDGN-S'),
(20, 2, 'Cardigan (M)', 'Generic', 'images/S4.png', 1, 1599.00, 'CDGN-M'),
(21, 2, 'Cardigan (L)', 'Generic', 'images/S4.png', 1, 1599.00, 'CDGN-L'),
(22, 3, 'Skinny Jeans', 'Generic', 'images/J1.png', 1, 899.00, 'SKJN'),
(23, 3, 'Straight Cut', 'Generic', 'images/J2.png', 1, 849.00, 'STCT'),
(24, 3, 'Bootcut Jeans', 'Generic', 'images/J3.png', 1, 899.00, 'BTCJ'),
(25, 3, 'Ripped Jeans', 'Generic', 'images/J4.png', 1, 999.00, 'RPJN'),
(26, 4, 'Denim Jacket (S)', 'Generic', 'images/O1.png', 1, 1999.00, 'DMJT-S'),
(27, 4, 'Denim Jacket (M)', 'Generic', 'images/O1.png', 1, 1999.00, 'DMJT-M'),
(28, 4, 'Denim Jacket (L)', 'Generic', 'images/O1.png', 1, 1999.00, 'DMJT-L'),
(29, 4, 'Bomber Jacket (S)', 'Generic', 'images/O2.png', 1, 2299.00, 'BMJT-S'),
(30, 4, 'Bomber Jacket (M)', 'Generic', 'images/O2.png', 1, 2299.00, 'BMJT-M'),
(31, 4, 'Bomber Jacket (L)', 'Generic', 'images/O2.png', 1, 2299.00, 'BMJT-L');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
