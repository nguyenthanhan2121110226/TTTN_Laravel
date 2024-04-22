-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th7 14, 2022 lúc 01:26 PM
-- Phiên bản máy phục vụ: 5.7.33
-- Phiên bản PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ntt-shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '2',
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `brands`
--

INSERT INTO `brands` (`id`, `name`, `slug`, `image`, `status`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'ADIDAS', 'adidas', 'kvd7VrLtiF-brand1.png', 2, 13, '2022-06-03 14:52:55', '2022-06-12 08:13:49'),
(2, 'BITIS', 'bitis', 'YY3cz8tODu-brand2.png', 1, 13, '2022-06-04 08:19:27', '2022-06-04 08:19:27'),
(3, 'BALENCIAGA', 'balenciaga', 'SI93BAOngg-brand3.png', 1, 13, '2022-06-04 08:19:46', '2022-06-04 08:19:46'),
(4, 'ASICS', 'asics', 'jNBUKbg3X3-brand4.png', 1, 13, '2022-06-04 08:20:07', '2022-06-04 08:20:07'),
(5, 'FILA', 'fila', 'jXXXTbm14X-brand5.png', 1, 13, '2022-06-04 08:20:25', '2022-06-04 08:20:25'),
(6, 'Nike', 'nike', 'bynotCu2g2-brand6.png', 1, 13, '2022-06-04 08:20:44', '2022-06-04 08:22:47'),
(7, 'PUMA', 'puma', 'rTUnHGe8hz-brand7.png', 1, 13, '2022-06-04 08:23:09', '2022-06-04 08:23:09'),
(8, 'CONVERSE', 'converse', 'S28fufxfDu-brand8.png', 1, 13, '2022-06-04 08:23:29', '2022-06-04 08:23:29'),
(9, 'VANS', 'vans', 'PT9y71spPX-brand9.png', 1, 13, '2022-06-04 08:23:56', '2022-06-04 08:23:56'),
(10, 'GUCCI', 'gucci', '8hXjUT2OdC-brand10.png', 1, 13, '2022-06-04 08:24:19', '2022-06-04 08:24:19');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `image`, `parent_id`, `status`, `updated_by`, `created_at`, `updated_at`) VALUES
(11, 'Giày thể thao', 'giay-the-thao', 'Vd4gprtvJx-1.jpg', NULL, 1, 13, '2022-06-03 10:09:40', '2022-06-04 15:36:00'),
(13, 'Giày đá banh', 'giay-da-banh', 'XkNZWBl9PK-1.jpg', 11, 1, 13, '2022-06-03 11:10:23', '2022-06-04 15:36:14'),
(14, 'Giày chạy bộ', 'giay-chay-bo', 'CL1gohjNcu-1.jpg', 11, 1, 13, '2022-06-03 11:10:51', '2022-06-04 15:36:25'),
(15, 'Giày leo núi', 'giay-leo-nui', 'BF22Ube20U-1.jpg', 11, 1, 13, '2022-06-03 11:11:22', '2022-06-04 15:37:47'),
(16, 'Giày nữ', 'giay-nu', 'JpH1LwTp6x-3.jpg', NULL, 1, 13, '2022-06-03 14:50:03', '2022-06-04 15:38:01'),
(17, 'Giày nữ cao cấp', 'giay-nu-cao-cap', 'Y37JeL0swB-3.jpg', 16, 1, 13, '2022-06-03 14:50:39', '2022-06-04 15:38:20'),
(18, 'Giày nữ thời trang', 'giay-nu-thoi-trang', 'FeVuAnnwfc-3.jpg', 16, 1, 13, '2022-06-04 08:13:41', '2022-06-04 15:38:32'),
(19, 'Giày nữ cổ điển', 'giay-nu-co-dien', 'yTSKykR6wU-3.jpg', 16, 1, 13, '2022-06-04 08:14:09', '2022-06-04 15:38:47'),
(20, 'Giày nam', 'giay-nam', '15jXuMA97t-2.jpg', NULL, 1, 13, '2022-06-04 08:14:28', '2022-06-04 08:39:49'),
(21, 'Giày nam cao cấp', 'giay-nam-cao-cap', 'B02OmavfNl-2.jpg', 20, 1, 13, '2022-06-04 08:15:30', '2022-06-04 15:39:26'),
(22, 'Giày nam thời trang', 'giay-nam-thoi-trang', 'gKssET20fl-2.jpg', 20, 1, 13, '2022-06-04 08:16:01', '2022-06-04 08:39:47'),
(23, 'Giày nam cổ điển', 'giay-nam-co-dien', '7PnsJewTwa-2.jpg', 20, 1, 13, '2022-06-04 08:16:40', '2022-06-04 15:39:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`id`, `post_id`, `fullname`, `email`, `message`, `parent_id`, `type`, `created_at`, `updated_at`) VALUES
(1, 2, 'Lê đô la', 'dola@g.g', 'Bài này ai viết hay z friend?', NULL, 'user', '2022-06-06 09:46:59', '2022-06-06 10:08:39'),
(2, 2, 'Heheee', 'ada@gmail.com', 'Tui á. Hay hêm', 1, 'user', '2022-06-06 09:57:13', '2022-06-06 09:57:13'),
(3, 2, 'adasdasdasd', 'hehea@gmail.com', 'Vip z bro', 1, 'user', '2022-06-06 09:59:36', '2022-06-06 09:59:36'),
(4, 2, 'Bài này mà hay', 'hehehee@gmail.com', 'hú hú hú', NULL, 'user', '2022-06-06 10:00:05', '2022-06-06 10:00:05'),
(5, 2, 'đâsdasdasd', 'phuonghoanglua@gmail.com', 'Chào mọi người nha', NULL, 'user', '2022-06-06 10:01:10', '2022-06-06 10:07:55'),
(6, 2, 'adasdas', 'ada@gmail.com', 'zxcsdfsfsd', NULL, 'user', '2022-06-06 10:01:22', '2022-06-06 10:01:22'),
(7, 2, 'adasda', 'aaaa@gg.v', 'Hú cái gì ?', 4, 'user', '2022-06-06 10:09:50', '2022-06-06 10:09:50'),
(8, 2, 'NTTSHOP', 'nttshop@gmail.com', 'Yêu cầu quý khách nói đàng hoàng', 6, 'admin', '2022-06-06 16:36:58', '2022-06-06 16:36:58'),
(9, 3, 'ngọc bích', 'pnnb271102@gmail.com', 'phèn vậy mà cũng lên báo', NULL, 'user', '2022-06-10 05:49:49', '2022-06-10 05:49:49'),
(10, 3, 'tuấn cương', 'cuccutthumthum@gmail.com', 'mặt m dừa quá có đc lên đâu', 9, 'user', '2022-06-10 05:50:44', '2022-06-10 05:50:44'),
(11, 2, 'Nguyen Vn A', 'abc@g.g', 'asdasdas', NULL, 'user', '2022-07-09 09:10:19', '2022-07-09 09:10:19');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '2',
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contacts`
--

INSERT INTO `contacts` (`id`, `fullname`, `email`, `subject`, `message`, `status`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Bích Ngu', 'pnnb271102@gmail.com', 'Tin nhắn mắng vốn bà Đen', 'Bà đen ăn hàng', 1, 'admin', '2022-06-12 17:37:19', '2022-06-12 17:37:19'),
(2, 'NTT Shop', 'karup2k@gmail.com', 'Xin Chào bạn', 'Nay Bạn Ăn gì?', 1, 'admin', '2022-06-12 17:53:39', '2022-06-12 17:53:39'),
(3, 'Nguyễn Văn Nam', 'namnguyen@gmail.com', 'Yê cầu shop kiểm tra lại đơn hàng', 'Tôi đã đặt mua đơn hàng #20 vào ngày 30/5 nhưng đến bây giờ chưa nhận được. Vui lòng shop kiểm tra lại quá trình vận chuyển đơn hàng. Xin Cảm ơn!', 2, 'customer', '2022-06-12 18:41:13', '2022-06-12 18:41:13'),
(4, 'Nguyễn Thanh Hà', 'karup2k@gmail.com', 'Hỏi Địa Chỉ', 'Shop có chi nhánh ở Sài Gòn Không ạ?', 2, 'customer', '2022-06-12 19:48:46', '2022-06-12 19:48:46'),
(5, 'NTT Shop', 'karup2k@gmail.com', 'Trả lời tin nhắn', 'Xin Chào bạn! Hiên nay Shop có chi nhánh ở khắp Sài Gòn ạ!', 1, 'admin', '2022-06-13 06:04:04', '2022-06-13 06:04:04'),
(6, 'Luiz Suarez', 'suarez@gmail.com', 'Shop có hãng nike ko!', 'Tôi là cầu thủ đá banh đang thi đấu cho câu lạc bộ Aletico madrid? Shop có hãng adidas ko? Cho tui mua Nike', 2, 'customer', '2022-06-14 05:06:37', '2022-06-14 05:06:37'),
(7, 'Truong dezai', 'karup2k@gmail.com', 'Yêu cầu hủy đơn hàng', 'Tôi đã đặt nhầm đơn hàng yêu cầu shop hủy dùm tui đơn hàng #19! ko hủy tui boom! Cảm ơn', 2, 'customer', '2022-06-29 05:19:07', '2022-06-29 05:19:07'),
(8, 'NTT Shop', 'karup2k@gmail.com', 'THông báo hủy đơn', 'Đơn hàng của bạn đã được hủy! Cảm ơn bạn đã quan tâm', 1, 'admin', '2022-06-29 05:20:05', '2022-06-29 05:20:05'),
(9, 'Nguyễn Van A', 'karup2k@gmail.com', 'Xóa tài khoản', 'Vui longf xoas tiafi khoanr cos email nayf', 2, 'customer', '2022-07-09 09:08:52', '2022-07-09 09:08:52'),
(10, 'NTT Shop', 'karup2k@gmail.com', 'Da huy email', 'Da huy', 1, 'admin', '2022-07-09 09:09:29', '2022-07-09 09:09:29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `forgot_passwords`
--

CREATE TABLE `forgot_passwords` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2014_10_12_000000_create_users_table', 2),
(36, '2022_05_23_023242_create_category_table', 22),
(37, '2022_05_23_032227_create_brand_table', 23),
(40, '2022_05_22_090013_create_product_table', 24),
(43, '2022_05_22_092848_create_product_category_table', 27),
(44, '2022_05_22_092641_create_product_color_table', 28),
(45, '2022_05_22_091542_create_product_size_table', 29),
(48, '2022_06_04_142634_create_product_stars_table', 31),
(50, '2022_05_23_032757_create_topic_table', 32),
(52, '2022_05_23_033420_create_post_table', 33),
(55, '2022_06_06_020522_create_slide_table', 34),
(58, '2022_06_04_065541_create_review_table', 36),
(59, '2022_06_06_092851_create_comment_table', 37),
(60, '2022_06_06_172122_add_status_to_reviews', 38),
(63, '2022_06_07_053315_create_social_table', 39),
(73, '2022_05_23_045610_create_voucher_table', 46),
(74, '2022_05_23_054246_create_voucher_user_table', 47),
(78, '2022_06_07_104608_create_purchased_product_table', 50),
(88, '2022_05_23_041918_create_order_table', 60),
(89, '2022_05_23_043851_create_order_details_table', 61),
(90, '2022_06_07_104923_create_order_status_history_table', 62),
(91, '2022_06_06_023039_create_contact_table', 63),
(92, '2022_06_12_185828_add_type_to_users_table', 64),
(93, '2022_06_15_063014_create_forgot_password_table', 65),
(94, '2022_06_29_014013_add_reason_to_orders_table', 66),
(95, '2022_06_29_015037_remove_reason_from_orders_table', 67),
(96, '2022_06_29_015617_remove_reason_from_order_status_histories_table', 68);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `reciver_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reciver_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reciver_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci,
  `amount` double(16,2) NOT NULL,
  `voucher` double(12,2) NOT NULL DEFAULT '0.00',
  `shipping` double(12,2) NOT NULL DEFAULT '0.00',
  `payment_method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cash',
  `payment_status` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '3',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `reciver_name`, `reciver_email`, `reciver_phone`, `address`, `note`, `amount`, `voucher`, `shipping`, `payment_method`, `payment_status`, `status`, `created_at`, `updated_at`) VALUES
(4, 14, 'Phạm Bích', 'phambich@gmail.com', '02234567898', 'Xã Pa Ham, Huyện Mường Chà, Tỉnh Điện Biên', 'Shoop này đồ đẹp nè', 52340000.00, 300000.00, 40000.00, 'cash', 1, 4, '2022-06-08 10:24:07', '2022-06-29 03:55:55'),
(9, 27, 'Truong NgTuan', 'karup2k@gmail.com', '0383608951', 'Xã Đức Giang, Huyện Yên Dũng, Tỉnh Bắc Giang', 'Giao hàng sớm nha sốp iu', 15040000.00, 0.00, 40000.00, 'cash', 1, 1, '2022-06-12 19:45:43', '2022-06-12 19:45:43'),
(10, 32, 'Uchiha Madara', 'madara@gmail.com', '01233457867', 'Xã Quang Tiến, Huyện Sóc Sơn, Thành phố Hà Nội', 'Giao hàng chậm thì ăn ảo thuật', 30040000.00, 0.00, 40000.00, 'cash', 0, 2, '2022-06-13 12:24:42', '2022-06-13 12:36:09'),
(11, 32, 'Uchiha Indra', 'madara@gmail.com', '0112336751', 'Xã Thanh Định, Huyện Định Hóa, Tỉnh Thái Nguyên', 'Không có gì', 3940001.00, 0.00, 40000.00, 'cash', 0, 2, '2022-06-13 12:27:23', '2022-06-13 12:36:13'),
(12, 30, 'Uchiha Sasuke', 'sasuke@gmail.com', '099871263', 'Xã Thanh Định, Huyện Định Hóa, Tỉnh Thái Nguyên', 'Hello mọi người', 3940001.00, 0.00, 40000.00, 'cash', 0, 3, '2022-06-13 12:29:57', '2022-06-13 12:29:57'),
(13, 27, 'Nguyễn Tuân Cương', 'karup2k@gmail.com', '0383608951', 'Xã Kim Phú, Thành phố Tuyên Quang, Tỉnh Tuyên Quang', 'Hell Người anh em', 23940000.00, 0.00, 40000.00, 'cash', 0, 1, '2022-06-14 12:05:04', '2022-06-29 03:37:26'),
(14, 29, 'Nguyễn Văn Mảnh', 'ntt.shop.3006@gmail.com', '0123456789', 'Xã Tân Minh, Huyện Thanh Sơn, Tỉnh Phú Thọ', 'đâsd', 8940000.00, 0.00, 40000.00, 'cash', 0, 3, '2022-06-15 08:40:43', '2022-06-15 08:40:43'),
(15, 27, 'Nguyen Tuan truong', 'karup2k@gmail.com', '0383608951', 'Xã Đông Xá, Huyện Vân Đồn, Tỉnh Quảng Ninh', 'ấđâsd', 26940000.00, 0.00, 40000.00, 'cash', 0, 4, '2022-06-23 11:29:32', '2022-06-29 04:47:14'),
(16, 33, 'Trường Nguyễn Tuấn', 'ngtuantruong30062k@gmail.com', '0383608951', 'Xã Thắng Lợi, Huyện Vân Đồn, Tỉnh Quảng Ninh', 'abc', 44040000.00, 0.00, 40000.00, 'cash', 0, 4, '2022-06-23 11:37:19', '2022-06-29 03:47:19'),
(17, 14, 'Trường Nguyễn Tuấn', 'phambich@gmail.com', '0383608951', 'Xã Gia Miễn, Huyện Văn Lãng, Tỉnh Lạng Sơn', 'abc', 9540000.00, 300000.00, 40000.00, 'cash', 0, 3, '2022-06-23 11:57:43', '2022-06-23 11:57:43'),
(18, 33, 'Trường Nguyễn Tuấn', 'ngtuantruong30062k@gmail.com', '0383608951', 'Xã Thanh Sơn, Huyện Ba Chẽ, Tỉnh Quảng Ninh', 'abc', 22040000.00, 0.00, 40000.00, 'cash', 0, 4, '2022-06-23 11:59:39', '2022-06-23 12:05:24'),
(19, 27, 'Lê văn A', 'karup2k@gmail.com', '0383608951', 'Xã Kim Nọi, Huyện Mù Căng Chải, Tỉnh Yên Bái', 'Nothing', 4940000.00, 0.00, 40000.00, 'cash', 0, 4, '2022-06-29 04:11:14', '2022-06-29 04:32:03'),
(20, 27, 'Trường Nguyễn Tuấn', 'karup2k@gmail.com', '0383608951', 'Xã Thanh Sơn, Huyện Ba Chẽ, Tỉnh Quảng Ninh', 'áđâsd', 4940000.00, 0.00, 40000.00, 'cash', 0, 4, '2022-06-29 08:06:49', '2022-06-29 08:09:52'),
(21, 35, 'Leona De Vanci', 'vanhalam202@gmail.com', '0383608951', 'Phường Hoà Chung, Thành phố Cao Bằng, Tỉnh Cao Bằng', 'Mua tặng bồ', 1233598.00, 0.00, 40000.00, 'cash', 0, 3, '2022-07-09 03:56:10', '2022-07-09 03:56:10'),
(22, 35, 'Leona De Vanci', 'vanhalam202@gmail.com', '0383608951', 'Phường Hoà Chung, Thành phố Cao Bằng, Tỉnh Cao Bằng', 'Mua tặng bồ', 1233598.00, 0.00, 40000.00, 'cash', 0, 2, '2022-07-09 03:59:55', '2022-07-09 09:07:25'),
(23, 35, 'Văn Hà Lâm', 'vanhalam202@gmail.com', '034567231234', 'Phường Xuân La, Quận Tây Hồ, Thành phố Hà Nội', 'Giao hàng nhanh', 20040000.00, 0.00, 40000.00, 'cash', 0, 4, '2022-07-09 09:05:12', '2022-07-09 09:06:16');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `product_price` double(12,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `product_id`, `product_name`, `product_slug`, `product_image`, `product_size`, `product_color`, `product_quantity`, `product_price`, `created_at`, `updated_at`) VALUES
(13, 4, 13, 'Nike Air Max 1', 'nike-air-max-1', 'Vn8FmaJgw9-11.png', '36', '0F0E0E', 1, 3900001.00, '2022-06-08 10:24:07', '2022-06-08 10:24:07'),
(14, 4, 17, 'Gucci Ace Fur', 'gucci-ace-fur', 'tm2kO5eKYx-18.png', '36', '0F0E0E', 1, 22000000.00, '2022-06-08 10:24:07', '2022-06-08 10:24:07'),
(15, 4, 15, 'Nike Air Force 1 Low SP', 'nike-air-force-1-low-sp', 'LGkinP3Fay-15.png', '37', 'FFD700', 1, 699999.00, '2022-06-08 10:24:07', '2022-06-08 10:24:07'),
(22, 9, 16, 'Gucci Rhyton', 'gucci-rhyton', 'qovuQiGvBM-17.png', '36', 'F9F9F9', 1, 15000000.00, '2022-06-12 19:45:43', '2022-06-12 19:45:43'),
(25, 10, 16, 'Gucci Rhyton', 'gucci-rhyton', 'qovuQiGvBM-17.png', '39', 'F9F9F9', 1, 15000000.00, '2022-06-13 12:24:43', '2022-06-13 12:24:43'),
(26, 11, 13, 'Nike Air Max 1', 'nike-air-max-1', 'Vn8FmaJgw9-11.png', '36', '0F0E0E', 1, 3900001.00, '2022-06-13 12:27:23', '2022-06-13 12:27:23'),
(27, 12, 13, 'Nike Air Max 1', 'nike-air-max-1', 'Vn8FmaJgw9-11.png', '36', '0F0E0E', 1, 3900001.00, '2022-06-13 12:29:57', '2022-06-13 12:29:57'),
(28, 13, 12, 'Nike Dunk Low', 'nike-dunk-low', 'cadQZx2Io1-6.png', '37', 'FF0000', 1, 8900000.00, '2022-06-14 12:05:04', '2022-06-14 12:05:04'),
(29, 13, 16, 'Gucci Rhyton', 'gucci-rhyton', 'qovuQiGvBM-17.png', '38', 'F9F9F9', 1, 15000000.00, '2022-06-14 12:05:04', '2022-06-14 12:05:04'),
(30, 14, 12, 'Nike Dunk Low', 'nike-dunk-low', 'cadQZx2Io1-6.png', '37', 'FF0000', 1, 8900000.00, '2022-06-15 08:40:43', '2022-06-15 08:40:43'),
(31, 15, 17, 'Gucci Ace Fur', 'gucci-ace-fur', 'tm2kO5eKYx-18.png', '36', '0F0E0E', 1, 22000000.00, '2022-06-23 11:29:32', '2022-06-23 11:29:32'),
(32, 15, 10, 'Puma MB.01 LaMelo Ball', 'puma-mb01-lamelo-ball', 'G3DJmr4RUs-4.png', '37', 'FF5B00', 1, 4900000.00, '2022-06-23 11:29:32', '2022-06-23 11:29:32'),
(33, 16, 17, 'Gucci Ace Fur', 'gucci-ace-fur', 'tm2kO5eKYx-18.png', '36', '0F0E0E', 2, 22000000.00, '2022-06-23 11:37:19', '2022-06-23 11:37:19'),
(34, 17, 10, 'Puma MB.01 LaMelo Ball', 'puma-mb01-lamelo-ball', 'aVlSA1d00a-1.png', '37', '242F9B', 2, 4900000.00, '2022-06-23 11:57:43', '2022-06-23 11:57:43'),
(35, 18, 17, 'Gucci Ace Fur', 'gucci-ace-fur', 'tm2kO5eKYx-18.png', '36', '0F0E0E', 1, 22000000.00, '2022-06-23 11:59:39', '2022-06-23 11:59:39'),
(36, 19, 10, 'Puma MB.01 LaMelo Ball', 'puma-mb01-lamelo-ball', 'G3DJmr4RUs-4.png', '37', 'FF5B00', 1, 4900000.00, '2022-06-29 04:11:14', '2022-06-29 04:11:14'),
(37, 20, 10, 'Puma MB.01 LaMelo Ball', 'puma-mb01-lamelo-ball', 'G3DJmr4RUs-4.png', '37', 'FF5B00', 1, 4900000.00, '2022-06-29 08:06:49', '2022-06-29 08:06:49'),
(38, 21, 24, 'Disruptor 2 Premium', 'disruptor-2-premium', '7QQhH7LIaG-30.png', '36', 'F9F9F9', 1, 1193598.00, '2022-07-09 03:56:10', '2022-07-09 03:56:10'),
(39, 22, 24, 'Disruptor 2 Premium', 'disruptor-2-premium', '7QQhH7LIaG-30.png', '36', 'F9F9F9', 1, 1193598.00, '2022-07-09 03:59:55', '2022-07-09 03:59:55');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_status_histories`
--

CREATE TABLE `order_status_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_status_histories`
--

INSERT INTO `order_status_histories` (`id`, `order_id`, `status`, `created_at`, `updated_at`, `reason`) VALUES
(26, 4, 3, '2022-06-08 15:30:51', '2022-06-08 15:30:51', NULL),
(37, 4, 1, '2022-06-08 15:33:26', '2022-06-08 15:33:26', NULL),
(38, 4, 4, '2022-06-08 15:33:29', '2022-06-08 15:33:29', NULL),
(46, 9, 3, '2022-06-12 19:45:44', '2022-06-12 19:45:44', NULL),
(47, 4, 1, '2022-06-13 09:54:02', '2022-06-13 09:54:02', NULL),
(48, 10, 3, '2022-06-13 12:24:43', '2022-06-13 12:24:43', NULL),
(49, 11, 3, '2022-06-13 12:27:23', '2022-06-13 12:27:23', NULL),
(50, 12, 3, '2022-06-13 12:29:57', '2022-06-13 12:29:57', NULL),
(51, 10, 2, '2022-06-13 12:36:09', '2022-06-13 12:36:09', NULL),
(52, 11, 2, '2022-06-13 12:36:13', '2022-06-13 12:36:13', NULL),
(53, 13, 3, '2022-06-14 12:05:04', '2022-06-14 12:05:04', NULL),
(54, 14, 3, '2022-06-15 08:40:43', '2022-06-15 08:40:43', NULL),
(55, 15, 3, '2022-06-23 11:29:32', '2022-06-23 11:29:32', NULL),
(56, 16, 3, '2022-06-23 11:37:19', '2022-06-23 11:37:19', NULL),
(57, 17, 3, '2022-06-23 11:57:43', '2022-06-23 11:57:43', NULL),
(58, 18, 3, '2022-06-23 11:59:39', '2022-06-23 11:59:39', NULL),
(59, 18, 4, '2022-06-23 12:05:24', '2022-06-23 12:05:24', NULL),
(60, 13, 2, '2022-06-29 03:34:02', '2022-06-29 03:34:02', 'Đơn hàng của quý khách đang được vận chuyển!'),
(61, 13, 1, '2022-06-29 03:37:26', '2022-06-29 03:37:26', 'Đã giao hàng thành công! Cảm ơn quý khách và hẹn lại quý khách trong những lần mua sau'),
(62, 16, 4, '2022-06-29 03:47:19', '2022-06-29 03:47:19', 'Quý khách không nhận hàng.'),
(63, 4, 4, '2022-06-29 03:55:56', '2022-06-29 03:55:56', 'Lý do khác!'),
(64, 19, 3, '2022-06-29 04:11:14', '2022-06-29 04:11:14', NULL),
(65, 19, 4, '2022-06-29 04:32:03', '2022-06-29 04:32:03', NULL),
(66, 15, 4, '2022-06-29 04:47:14', '2022-06-29 04:47:14', 'Dịch vụ không tốt'),
(67, 20, 3, '2022-06-29 08:06:49', '2022-06-29 08:06:49', NULL),
(68, 20, 4, '2022-06-29 08:09:52', '2022-06-29 08:09:52', 'Quý khách không nhận hàng.'),
(69, 21, 3, '2022-07-09 03:56:10', '2022-07-09 03:56:10', NULL),
(70, 22, 3, '2022-07-09 03:59:55', '2022-07-09 03:59:55', NULL),
(71, 22, 4, '2022-07-09 04:04:53', '2022-07-09 04:04:53', 'Đặt hàng nhầm'),
(72, 22, 3, '2022-07-09 05:57:40', '2022-07-09 05:57:40', 'Đơn hàng của quý khách đang được vận chuyển!'),
(73, 23, 3, '2022-07-09 09:05:12', '2022-07-09 09:05:12', NULL),
(74, 23, 4, '2022-07-09 09:06:16', '2022-07-09 09:06:16', 'Sản phẩm không phù hợp túi tiền'),
(75, 22, 2, '2022-07-09 09:07:25', '2022-07-09 09:07:25', 'Thành thật xin lỗi! Vì hệ thống vận chuyển gặp sự cố nên đơn hàng của quý khách được vận chuyển muộn hơm dự tính!');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `top_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `view` int(11) NOT NULL DEFAULT '0',
  `short_desc` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `top_id`, `name`, `slug`, `view`, `short_desc`, `detail`, `status`, `image`, `updated_by`, `created_at`, `updated_at`) VALUES
(2, 3, 'YZY KNIT RNR STONE CARBON & SULFUR \'TRẦN NHƯ NHỘNG\'', 'yzy-knit-rnr-stone-carbon-sulfur-tran-nhu-nhong', 19, 'Với ý tưởng đầy sáng tạo mới mẻ, Adidas đã ra mắt thiết kế & màu sắc của Yeezy Knit Stone Carbon, Sulfur được đầu tư rất chất lượng. Người mang sẽ có cảm giác thoải mái, nhẹ nhàng như đang chân trần vậy. Hãy cùng xem hình ảnh & thông tin về siêu phẩm này nhé!', '<p><span style=\"color: rgb(51, 51, 51);\">Giày Yzy Knit RNR&nbsp;Stone Carbon &amp; Sulfur&nbsp;là 2 mẫu giày cực độc lạ và thu hút của nhà hàng đầu&nbsp;</span><a href=\"https://giaygiare.vn/giay-adidas\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Adidas Sneaker</a><span style=\"color: rgb(51, 51, 51);\">. Bài viết hôm nay&nbsp;Tulo Shop&nbsp;sẽ giúp các bạn tìm hiểu chi tiết hơn về điểm nổi bật của 2 mẫu giày cực hot này.</span></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); font-size: 15px;\"><img src=\"https://giaygiare.vn/upload/sanpham/large/yzy-knit-rnr-stone-carbon-sulfur-tran-nhu-nhong.jpg\" alt=\"Thiết kế độc đáo chưa từng thấy của hãng sneaker nổi tiếng Yeezy\" height=\"700\" width=\"1200\"></span><em>Thiết kế độc đáo chưa từng thấy của hãng sneaker nổi tiếng Yeezy</em></p><blockquote>Xem thêm:&nbsp;<a href=\"https://giaygiare.vn/mau-doc-dao-yzy-foam-runner-mx-cream-clay.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Màu cực kỳ độc đáo của YZY Foam Runner MX Cream Clay</a></blockquote><h2><strong>Sự ra đời của giày Adidas Yeezy Knit Stone Carbon &amp; Sulfur</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Siêu phẩm&nbsp;Adidas Yeezy Knit Runner Sulfur&nbsp;được nam rapper&nbsp;Kanye West&nbsp;giới thiệu vào năm 2020. Quả thực đây là cực phẩm tạo nên một làn gió mới trong giới sneaker, đặc biệt là các tín đồ của Adidas.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Mẫu giày&nbsp;Knit Runner Sulfur&nbsp;khiến mọi người liên tưởng đến phiên bản&nbsp;giày Yeezy Foam Runner&nbsp;đã được con gái Kanye West diện vào năm 2019 - Một mẫu giày cực kỳ lạ lẫm, độc đáo và khác biệt hoàn toàn so với những đôi giày trước đó. Cho đến khi mẫu Runner Sulfur lên kệ, mọi người mới thấy được đây là dự án đã được Kanye ấp ủ rất lâu trước đó.</span></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); font-size: 15px;\"><img src=\"https://giaygiare.vn/upload/images/yzy-knit-rnr-stone-carbon-sulfur.jpg\" alt=\"Adidas Yzy Knit Runner Sulfur\" height=\"768\" width=\"1024\"></span><em>Adidas Yzy Knit Runner Sulfur</em></p><p><span style=\"color: rgb(51, 51, 51);\">Sau khi đôi&nbsp;Yeezy Knit Runner Sulfur&nbsp;được phát hành, thì vào tháng 2 năm 2022 phối màu mới mang tân \"Stone Carbon\" tiếp tục xuất hiện. Mẫu giày&nbsp;Adidas Yzy Knit RNR Stone Carbon&nbsp;mới này nổi bật với màu nâu nhạt ở phần upper và phần còn lại là màu Stale Grey.</span></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); font-size: 15px;\"><img src=\"https://giaygiare.vn/upload/images/yzy-knit-rnr-stone-carbon-sulfur-1.jpg\" alt=\"Adidas Yzy Knit Runner Stone Carbon\" height=\"818\" width=\"1092\"></span><em>Adidas Yzy Knit Runner Stone Carbon</em></p><blockquote>Tìm hiểu thêm:&nbsp;<a href=\"https://giaygiare.vn/tong-hop-cac-mau-yeezy-foam-hot-nhat-hien-nay.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Tổng hợp các mẫu Yeezy Foam \'Hot\' nhất hiện nay</a></blockquote><p><span style=\"color: rgb(51, 51, 51);\">Trước khi ra mắt \"Stone Carbon\", rapper Kanye West đã tiết lộ một số hình ảnh thiết kế của mẫu giày này trên trang cá nhân của mình. Với sự trở lại đầy mới lạ, một lần nữa cực phẩm này tiếp tục khẳng định được sức hút và xu hướng mới trong làng thời trang.</span></p><h2><strong>Khám phá thiết kế của giày Yzy Knit RNR Stone Carbon &amp; Sulfur</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Hai mẫu giày&nbsp;Yzy Knit RNR Stone Carbon &amp; Sulfur&nbsp;của Adidas với thiết kế độc lạ “trần như nhộng” được tìm mua cực kỳ sôi nổi. Bây giờ chúng ta cùng khám phá chi tiết về thiết kế của hai đôi giày này nhé!</span></p><h3>Yzy Knit RNR Stone Carbon &amp; Sulfur form dáng độc lạ, không dây</h3><p><span style=\"color: rgb(51, 51, 51);\">Mẫu giày Yzy Knit RNR Stone Carbon &amp; Sulfur có thiết kế hoàn toàn giống nhau &amp; chỉ khác ở màu sắc. Và thiết kế của mẫu giày&nbsp;Adidas Yeezy Knit Runner&nbsp;này khá giống với phiên bản giày Yeezy Foam Runner được ra mắt trước đó.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Điểm nhấn đầu tiên mà chúng ta có thể thấy trên 2 mẫu giày Adidas Yeezy Knit Runner này là thiết kế đan một mảnh liền mạch, không dây. Điều này giúp tăng độ ôm chân vừa vặn và mềm mại, thoải mái, bảo vệ chân cho người mang. Đồng thời mẫu giày này rất phù hợp cho những ai cảm thấy phiền phức mỗi khi tháo/buộc dây khi mang giày sneaker.</span></p><ul><li>Trên thân giày được thiết kế một đường bóp phia bên hông giúp tạo form dáng thêm ôm chân hơn. Phần trên của giày rỗng giúp tạo nên độ phồng nhẹ hài hòa với phần đế mỏng êm.</li><li>Phần đế giày được thiết kế các đường ngang theo hình lượn sóng nhỏ giúp tăng ma sát, chống trơn trượt. Kết hợp bên trong đế giày sử dụng một lớp lót mềm mại bằng cao su non êm ái.</li></ul><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); font-size: 15px;\"><img src=\"https://giaygiare.vn/upload/images/yzy-knit-rnr-stone-carbon-sulfur-2.jpg\" alt=\"Thiết kế giày Yzy Knit RNR Stone Carbon rất giống một đôi tất có thêm đế, vừa độc lạ, vừa rất tiện lợi.\" height=\"941\" width=\"940\"></span><em>Thiết kế giày Yzy Knit RNR Stone Carbon rất giống một đôi tất có thêm đế, vừa độc lạ, vừa rất tiện lợi.</em></p><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); font-size: 15px;\"><img src=\"https://giaygiare.vn/upload/images/yzy-knit-rnr-stone-carbon-sulfur-3.jpg\" alt=\"Mẫu giày Yzy Knit RNR Sulfur cũng tương tự được loại bỏ rất nhiều chi tiết rườm rà, tạo nên một đôi sneaker tối giản đến không ngờ. \" height=\"692\" width=\"1232\"></span><em>Mẫu giày Yzy Knit RNR Sulfur cũng tương tự được loại bỏ rất nhiều chi tiết rườm rà, tạo nên một đôi sneaker tối giản đến không ngờ.</em></p><p><span style=\"color: rgb(51, 51, 51);\">Mẫu giày Adidas Yeezy Knit Runner Stone Carbon &amp; Sulfur được thiết kế đơn giản đến mức tối giản. Ngoài dòng chữ thể hiện size ở phần cổ giày và tên thương hiệu ở đế giày ra thì không có thêm bất kỳ chi tiết nào khác. Tuy thiết kế đơn giản những chi tiết thiết kế của mẫu giày này giúp tạo nên vẻ ngoài không hề nhàm chán.</span></p><blockquote>Bài liên quan: Cách&nbsp;<a href=\"https://giaygiare.vn/cach-buoc-day-giay-yeezy-350-700-don-gian-ma-doc-dao.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">buộc dây giày Adidas Yeezy</a>&nbsp;đơn giản mà độc đáo</blockquote><h3>Chất liệu tạo nên giày Yzy Knit RNR Stone Carbon &amp; Sulfur</h3><ul><li>Cả đôi giày Yzy Knit RNR Stone Carbon &amp; Sulfur chỉ sử dụng 2 loại chất liệu chủ đạo là: Phần thân được làm bằng vải dệt kim knit, mềm mại, thân thiện với môi trường, giúp ôm sát bàn chân.</li><li>Phần đế sử dụng chất liệu cao su nguyên chất để mang đến cho người dùng trải nghiệm di chuyển tốt nhất.</li></ul><p class=\"ql-align-center\"><span style=\"color: rgb(51, 51, 51); font-size: 15px;\"><img src=\"https://giaygiare.vn/upload/images/yzy-knit-rnr-stone-carbon-sulfur-4.jpg\" alt=\"Chất liệu tạo nên giày Adidas Yeezy Knit Runner cao cấp và thân thiện với môi trường\" height=\"784\" width=\"1014\"></span><em>Chất liệu tạo nên giày Adidas Yeezy Knit Runner cao cấp và thân thiện với môi trường</em></p><h3>Màu sắc của giày Yzy Knit RNR Stone Carbon &amp; Sulfur</h3><ul><li>Đôi giày&nbsp;Adidas YEEZY Knit RNR Stone Carbon&nbsp;sở hữu hai tông màu trung tính là xám và cam đất vô cùng khác biệt. Đây là màu sắc mạnh mẽ, năng động và phù hợp với mọi giới tính. Đồng thời giúp bạn có được Item sáng tạo, độc đáo trong tủ giày sneaker của mình.</li><li>Đôi giày Adidas YEEZY Knit RNR Sulfur được sử dụng 2 màu chủ đạo là&nbsp;trắng ngà và vàng sulfur. Phần cổ giày được dệt bằng vải màu trắng ngà, còn tất cả các phần còn lại kể cả đế giày đều được phủ màu vàng sulfur cực kỳ nổi bật.</li></ul><blockquote>Nhiều người quan tâm:&nbsp;<a href=\"https://giaygiare.vn/phoi-do-cuc-chat-voi-giay-adidas-yeezy.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Phối đồ \'cực chất\' dành cho giới trẻ với mẫu giày Adidas Yeezy</a></blockquote><h2><strong>Giá bán của Adidas Yzy Knit RNR Stone Carbon &amp; Sulfur là bao nhiêu?</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Mẫu giày&nbsp;Yzy Knit RNR Stone Carbon &amp; Sulfur&nbsp;đều được Adidas giới thiệu với giá bán niêm yết vào thời điểm mở bán là&nbsp;200$.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Tuy nhiên khi về đến Việt Nam thì giá của các mẫu giày này chắc chắn sẽ tăng cao hơn, tùy vào địa điểm khởi bán. Bởi vì chi phí vận chuyển và đặc biệt là các mẫu giày của nam rapper Kanye West hợp tác với Adidas thường không có số lượng nhiều. Và nhu cầu săn tìm giày độc lạ thì ngày càng cao, vậy nên sẽ khiến giá của mẫu giày này ngày càng tăng cao.</span></p><blockquote>Hiện nay, để sở hữu được mẫu giày Adidas Yzy Knit RNR Stone Carbon &amp; Sulfur độc lạ, phá cách và nổi bật này thì bạn có thể mua tại các Store và Website của Adidas, hoặc các cửa hàng phân phối trên toàn cầu.</blockquote><p><span style=\"color: rgb(51, 51, 51);\">Qua những thông tin chia sẻ về hai mẫu giày&nbsp;Yzy Knit RNR Stone Carbon &amp; Sulfur&nbsp;phía trên,&nbsp;</span><a href=\"https://giaygiare.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Tulo shop</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;hy vọng đã giúp bạn có được nhiều điều hữu ích. Hãy thường xuyên theo dõi chúng tôi để cập nhật được các tin tức mới nhất về các mẫu giày sneaker nhé!</span></p>', 1, '3BySs8yIPj-yzy-knit-rnr-stone-carbon-sulfur.jpg', 13, '2022-06-05 03:08:29', '2022-07-09 02:10:01'),
(3, 3, 'HÌNH ẢNH CỦA YEEZY 350 LIGHT ĐỔI MÀU KHI CHIẾU TIA UV', 'hinh-anh-cua-yeezy-350-light-doi-mau-khi-chieu-tia-uv', 12, 'Sneaker Adidas Yz350 vốn rất được giới trẻ yêu thích trong những năm vừa qua vì sự hỗ trợ công năng tuyệt đỉnh trong thiết kế của nó. Và ngạc nhiên hơn khi phiên bản mới ra mắt này có sự biến hóa đặc biệt chưa từng thấy trước đây!', '<p><span style=\"color: rgb(51, 51, 51);\">Thương hiệu Yeezy luôn là cái tên khiến người hâm mộ háo hức vì những bản phối màu cực đỉnh mà ai cũng muốn sở hữu. Hôm nay chúng ta sẽ cùng khám phá mẫu giày&nbsp;Adidas Yeezy 350 \"Light\"&nbsp;đổi màu khi chiếu tia UV&nbsp;xem có gì khiến nhiều người quan tâm nhé!</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/sanpham/large/hinh-anh-cua-yeezy-350-light-doi-mau-khi-chieu-tia-uv.jpg\" alt=\"Yeezy 350 Light có thật sự đổi màu khi chiếu tia UV vào\" height=\"700\" width=\"1200\"><em>Yeezy 350 Light có thật sự đổi màu khi chiếu tia UV vào</em></p><blockquote>Xem thêm:&nbsp;<a href=\"https://giaygiare.vn/adidas-yeezy-350-mx-rock-ra-mat.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Adidas Yeezy 350 MX Rock ra mắt cuối năm nay có gì đặc biệt?</a></blockquote><h2><strong>Sự ra đời của giày Adidas Yeezy 350 \"Light\"</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Các sản phẩm thuộc dòng&nbsp;</span><a href=\"https://giaygiare.vn/adidas-yeezy-350\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Yeezy 350 V2</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;được xem là thương hiệu thành công nhất trong dòng giày Adidas. Chính vì vậy nên Kanye West muốn khai thác dòng sản phẩm này nhiều hơn với các bản phối màu đa dạng để phục vụ cho nhu cầu của khách hàng.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Và đôi&nbsp;Adidas Yeezy 350 V2 \"Light\"&nbsp;được ra mắt thị trường với thiết kế mới mẻ và thừa hưởng những công nghệ đỉnh cao tạo nên nét đặc biệt, cực kỳ giá trị.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/hinh-anh-yeezy-350-light.jpg\" alt=\"Giày Adidas Yeezy 350 &quot;Light&quot; có màu xám bạc trầm tính\" height=\"720\" width=\"1280\"><em>Giày Adidas Yeezy 350 \"Light\" có màu xám bạc trầm tính</em></p><h2><strong>Thiết kế và chất liệu của giày Yeezy 350 \"Light\"</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Mẫu giày mới Yeezy Boost 350 V2 “Light” của nhà Adidas thoạt nhìn sẽ thấy có ngoại hình &amp; màu sắc khá giống với đôi&nbsp;</span><a href=\"https://giaygiare.vn/adidas-yeezy-boost-350-v2-lundmark-3m-reflective-nam-nu-1-1.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Yeezy 350 V2 Lundmark</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;đã ra mắt vào năm 2018.</span></p><ul><li>Đôi&nbsp;giày Adidas Yeezy 350 \"Light\"&nbsp;sở hữu phần upper với thiết kế và chất liệu Primeknit giữ nguyên như các sản phẩm trước. Bởi đây là thiết kế hoàn hảo giúp tạo sự đàn hồi, co giãn và ôm khít chân cực tốt, mang đến cảm giác thoải mái cho người dùng.</li><li>Phần&nbsp;đế giày Yeezy 350 \"Light\"&nbsp;cũng được tạo nên từ 2 loại chất liệu quen thuộc. Bên ngoài là lớp cao su dẻo giúp tạo hình trang trí, với những đường rãnh tạo độ bám tốt, đồng thời bảo vệ phần lõi boost bên trong.</li><li>Phần lõi đế boost phía trong là công nghệ độc quyền của nhà Adidas giúp người mang luôn cảm nhận được sự êm ái, thoải mái và độ đàn hồi cao, hỗ trợ di chuyển cực tốt.</li></ul><blockquote>Tìm hiểu:&nbsp;<a href=\"https://giaygiare.vn/giay-yeezy-boost-350-v2-mx-oat-voi-mau-doc-dao.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Giày Yeezy Boost 350 V2 \'MX Oat\' với màu độc đáo</a></blockquote><h2><strong>Màu sắc mới lạ của Yeezy 350 \"Light\"</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Về màu sắc thì phiên bản&nbsp;Adidas YZ350 \"Light\"&nbsp;được thiết kế phần upper màu trắng tinh khiết. Kết hợp với đó là các dải màu họa tiết bằng vải thoáng khí bên hông giày được thiết kế màu trắng và tông màu sáng nhạt.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Phần đế boost chính bên trong được bao bọc bởi lớp đế cao su dẻo với các đường gân nổi màu trắng trong và được làm bo tròn rất vừa vặn với phần gót.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/hinh-anh-yeezy-350-light-1.jpg\" alt=\"Màu sắc của giày Adidas Yeezy 350 &quot;Light&quot;\" height=\"720\" width=\"1280\"><em>Màu sắc của giày Adidas Yeezy 350 \"Light\"</em></p><p><span style=\"color: rgb(51, 51, 51);\">Với phong cách đơn sắc và đơn giản mẫu giày&nbsp;Adidas Yeezy Light&nbsp;này sẽ trở thành một trong những mẫu giày được người hâm mộ tìm kiếm nhiều nhất trong thời gian sắp tới đó nhé!</span></p><blockquote>Tổng thể đôi giày Yeezy 350 \"Light\" này với những màu sắc đơn giản rất phù hợp để phối với mọi loại trang phục cho mọi đối tượng khách hàng.</blockquote><h2><strong>Giày Yeezy 350 \"Light\" đổi màu khi chiếu tia UV</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Mẫu giày thể thao Adidas Yeezy Boost 350 V2 ‘Light’ có vẻ là một đôi giày khá đơn giản với tông màu trắng chủ đạo. Tuy nhiên điểm khác biệt của phiên bản này là có thể đổi màu khi chiếu tia UV. Đây là công nghệ mới đặc biệt và nổi trội tạo nên giá trị và dấu ấn của Kanye West mà chưa từng có trước đó.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Phần upper của giày được tích hợp giữa chất liệu Primeknit với vật liệu nhạy cảm với tia UV. Khi gặp ánh sáng mặt trời các sọc trên giày sẽ đổi sang màu hồng nhạt nhẹ nhàng. Còn khi gặp ánh sáng nhân tạo như ở các bar club thì sẽ đổi sang màu ngà tinh tế. Và phần sọc bên hông của giày sẽ chuyển sang thành tông màu hổ phách nổi bật.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/hinh-anh-yeezy-350-light-2.jpg\" alt=\"Phiên bản giày Adidas Yeezy 350 &quot;Light&quot; có thể đổi màu khi chiếu tia UV\" height=\"640\" width=\"960\"><em>Phiên bản giày Adidas Yeezy 350 \"Light\" có thể đổi màu khi chiếu tia UV</em></p><blockquote>Bài liên quan:&nbsp;<a href=\"https://giaygiare.vn/giay-yeezy-350-doi-mau-nhu-the-nao-gia-bao-nhieu.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Giày Yeezy 350 đổi màu như thế nào? Giá bao nhiêu?</a></blockquote><h2><strong>Giá bán của giày Adidas Yeezy 350 \"Light\" bao nhiêu?</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Chắc chắn mức&nbsp;giá bán giày Yeezy 350 Light&nbsp;luôn là một điều mà các tín đồ sneaker quan tâm phải không nào? Đôi giày&nbsp;sneaker Adidas Yeezy 350 \"Light\"&nbsp;được ra mắt thị trường vào ngày 29 tháng 08 năm 2021, với mức giá bán khởi điểm là 220 USD.</span></p><blockquote>Đây là mức giá mở bán tương đương với hầu hết các sản phẩm khác thuộc thương hiệu&nbsp;<a href=\"https://giaygiare.vn/giay-yeezy\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Yeezy Boost</a>&nbsp;trong ngày phát hành. Tuy nhiên, người dùng trên toàn cầu thường khó mua được với mức giá khởi điểm này, mà phải mua thông qua các bên trung gian với mức giá chênh lệch tùy địa điểm và thời điểm.</blockquote><p><span style=\"color: rgb(51, 51, 51);\">Bởi vì số lượng sản xuất giày Adidas Yeezy 350 \"Light\" có giới hạn, nên sản phẩm trở nên khan hiếm và khiến giá của đôi giày này&nbsp;ngày càng tăng cao.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/hinh-anh-yeezy-350-light-3.jpg\" alt=\"Giá bán khởi điểm của giày Adidas Yeezy 350 &quot;Light&quot; là 220 USD\" height=\"720\" width=\"1280\"><em>Giá bán khởi điểm của giày Adidas Yeezy 350 \"Light\" là 220 USD</em></p><p><span style=\"color: rgb(51, 51, 51);\">Qua bài viết này&nbsp;</span><a href=\"https://giaygiare.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Tulo Shop</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;hy vọng đã cung cấp những thông tin hữu ích nhất về phiên bản giày Adidas Yeezy 350 \"Light\". Nếu bạn đang yêu thích và muốn tìm mua đôi giày thể thao độc đáo này. Vậy hãy liên hệ ngay với Tulo Shop để sở hữu ngay sản phẩm chất lượng với mức giá cực hời nhé!</span></p>', 1, 'GudvF2PNhp-hinh-anh-cua-yeezy-350-light-doi-mau-khi-chieu-tia-uv.jpg', 13, '2022-06-05 03:11:21', '2022-06-14 03:37:19'),
(4, 3, 'HÌNH ẢNH MỚI NHẤT CỦA ADIDAS YEEZY QNTM \'FLAORA\'', 'hinh-anh-moi-nhat-cua-adidas-yeezy-qntm-flaora', 3, 'Một năm vừa qua là thời gian vô cùng khó khăn của tất cả mọi người trên thế giới đã gây thiệt hại rất lớn về tính mạng, tinh thần & tài chính, kiềm hãm sự phát triển của nền kinh tế. Tuy nhiên thì thương hiệu Adidas Yeezy vẫn cho trình làng mẫu siêu phẩm mới mang tên QNTM FLAORA.', '<p><span style=\"color: rgb(51, 51, 51);\">Giày&nbsp;Yeezy QNTM \"Flaora\"&nbsp;được cập nhật hình ảnh mới nhất trên các trang mạng xã hội trong thời gian gần đây. Mẫu giày thể thao mới mẻ của thương hiệu Adidas YEEZY QNTM này có tông màu chủ đạo là màu đồng gỉ. Đây hứa hẹn sẽ là một phiên bản tiếp tục tạo nên cơn lốc trong làng thời trang đường phố.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/sanpham/large/hinh-anh-moi-nhat-cua-adidas-yeezy-qntm-flaora.jpg\" alt=\"Giày Adidas Yeezy QNTM &quot;Flaora&quot; có màu sắc trầm tính\" height=\"800\" width=\"1200\"><em>Giày Adidas Yeezy QNTM \"Flaora\" có màu sắc trầm tính</em></p><blockquote>Tìm hiểu:&nbsp;<a href=\"https://giaygiare.vn/adidas-yeezy-qntm-amber-tint-sap-ra-mat.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Adidas Yeezy QNTM \'Amber Tint\' sắp ra mắt cuối năm nay</a></blockquote><h2><strong>Thiết kế và màu sắc đặc biệt của Yeezy QNTM \"Flaora\"</strong></h2><p><a href=\"https://giaygiare.vn/giay-yeezy\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Yeezy Adidas</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;là thương hiệu đầu tiên của ca sĩ&nbsp;Kanye West&nbsp;về sneaker sau khi chính thức kết hợp với&nbsp;Adidas. Kanye West cùng các cộng sự của mình luôn cố gắng nỗ lực để mang đến cho khách hàng những mẫu giày chất lượng và độc đáo nhất.</span></p><blockquote>Đôi giày&nbsp;Adidas Yeezy QNTM Flaora&nbsp;là một bản phối màu nổi bật mới xuất hiện sau thành công của hai phiên bản ra mắt vào năm 2020 là Teal Blue và Frozen Blue.</blockquote><p><span style=\"color: rgb(51, 51, 51);\">Ca sĩ Kanye West đã tạo nên một sự kiện chấn động với những đôi sneaker đặc biệt này khi lựa chọn di chuyển bằng xe tải kiểu quân đội và tặng giày miễn phí cho các fan hâm mộ cũng như các sneakerhead và người đi đường ở thành phố Chicago.</span></p><ul><li>Thiết kế của đôi giày Adidas Yeezy QNTM \"Flaora\" thực sự là sự kết hợp hài hòa giữa thời trang đường phố đậm nét Kanye West cùng với phong cách thể thao bóng rổ.</li><li>Sở hữu bảng màu táo bạo được các nhà thiết kế kết hợp lựa chọn pha trộn giữa các màu sắc đen khói, màu đồng gỉ, màu nâu cho phần upper Primeknit. Điều này đã tạo nên một bản phối màu hoàn hảo và dáng vẻ cuốn hút cho mẫu giày này.</li></ul><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/hinh-anh-moi-nhat-cua-adidas-yeezy-qntm-flaora.jpg\" alt=\"Thiết kế mới mẻ và nổi bật của phiên bản giày Adidas Yeezy QNTM &quot;Flaora&quot;\" height=\"653\" width=\"1160\"><em>Thiết kế mới mẻ và nổi bật của phiên bản giày Adidas Yeezy QNTM \"Flaora\"</em></p><ul><li>Màu đồng gỉ xuất hiện với hình lượn sóng phủ trên phần upper, kết hợp xen kẽ với tông màu đen mạnh mẽ, tạo sự nổi bật hơn về phía cổ giày. Các lớp phủ màu sắc mới mẻ này nằm trên một lớp base vật liệu lưới mesh trong mờ có khả năng phản quang trong bóng tối.</li><li>Bao quanh phần upper là mũi giày bằng da lộn màu nâu xám, tạo nên sự tương phản đẹp mắt. Cùng với đó là phần cổ giày được thiết kế cắt góc chéo màu đen khói bao bọc bảo vệ xuống cả bên ngoài gót giày, tạo nên ngoại hình rất thể thao và cá tính cho đôi Adidas Yeezy QNTM \"Flaora\".</li><li>Phần gót giày ở đế giữa được thiết kế với màu xám trong mờ. Bên trong đế giữa là bộ đệm boost quen thuộc, đàn hồi vào êm ái tạo nên thương hiệu Adidas. Phần đế giày sử dụng công nghệ Boost tiên tiến cũng là bộ phận quan trọng góp phần nâng tầm giá trị của mẫu giày&nbsp;Yz QNTM \"Flaora\"&nbsp;này.</li><li>Phần buộc dây được tạo hình bầu dục màu đen, kết hợp với đế ngoài trong suốt cũng là điểm nhấn mang đến vẻ đẹp hoàn thiện cho đôi giày.</li></ul><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/hinh-anh-moi-nhat-cua-adidas-yeezy-qntm-flaora-1.jpg\" alt=\"Sự kết hợp màu sắc độc đáo đã mang đến một đôi giày Adidas Yeezy QNTM &quot;Flaora&quot; cực kì ấn tượng.\" height=\"1440\" width=\"1200\"><em>Sự kết hợp màu sắc độc đáo đã mang đến một đôi giày Adidas Yeezy QNTM \"Flaora\" cực kì ấn tượng.</em></p><h2><strong>Phối đồ Adidas Yeezy QNTM Flaora</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Sở hữu một đôi&nbsp;Yeezy \"Flaora\"&nbsp;bạn sẽ trở nên vô cùng nổi bật và phong cách. Bạn có thể thoải mái kết hợp đôi giày mới lạ này với nhiều kiểu phong cách thời trang khác nhau như: áo phông đơn giản với quần jogger, quần jeans, quần short, hay kết hợp thêm áo khoác để tạo phong cách đường phố nổi bật.</span></p><blockquote>Bản thân ca sĩ Kanye West khi phối kết hợp đôi sneakers Adidas Yeezy QNTM \"Flaora\" đi cùng outfit quần Jogger Pant và Hoodie cũng vô cùng đẹp mắt và cuốn hút.</blockquote><h2><strong>Yeezy \"Flaora\" mở bán khi nào và mức giá bao nhiêu?</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Giá bán của phiên bản giày&nbsp;Yeezy QNTM \"Flaora\"&nbsp;được dự kiến sẽ giao động từ&nbsp;</span><span style=\"color: rgb(255, 0, 0);\">250 - 303 USD</span><span style=\"color: rgb(51, 51, 51);\">&nbsp;(tương đương khoảng từ&nbsp;</span><span style=\"color: rgb(255, 0, 0);\">5.700.000 - 7.000.000 vnđ</span><span style=\"color: rgb(51, 51, 51);\">). Tuy nhiên chưa có thông tinh chính thức về giá bán cũng như ngày ra mắt của mẫu giày&nbsp;YZ \"Flaora\"&nbsp;này.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/hinh-anh-moi-nhat-cua-adidas-yeezy-qntm-flaora-2.jpg\" alt=\"Dự kiến giá mở bán của giày Adidas Yeezy QNTM &quot;Flaora&quot; vào khoảng từ 250 - 303 USD\" height=\"1440\" width=\"1200\"><em>Dự kiến giá mở bán của giày Adidas Yeezy QNTM \"Flaora\" vào khoảng từ 250 - 303 USD</em></p><p><span style=\"color: rgb(51, 51, 51);\">Trong những năm gần đây thương hiệu Adidas và Kanye West vẫn chưa tung ra các thiết kế sản phẩm mới một cách mạnh mẽ. Phổ biến nhất vẫn là các bản phối màu đa dạng của&nbsp;</span><a href=\"https://giaygiare.vn/adidas-yeezy-350\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Adidas Yeezy 350</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;cũng như restock các phối màu hype kể từ khi họ hợp tác cùng nhau.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Vậy nên mẫu giày Adidas Yeezy QNTM \"Flaora\" độc đáo này đang được rất nhiều các sneakerhead trên toàn cầu mong đợi.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Hy vọng trong tương lai thương hiệu Adidas và Kanye West sẽ ra mắt thêm nhiều mẫu sản phẩm sneaker mới để thỏa lòng mong đợi của fan hâm mộ.</span></p><p><em style=\"color: rgb(51, 51, 51);\">Ngoài, ra nếu bạn muốn biết mẫu giày Adidas Yeezy QNTM \"Flaora\" có phải là phiên bản giới hạn hay không, thì hiện tại vẫn chưa có câu trả lời chính thức chắc chắn nào cả. Vậy nên để cập nhật được những thông tin mới nhất về giày Adidas Yeezy QNTM \"Flaora\" cũng như các mẫu giày sneaker hot nhất thị trường toàn cầu, thì hãy thường xuyên theo dõi website của Tulo Shop nhé!</em></p><p><a href=\"https://giaygiare.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Tulo Shop</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;hiện đang là cửa hàng chuyên cung cấp các mẫu giày sneaker nam, nữ hot nhất thị trường với chất lượng đảm bảo cùng giá bán &amp; nhiều chương trình tri ân khách hàng cực kỳ hấp dẫn. Nếu bạn cũng đang muốn tìm kiếm cho mình những mẫu sneaker phù hợp nhất thì hãy liên hệ ngay với Tulo Shop để được đội ngũ nhân viên chuyên nghiệp tư vấn tận tình nhé!</span></p>', 1, 'I8r6OPo4z3-hinh-anh-moi-nhat-cua-adidas-yeezy-qntm-flaora.jpg', 13, '2022-06-05 03:12:30', '2022-07-08 21:12:22'),
(5, 3, 'ADIDAS YEEZY 700 BOOST \'SULFUR YELLOW\' ĐÃ RA MẮT NĂM NAY', 'adidas-yeezy-700-boost-sulfur-yellow-da-ra-mat-nam-nay', 4, 'Yz700 Sulfur Yellow có bản màu khá đặc biệt khi kết hợp màu vàng, da kem, nâu & đế đen. Sử dụng chất liệu da lộn & đế boost hỗ trợ tối đa cho người dùng', '<p><span style=\"color: rgb(51, 51, 51);\">Siêu phẩm giày&nbsp;Yeezy 700 Boost \'Sulfur Yellow\'&nbsp;là một trong những mẫu giày xịn xò của thương hiệu Adidas được mong đợi nhất năm 2022.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Với xu hướng thị trường đang tìm kiếm một đôi giày sneaker độc lạ hiện nay đôi giày này hứa hẹn sẽ được săn đón nhiệt tình từ khách hàng trên khắp thế giới. Vậy mẫu giày thể thao này có gì đặc biệt, cùng&nbsp;Tulo Shop&nbsp;tìm hiểu nhé!</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/sanpham/large/adidas-yeezy-700-boost-sulfur-yellow-da-ra-mat-nam-nay.jpg\" alt=\"Yeezy 700 lại trở lại đầu năm nay với tên gọi: Sulfur Yellow\" height=\"700\" width=\"1200\"><em>Yeezy 700 lại trở lại đầu năm nay với tên gọi: Sulfur Yellow</em></p><blockquote>Xem thêm:&nbsp;<a href=\"https://giaygiare.vn/giay-yeezy-700-v3-copper-fade.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Giày Yeezy 700 V3 Copper Fade đã mở bán có gì đặc biệt?</a></blockquote><h2><strong>Yeezy 700 \'Sulfur Yellow\' - Siêu phẩm độc lạ cuốn hút của Mr.Kayne</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Đôi giày&nbsp;Yeezy 700 Boost \'Sulfur Yellow\'&nbsp;thuộc dòng giày&nbsp;</span><a href=\"https://giaygiare.vn/adidas-yeezy-700\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Adidas Yeezy 700</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;của nhà thiết kế Mr. Kayne. Siêu phẩm mới này “đốn ngã” nhiều khách hàng với thiết kế độc dị đỉnh cao cùng màu sắc cuốn hút và đã nhận được sự chào đón nồng nhiệt của người hâm mộ.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/adidas-yeezy-700-boost-sulfur-yellow.jpg\" alt=\"Siêu phẩm sneaker độc lạ cuốn hút Adidas Yeezy 700 Boost \'Sulfur Yellow\'\" height=\"760\" width=\"1070\"><em>Siêu phẩm sneaker độc lạ cuốn hút Adidas Yeezy 700 Boost \'Sulfur Yellow\'</em></p><p><span style=\"color: rgb(51, 51, 51);\">Phiên bản giày&nbsp;Adidas Yzy 700 Boost \'Sulfur Yellow\'&nbsp;mới nhất này đã không làm thất vọng các tín đồ của mình. Nhờ sự cải tiến ấn tượng trong thiết kế kết hợp cùng tính năng mạnh mẽ độc đáo.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Mẫu giày Yeezy 700 Boost \'Sulfur Yellow\' của nhà thiết kế Kanye West đã được thương hiệu Adidas công bố cùng với lịch phát hành mùa xuân dưới sự cho phép của YEEZY MAFIA.</span></p><blockquote>Tìm hiểu:&nbsp;<a href=\"https://giaygiare.vn/adidas-yeezy-700-moi-fade-azure.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Adidas Yeezy 700 trở lại với phiên bản mới \'Fade Azure\'</a></blockquote><h2><strong>Thiết kế hầm hố đặc trưng của giày Yeezy 700 Boost</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Giày&nbsp;Adidas Yeezy 700 \'Sulfur Yellow\'&nbsp;sở hữu kiểu dáng độc lạ, hầm hố đặc trưng của dòng giày Adidas Yeezy. Nhưng mẫu sneaker mới này có khá nhiều chi tiết nổi bật mới mẻ như:</span></p><ul><li>Thân giày được tạo nên từ các mảng màu ghép lại với nhau bằng những đường kim mũi chỉ cực kỳ chắc chắn. Sự khác biệt này tạo nên ấn tượng mạnh mẽ cho đôi giày Adidas Yeezy 700 Boost \'Sulfur Yellow\'. Điều này vừa làm tăng thêm sự mạnh mẽ, phóng khoáng, đồng thời giúp đôi giày trở nên phong cách và cá tính hơn rất nhiều.</li><li>Thiết kế đế giày lớn, trải đều từ phần gót đến mũi giày, tạo cảm giác mạnh mẽ, chắc chắn và tự tin cho người dùng. Kết hợp với đó là thiết kế cắt khoét táo bạo, vô cùng đẹp mắt, mang đến diện mạo vô cùng tươi mới và giúp tăng khả năng bám đường cho giày.</li><li>Các lỗ khoét ở phần đế và gót giày tuy là chi tiết khá nhỏ, nhưng lại rất được quan tâm. Với thiết kế lỗ khoét hình elip mang đến cho khách hàng sự tò mò, đồng thời tạo điểm nhấn cuốn hút mọi ánh nhìn.</li></ul><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/adidas-yeezy-700-boost-sulfur-yellow-1.jpg\" alt=\"Thiết kế giày Adidas Yeezy 700 Boost \'Sulfur Yellow\' độc đáo mang đến sự năng động và tươi mới\" height=\"1000\" width=\"1500\"><em>Thiết kế giày Adidas Yeezy 700 Boost \'Sulfur Yellow\' độc đáo mang đến sự năng động và tươi mới</em></p><h2><strong>Chất liệu giày Adidas Yeezy 700 Boost \'Sulfur Yellow\'</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Giày Adidas Yeezy 700 Boost \'Sulfur Yellow\' được tạo nên từ chất liệu da lộn cao cấp ở phần thân giày và công nghệ đế boost độc quyền ấn tượng.</span></p><h3>Thân giày được làm từ mesh và da lộn</h3><p><span style=\"color: rgb(51, 51, 51);\">Mẫu giày Adidas Yeezy 700 Boost \'Sulfur Yellow\' có phần thân giày được làm từ chất liệu da lộn tuyệt đẹp, siêu mềm mại và chắc chắn.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Đồng thời chất liệu da lộn cũng tạo nên một phong cách độc lạ và cuốn hút. Kết hợp với mesh (vải lưới) với những lỗ nhỏ thoáng khí, mang đến sự thông thoáng, mát mẻ. Đây là sự kết hợp tạo nên cực phẩm giày sneaker Adidas Yeezy 700 Boost \'Sulfur Yellow\' mà bất kỳ ai cũng muốn sở hữu.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/adidas-yeezy-700-boost-sulfur-yellow-2.jpg\" alt=\"Thân giày Yeezy 700 Boost \'Sulfur Yellow\' được làm từ vải lưới thoáng khí và da lộn\" height=\"760\" width=\"1070\"><em>Thân giày Yeezy 700 Boost \'Sulfur Yellow\' được làm từ vải lưới thoáng khí và da lộn</em></p><h3>Đế Boost cao cấp</h3><p><span style=\"color: rgb(51, 51, 51);\">Đôi giày Adidas Yeezy 700 Boost \'Sulfur Yellow\' được thiết kế với phần đế Boost cao cấp bên trong tạo ấn tượng mạnh đối với khách hàng. Đây là công nghệ độc quyền của Adidas mang đến sự êm ái, dễ chịu và tính đàn hồi cao tạo sự thoải mái và nâng đỡ tốt nhất cho khách hàng.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Bên ngoài lớp đế Boost được bao bọc bởi một lớp đế cao su bền bỉ, cứng cáp. Giúp bảo vệ đế giày đồng thời mang đến sự sang trọng, đẳng cấp và ấn tượng cho người dùng.</span></p><blockquote>Bài liên quan:&nbsp;<a href=\"https://giaygiare.vn/giay-yeezy-700-mnvn-honey-flux-co-gi-dac-biet.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Giày Yeezy 700 MNVN Honey Flux đã mở bán có gì đặc biệt?</a></blockquote><h2><strong>Màu sắc độc đáo đa dạng của Yeezy 700 Boost \'Sulfur Yellow\'</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Phong cách phối màu đỉnh cao của giày&nbsp;Adidas Yeezy 700 Sulfur Yellow&nbsp;chính là điều đặc biệt tạo nên sự thu hút khách hàng. Sự kết hợp hài hòa giữa nhiều màu sắc như vàng, đen, xanh, cam,... mang đến sự ấn tượng, nổi bật và gây thương nhớ cho bất kỳ ai nhìn thấy.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Phiên bản giày Yeezy 700 Boost \'Sulfur Yellow\' mới này được thiết kế theo phong cách sống động. Phần đế sử dụng tông màu đen, kết hợp phía trên là tông màu tiêu chuẩn trên phần toe box và lớp da lộn, cùng phần lưỡi gà má giày và gót giày có tông màu oliu nhạt.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Các đường viền mesh màu oliu nhạt được áp dụng trên phần cổ giày và dây giày sử dụng tông màu than nổi bật. Cuối cùng là phần midsole được bao phủ bởi tông màu nâu sẫm với các điểm nhấn màu đen nổi bật. Tất cả tạo nên một siêu phẩm sneaker vô cùng cuốn hút.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/adidas-yeezy-700-boost-sulfur-yellow-3.jpg\" alt=\"Sự kết hợp màu sắc độc đáo, nổi bật của giày Adidas Yeezy 700 Boost \'Sulfur Yellow\'\" height=\"701\" width=\"1479\"><em>Sự kết hợp màu sắc độc đáo, nổi bật của giày Adidas Yeezy 700 Boost \'Sulfur Yellow\'</em></p><blockquote>Tin xem nhiều:&nbsp;<a href=\"https://giaygiare.vn/phoi-do-cuc-chat-voi-giay-adidas-yeezy.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Phối đồ đẹp với Adidas Yeezy</a>&nbsp;\'cực chất\' dành cho giới trẻ</blockquote><p><span style=\"color: rgb(51, 51, 51);\">Qua bài viết này&nbsp;</span><a href=\"https://giaygiare.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Tulo Shop</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;đã giúp bạn tìm hiểu thông tin về phiên bản giày&nbsp;Adidas Yeezy Boost 700 \'Sulfur Yellow\'&nbsp;mới nhất. Nếu bạn là người yêu thích giày sneaker, thì hãy thường xuyên theo dõi trang web của chúng tôi để cập nhật những thông tin mới nhất nhé!</span></p>', 1, '2EKyC6L2II-adidas-yeezy-700-boost-sulfur-yellow-da-ra-mat-nam-nay.jpg', 13, '2022-06-05 03:14:31', '2022-06-13 22:44:44'),
(6, 3, '5 CÁCH BUỘC THẮT DÂY GIÀY AIR FORCE 1 ĐƠN GIẢN MÀ ĐỘC ĐÁO', '5-cach-buoc-that-day-giay-air-force-1-don-gian-ma-doc-dao', 9, 'Bạn đang tìm cách cột dây giày mẫu Nike AF1 sao cho thật đơn giản mà chất nhất, phù hợp với nhiều mục đích khác nhau? Hãy tham khảo ngay vài cách dưới đây để có thêm kiến thức, kinh nghiệm về mẫu siêu phẩm này nhé!', '<p><span style=\"color: rgb(51, 51, 51);\">Nike Air Force 1&nbsp;là dòng sneaker rất được ưa chuộng nhờ thiết kế năng động, trẻ trung và hiện đại &amp; đến hiện tại thì độ hot của nó vẫn chưa bao giờ ngừng khi đầu năm nay liên tục ra mắt thị trường những phiên bản đình đám nhất như&nbsp;</span><a href=\"https://giaygiare.vn/nike-air-force-1-low-sp-21-coffee.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Air Force 1 Coffee</a><span style=\"color: rgb(51, 51, 51);\">, Lucky Charm, Cashmere,...</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/nike-air-force-1-low-sp-21-coffee-1.jpg\" alt=\"Mẫu AF1 Coffee với bản màu cà phê đầy quyến rũ\" height=\"944\" width=\"1260\"><em>Mẫu AF1 Coffee với bản màu cà phê đầy quyến rũ</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/nike-air-force-1-low-white-black-midsole.jpg\" alt=\"Màu đen trắng phổ thông được custom lại khá nổi bật\" height=\"932\" width=\"1260\"><em>Màu đen trắng phổ thông được custom lại khá nổi bật</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/nike-air-force-1-low-white-brown.jpg\" alt=\"Phiên bản AF1 white brown đang rất hot &amp; được sử dụng rất nhiều nên dễ dàng nhận biết\" height=\"944\" width=\"1260\"><em>Phiên bản&nbsp;</em><a href=\"https://giaygiare.vn/nike-air-force-1-low-white-brown.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\"><em>AF1 white brown</em></a><em>&nbsp;đang rất hot &amp; được sử dụng rất nhiều nên dễ dàng nhận biết</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/nike-air-force-1-low-07-lx-lucky-charm-white.jpg\" alt=\"Bản trắng full được gắn thêm sợi xích vàng với logo Air Force truyền thống\" height=\"944\" width=\"1260\"><em>Bản trắng full được gắn thêm sợi xích vàng với logo Air Force truyền thống</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/nike-air-force-1-shadow-cashmere.jpg\" alt=\"Phiên bản AF1 Shadow dành riêng cho nữ vừa ra mắt đầu năm nay với màu sắc độc đáo\" height=\"944\" width=\"1260\"><em>Phiên bản AF1 Shadow dành riêng cho nữ vừa ra mắt đầu năm nay với màu sắc độc đáo</em></p><p><span style=\"color: rgb(51, 51, 51);\">Nếu bạn đang sở hữu giày Nike AF1 và muốn tạo cho mình điểm nhấn nổi bật riêng bên ngoài thì hãy tham khảo&nbsp;5 cách thắt dây giày đơn giản mà độc đáo&nbsp;dưới đây.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/sanpham/large/5-cach-buoc-that-day-giay-air-force-1-don-gian-ma-doc-dao.jpg\" alt=\"Tìm hiểu về cách thắt dây giày đơn giản mà độc đáo\" height=\"700\" width=\"1200\"><em>Tìm hiểu về cách thắt dây giày đơn giản mà độc đáo</em></p><h2><strong>1. Kiểu đan chéo quân đội</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Thắt buộc dây giày Nike Air Force 1&nbsp;đan chéo kiểu quân đội, là một cách phổ biến được nhiều người sử dụng. Bởi cách thắt dây giày khá đơn giản và nhanh chóng.</span></p><ul><li>Bước 1: Dòng giày Nike Air Force 1 thường kèm thêm miếng kim loại hoặc nhựa để trang trí ở phần thắt dây. Với kiểu buộc đan chéo này chúng ta nên gắn chúng vào chính giữa của sợi dây giày. Và thực hiện cân chỉnh sao cho mỗi bên đầu dây có chiều dài bằng nhau, để giúp việc thắt buộc không bị chênh lệch nhiều.</li><li>Bước 2: Thực hiện xỏ dây ở phần lỗ dưới gần mũi giày theo hướng từ trên xuống.</li><li>Bước 3: Thực hiện các bước đan chéo dây từ dưới lên mỗi bên, tiếp tục xỏ cho đến phần cố định ở lưỡi gà thì thực hiện xỏ xuyên qua để cố định dây. Và tiếp tục xỏ dây cho đến khi hết các lỗ.</li><li>Bước 3: Khi đã xỏ dây qua hết các lỗ trên giày, bạn có thể thắt nơ ở phần cuối, hoặc cũng có thể giấu dây giày vào trong phí dưới lưỡi gà theo ý thích.</li></ul><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/cach-buoc-that-day-giay-air-force-1.jpg\" alt=\"Cách buộc dây giày Nike AF1 theo kiểu đan chéo\" height=\"933\" width=\"1024\"><em>Cách buộc dây giày Nike AF1 theo kiểu đan chéo</em></p><h2><strong>2. Kiểu hình chữ thập</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Bạn có thể chọn&nbsp;cách buộc dây giày theo kiểu hình chữ thập&nbsp;để giúp đôi Air Force 1 của mình trông mới lạ và độc đáo hơn, theo các bước đơn giản như sau:</span></p><ul><li>Bước 1: Xỏ 2 đầu dây giày vào hàng lỗ đầu tiên gần mũi giày theo chiều từ trên xuống. Và thực hiện cân chỉnh sau cho hai bên dây bằng nhau, không bị xoắn.</li><li>Bước 2: Bắt chéo 2 phần dây giày này lại và tiến hành xỏ vào các lỗ đối diện liền kề, theo hướng từ ngoài vào trong. Như vậy sẽ tạo được nút chéo nằm lộ phía trên.</li><li>Bước 3: Tiếp theo thực hiện đan chéo 2 bên dây vào các lỗ đối diện liền kề phía trên, theo hướng từ trong ra ngoài. Lúc này bạn sẽ có nút thắt chữ thập nằm ở phía dưới.</li><li>Bước 4: Cứ như vậy lặp lại thao tác xỏ chéo tạo hình chữ thập phía trên và phía dưới ở bước 2 và bước 3 cho đến lỗ cuối cùng. Và thực hiện thắt nút hoặc giấu dây xuống dưới là xong.</li></ul><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/cach-buoc-that-day-giay-air-force-1-1.jpg\" alt=\"Kết quả của cách thắt dây giày Nike AF1 kiểu hình chữ thập.\" height=\"720\" width=\"1280\"><em>Kết quả của cách thắt dây giày Nike AF1 kiểu hình chữ thập.</em></p><blockquote>Xem thêm: Mách bạn&nbsp;<a href=\"https://giaygiare.vn/mach-ban-cach-phoi-do-chuan-nike-air-force-1.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">cách mix đồ với AF1</a>&nbsp;chuẩn phong cách</blockquote><h2><strong>3. Kiểu hình bậc thang</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Buộc thắt dây giày Nike AF1&nbsp;kiểu hình bậc thang&nbsp;cũng là một cách hay giúp đôi sneaker của bạn trông gọn gàng, đơn giản nhưng không kém phần phong cách.</span></p><ul><li>Bước 1: Xỏ dây giày vào lỗ đầu tiên gần mũi giày theo hướng từ ngoài vào trong. Thực hiện kéo 2 đầu dây cho bằng nhau.</li><li>Bước 2: Thực hiện xỏ 2 đầu dây giày lần lượt từ trái qua phải và từ dưới lên trên vào các lỗ trống liên tiếp.</li><li>Bước 3: Tiếp tục xỏ dây từ trên xuống dưới, sao cho phía trên chỉ thấy dây ngang giống hình bậc thang là đúng. Cứ như vậy xỏ cho đến khi hết các lỗ khuyên giày là được.</li></ul><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/cach-buoc-that-day-giay-air-force-1-2.jpg\" alt=\"Kết quả của cách buộc thắt dây giày kiểu hình bậc thang.\" height=\"777\" width=\"980\"><em>Kết quả của cách buộc thắt dây giày kiểu hình bậc thang.</em></p><h2><strong>4. Buộc dây thắt nơ</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Kiểu thắt nơ phía dưới cho&nbsp;</span><a href=\"https://giaygiare.vn/giay-air-force\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">giày Nike AF1</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;này khá mới lạ và đặt biệt phù hợp với phiên bản&nbsp;</span><a href=\"https://giaygiare.vn/nike-air-force-1-x-gdragon-para-noise.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">AF1 G-Dragon hoa cúc</a><span style=\"color: rgb(51, 51, 51);\">, giúp bạn trông nổi trội và thu hút hơn.</span></p><ul><li>Bước 1: Bắt đầu xỏ dây từ phần gần cổ chân hướng về phía mũi giày theo hướng từ ngoài vào trong. Nên bỏ 1 - 2 lỗ trên cùng và xỏ từ hàng lỗ số 3 để lộ họa tiết hoa cúc, đồng thời giúp việc xỏ và cởi giày dễ dàng hơn.</li><li>Bước 2: Thực hiện xỏ chéo dây giày từ trên xuống lần lượt qua các lỗ kế tiếp bên dưới cho đến khi hết lỗ thì kết thúc thắt nơ với phần dây dư ở phía mũi giày.</li></ul><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/cach-buoc-that-day-giay-air-force-1-3.jpg\" alt=\"Cách buộc thắt nơ phía dưới cho dây giày Nike Air Force 1\" height=\"629\" width=\"938\"><em>Cách buộc thắt nơ phía dưới cho dây giày Nike Air Force 1</em></p><blockquote>Tin liên quan:&nbsp;<a href=\"https://giaygiare.vn/chia-se-cach-ve-sinh-giay-nike-air-force-1-hieu-qua-nhat-cho-cac-tin-do-the-thao.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Chia sẻ cách vệ sinh giày Nike Air Force 1 hiệu quả nhất</a></blockquote><h2><strong>5. Kiểu hình lưới</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Cuối cùng là cách thắt dây giày Nike Air Force 1 theo&nbsp;kiểu hình lưới. Tuy đây là cách buộc dây giày hơi phức tạp hơn những cách trên một chút, nhưng sẽ giúp bạn tạo được sự độc đáo khiến nhiều người phải trầm trồ.</span></p><ul><li>Bước 1: Xỏ dây giày vào hàng đầu tiên gần phần mũi giày, theo hướng từ dưới lên. Thực hiện cân chỉnh cho 2 bên dây dài bằng nhau.</li><li>Bước 2: Thực hiện bắt chéo 2 bên dây lên và xỏ vào hàng lỗ số 4 từ dưới phía mũi giày tính lên.</li><li>Bước 3: Tiếp tục luồn 2 dây xuống hàng lỗ bên dưới, rồi bắt chéo lên trên xỏ xuống vào lỗ thứ 2.</li><li>Bước 4: Thực hiện xỏ luồn 2 dây giày vào hàng lỗ thứ 3, rồi đan chéo dây ở lỗ số 3 này từ dưới lên xỏ vào lỗ cuối cùng. Và thắt nơ cố định là xong.</li></ul><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/cach-buoc-that-day-giay-air-force-1-4.jpg\" alt=\"Cách buộc dây giày Nike Air Force 1 theo hình lưới\" height=\"675\" width=\"1200\"><em>Cách buộc dây giày Nike Air Force 1 theo hình lưới</em></p><blockquote>Bạn nên biết: Bật mí&nbsp;<a href=\"https://giaygiare.vn/shop-ban-giay-nike-air-force-1-replica-gia-re-nhat-tai-tphcm.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">shop giày Nike AF1</a>&nbsp;giá rẻ &amp; chất lượng nhất tại Tp.HCM</blockquote><p><span style=\"color: rgb(51, 51, 51);\">Phía trên là&nbsp;5 cách buộc thắt dây giày Air Force 1 đơn giản, độc đáo&nbsp;mà Tulo Shop gợi ý đến bạn. Hy vọng sẽ những kiến thức nhỏ sẽ giúp bạn có thêm nhiều kiểu biến tấu dễ dàng để trở nên nổi bật và thu hút hơn với đôi giày của mình nhé!</span></p><p><span style=\"color: rgb(51, 51, 51);\">Và nếu có nhu cầu sở hữu các mẫu giày Nike Air Force 1 chất lượng, giá tốt nhất trên thị trường có thể ghé ngay Shop giày Tulo. Đảm bảo&nbsp;Vừa lòng khách đến - Hài lòng khách đi.</span></p><ol><li>Tất cả mẫu đều để giá bán, giá ưu đãi rõ ràng.</li><li>Hình ảnh được chụp thật bằng cam thường, không chỉnh sửa.</li><li>Bạn được kiểm tra hàng mới thanh toán, nên không lo vụ \"treo đầu dê bán thịt chó\" đâu nhé.</li><li>Miễn phí ship toàn quốc. Hiện tại còn hỗ trợ tặng vớ cho khách \"dễ xương\" nữa ak.</li><li>Được đổi trả nếu hàng không đúng chất lượng hoặc không giống như shop tư vấn.</li><li>Đổi size thoải mái nếu mang rộng hoặc chật. Có điều shop chỉ freeship lần đầu thôi nghen.</li></ol><p><span style=\"color: rgb(51, 51, 51);\">Với những lý do trên thì bạn còn ngại gì mà không lựa chọn ngay 1 đôi để xem đúng như shop trình bày không nhé! Dưới đây là 1 số mẫu&nbsp;</span><a href=\"https://giaygiare.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Tulo Shop</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;đang bán rất chạy trong thời gian vừa qua, các bạn có thể tham khảo thử:</span></p>', 1, 'ZjWLi8dX6Q-nike-air-force-1-low-sp-21-coffee-1.jpg', 13, '2022-06-05 03:21:18', '2022-06-14 03:32:49');
INSERT INTO `posts` (`id`, `top_id`, `name`, `slug`, `view`, `short_desc`, `detail`, `status`, `image`, `updated_by`, `created_at`, `updated_at`) VALUES
(7, 3, 'TỔNG HỢP CÁC DÒNG MLB SNEAKER PHIÊN BẢN MỚI NHẤT', 'tong-hop-cac-dong-mlb-sneaker-phien-ban-moi-nhat', 2, 'Giày MLB Korea đang là hot trend trong thời trang sneaker của năm nay. Vì thế mà các phiên bản mới độc lạ của Mlb liên tục được ra mắt trên thị trường. Liệu bạn đã biết hết version mới nhất?', '<p><span style=\"color: rgb(51, 51, 51);\">Giày MLB&nbsp;là một trong những dòng sneaker xu hướng được giới trẻ yêu thích lựa chọn nhiều nhất hiện nay. Nhờ thiết kế năng động, sáng tạo, kiểu dáng độc đáo giúp tăng chiều cao hiệu quả nhưng vẫn đảm bảo độ êm ái, không quá nặng chân, nên khiến các mẫu&nbsp;giày MLB Korea&nbsp;có được chỗ đứng vững chắc trên thị trường.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Ở bài viết này Tulo shop sẽ giúp bạn tổng hợp thông tin về các dòng giày MLB phiên bản mới nhất, được ưa chuộng nhất hiện nay.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/sanpham/large/tong-hop-cac-dong-mlb-sneaker-phien-ban-moi-nhat.jpg\" alt=\"Giày MLB đang là xu hướng thời trang hiện đại của giới trẻ\" height=\"700\" width=\"1200\"><em>Giày MLB đang là xu hướng thời trang hiện đại của giới trẻ</em></p><blockquote>Xem thêm: Hướng dẫn bạn<a href=\"https://giaygiare.vn/huong-dan-ban-phoi-do-voi-sneaker-mlb-korea-that-ca-tinh.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">&nbsp;phối đồ với sneaker MLB Korea</a>&nbsp;thật cá tính</blockquote><p>Mang phong cách hầm hố nhưng lại đơn giản và sang trọng nên các mẫu giày MLB được xem là biểu tượng của thị trường giày sneaker Hàn Quốc.&nbsp;Mỗi năm thương hiệu này đều khiến khách hàng mãn nhãn với nhiều thiết kế lạ mắt, tinh tế và tỉ mỉ “quyến rũ” người mua. Dưới đây sẽ là tổng hợp các dòng giày&nbsp;<a href=\"https://giaygiare.vn/giay-mlb\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">sneaker MLB</a>&nbsp;mới và hot nhất hiện nay.</p><p><br></p><h2><strong>Giày MLB Big Ball Chunky Lite</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Dòng giày&nbsp;MLB Big Ball Chunky Lite&nbsp;được tin đồ thời trang cực kỳ ưu ái nhờ thiết kế form giày ôm sát chân. Đế cao su êm ái, độ bền tốt, đặc biệt giúp tăng thêm 6cm chiều cao nhưng vẫn rất thoáng khí và thấm hút mồ hôi hiệu quả.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Cùng với đó là đa dạng lựa chọn giúp người dùng dễ dàng phối đồ đa phong cách. Chính vì vậy nên mẫu giày này rất được ưa chuộng trong phong cách thời trang đường phố thường ngày.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Các sản phẩm giày thuộc dòng MLB Big Ball Chunky Lite gồm:</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-1.jpg\" alt=\"Giày MLB Big Ball Chunky Lite New York Yankees Mustard\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite New York Yankees Mustard</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-2.jpg\" alt=\"Giày Big Ball MLB Chunky Lite LA Dodgers Black\" height=\"1024\" width=\"1024\"><em>Giày Big Ball MLB Chunky Lite LA Dodgers Black</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-3.jpg\" alt=\"Giày MLB Big Ball Chunky Lite LA Dodgers Indigo\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite LA Dodgers Indigo</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-4.jpg\" alt=\"Giày MLB Big Ball Chunky Lite LA Dodgers Grey 3ASHC311N-07GRS\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite LA Dodgers Grey 3ASHC311N-07GRS</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-5.jpg\" alt=\"Giày MLB Big Ball Chunky Lite New York Yankees White\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite New York Yankees White</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-6.jpg\" alt=\"Giày MLB Big Ball Chunky Lite LA Dodgers Lavender\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite LA Dodgers Lavender</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-7.jpg\" alt=\"Giày MLB Big Ball Chunky Lite New York Yankees Ivory\" height=\"550\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite New York Yankees Ivory</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-8.jpg\" alt=\"Giày MLB Chunky LITE LA Dodgers Shoes Mint\" height=\"1024\" width=\"1024\"><em>Giày MLB Chunky LITE LA Dodgers Shoes Mint</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-9.jpg\" alt=\"Giày MLB Chunky LITE LA Dodgers Shoes Black\" height=\"900\" width=\"900\"><em>Giày MLB Chunky LITE LA Dodgers Shoes Black</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-10.jpg\" alt=\"Giày MLB Big Ball Chunky LITE New York Yankees Shoes 3ASHC3S1N-50CRS\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky LITE New York Yankees Shoes 3ASHC3S1N-50CRS</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-11.jpg\" alt=\"Giày Big Ball MLB Chunky Lite New York Yankees 32SHC3111-50W\" height=\"900\" width=\"900\"><em>Giày Big Ball MLB Chunky Lite New York Yankees 32SHC3111-50W</em></p><blockquote>Tìm hiểu:&nbsp;<a href=\"https://giaygiare.vn/sneaker-mlb-de-bi-troc-chu-logo-cach-khac-phuc.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Vì sao Sneaker MLB dễ bị tróc chữ logo &amp; cách khắc phục</a></blockquote><h2><strong>Dòng giày MLB Big Ball Chunky Lite SD</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Sản phẩm giày thuộc dòng&nbsp;MLB Big Ball Chunky Lite SD&nbsp;được sự đón nhận nồng nhiệt từ giới trẻ nhờ phong cách thể thao rất thời trang và dễ mix đồ với nhiều phong cách khác nhau.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Dưới đây là các mẫu giày thuộc dòng MLB Chunky Lite SD:</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-13.jpg\" alt=\"Giày MLB Big Ball Chunky Lite SD New York Yankees Cream\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite SD New York Yankees Cream</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-14.jpg\" alt=\"Giày MLB Chunky Lite SD New York Yankees Black\" height=\"900\" width=\"900\"><em>Giày MLB Chunky Lite SD New York Yankees Black</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-15.jpg\" alt=\"Giày MLB Big Ball Chunky Lite SD New York Yankees Grey\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite SD New York Yankees Grey</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-16.jpg\" alt=\"Giày MLB Big Ball Chunky Lite SD New York Yankees Brown\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Lite SD New York Yankees Brown</em></p><blockquote>Bài xem nhiều: Mách bạn&nbsp;<a href=\"https://giaygiare.vn/mix-do-voi-jordan-1-low-high-cuc-chat-danh-cho-gioi-tre.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">cách mix đồ với Jordan 1</a>&nbsp;chuẩn nên biết</blockquote><h2><strong>Dòng giày MLB Chunky Jogger</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Các sản phẩm giày dòng&nbsp;MLB Chunky Jogger&nbsp;được thiết kế theo phong cách unisex, hướng đến đa dạng đối tượng sử dụng. Các mẫu giày Chunky Jogger được sử dụng chất liệu da lộn kết hợp với vải lưới cao cấp tạo nên phong cách riêng biệt, độc đáo và đặc biệt tiện dụng trong các hoạt động ngoài chơi.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Các mẫu giày thuộc dòng MLB Chunky Jogger gồm:</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-17.jpg\" alt=\"Giày MLB Chunky Jogger Seamball LA Dodgers\" height=\"900\" width=\"900\"><em>Giày MLB Chunky Jogger Seamball LA Dodgers</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-18.jpg\" alt=\"Giày MLB Chunky Jogger Seambakk New York Yankees Ivory\" height=\"900\" width=\"900\"><em>Giày MLB Chunky Jogger Seambakk New York Yankees Ivory</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-19.jpg\" alt=\"Giày MLB Chunky Jogger Seamball New York Yankees Grey\" height=\"900\" width=\"900\"><em>Giày MLB Chunky Jogger Seamball New York Yankees Grey</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-20.jpg\" alt=\"Giày Chunky Jogger New York Yankees 32SHX1111-50M\" height=\"900\" width=\"900\"><em>Giày Chunky Jogger New York Yankees 32SHX1111-50M</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-21.jpg\" alt=\"Giày Chunky Jogger MLB New York Yankees Black\" height=\"900\" width=\"900\"><em>Giày Chunky Jogger MLB New York Yankees Black</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-22.jpg\" alt=\"Giày Chunky Jogger MLB New York Yankees 32SHX1111-50I\" height=\"900\" width=\"900\"><em>Giày Chunky Jogger MLB New York Yankees 32SHX1111-50I</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-23.jpg\" alt=\"Giày Chunky Jogger MLB New York Yankees 32SHX1111-50B\" height=\"900\" width=\"900\"><em>Giày Chunky Jogger MLB New York Yankees 32SHX1111-50B</em></p><blockquote>Nhiều người quan tâm:&nbsp;<a href=\"https://giaygiare.vn/cach-phoi-do-nike-sb-dunk.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">10 cách phối đồ với Nike SB Dunk được yêu thích nhất</a></blockquote><h2><strong>Giày MLB Big Ball Chunky Mesh</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Giày Big Ball Chunky Mesh MLB New York Yankees được thiết kế với màu sắc đơn giản, hợp thời trang. Phần thân giày được làm từ vải và da cao cấp, mềm mại. Phần đế giày được làm từ chất liệu cao su lưu hóa có độ bền cao và mang lại độ ma sát tốt.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Kết hợp với đó là form giày hầm hố tạo sự trẻ trung, giúp hack dáng và dễ dàng kết hợp cùng nhiều phong cách thời trang khác nhau để đi chơi, đi học, đi làm,...</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-24.jpg\" alt=\"MLB Bigball Chunky Mesh New York Yankees 3ASHCE12N-50CRS\" height=\"900\" width=\"900\"><em>MLB Bigball Chunky Mesh New York Yankees 3ASHCE12N-50CRS</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-25.jpg\" alt=\"Giày MLB Bigball Chunky Mesh New York Yankees Black\" height=\"596\" width=\"946\"><em>Giày MLB Bigball Chunky Mesh New York Yankees Black</em></p><h2><strong>Giày MLB Big Ball Chunky Pixel New York Yankees</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Giày&nbsp;MLB Big Ball Chunky Pixel New York&nbsp;mã số 3ASHCD22N-50BLD sở hữu thiết kế đẹp với form giày hiện đại tạo nên sự trẻ trung, năng động. Đôi giày màu trắng với từng đường may vô cùng tinh tế, sắc sảo, giúp tôn lên sự sang trọng cho người mang. Đồng thời mẫu giày này cũng rất dễ dàng phối hợp được với nhiều trang phục khác nhau.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Sản phẩm này được lấy cảm hứng từ sự pha trộn giữa phong cách thể thao, thời trang đường phố. Tạo nên sự kết hợp hoàn hảo giữa tiện ích và thời trang cho người dùng.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-26.jpg\" alt=\"Giày MLB Big Ball Chunky Pixel New York Yankees\" height=\"900\" width=\"900\"><em>Giày MLB Big Ball Chunky Pixel New York Yankees</em></p><h2><strong>Dòng giày MLB Chunky Classic Mono Embo</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Giày&nbsp;MLB Chunky Classic Mono Embo&nbsp;là dòng giày mang phong cách vintage với các họa tiết monogram được in ấn nổi bật một cách vô cùng tỉ mỉ và sang trọng trên nền da cao cấp.</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-27.jpg\" alt=\"Giày Chunky Classic Mono Embo MLB New York Yankees Black\" height=\"900\" width=\"900\"><em>Giày Chunky Classic Mono Embo MLB New York Yankees Black</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-28.jpg\" alt=\"Giày Chunky Classic Mono Embo MLB New York Yankees White\" height=\"900\" width=\"900\"><em>Giày Chunky Classic Mono Embo MLB New York Yankees White</em></p><h2><strong>Dòng giày MLB Chunky Classic</strong></h2><p><span style=\"color: rgb(51, 51, 51);\">Dòng&nbsp;giày MLB Chunky Classic&nbsp;là một trong những bộ sưu tập nổi tiếng nhất của thương hiệu MLB. Nhờ thiết kế mang phong cách cổ điển kết hợp các phối màu họa tiết thiết kế một cách tỉ mỉ khiến mẫu giày này trở nên trẻ trung, hiện đại và thời thượng hơn.</span></p><p><span style=\"color: rgb(51, 51, 51);\">Thoạt nhìn thoáng qua bạn sẽ cảm nhận thiết kế kiểu dáng của MLB Chunky Classic có vẻ giống 90% với&nbsp;</span><a href=\"https://giaygiare.vn/giay-mcqueen\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">sneaker McQueen</a><span style=\"color: rgb(51, 51, 51);\">&nbsp;nhưng chất liệu thì hoàn toàn khác nhé. Hiện tại có 3 mẫu&nbsp;giày MLB Chunky Classic&nbsp;chính gồm:</span></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-29.jpg\" alt=\"Giày Chunky Classic MLB New York Yankees 3ASXXA11N-50BKS\" height=\"900\" width=\"900\"><em>Giày Chunky Classic MLB New York Yankees 3ASXXA11N-50BKS</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-30.jpg\" alt=\"Giày Chunky Classic MLB New York Yankees 3ASXXA11N-50IVS\" height=\"900\" width=\"900\"><em>Giày Chunky Classic MLB New York Yankees 3ASXXA11N-50IVS</em></p><p class=\"ql-align-center\"><img src=\"https://giaygiare.vn/upload/images/mlb-sneaker-moi-nhat-31.jpg\" alt=\"Giày Chunky Classic LA Dodgers Indigo MLB 3ASXXA11N-07INS\" height=\"900\" width=\"900\"><em>Giày Chunky Classic LA Dodgers Indigo MLB 3ASXXA11N-07INS</em></p><blockquote>Bạn nên biết:&nbsp;<a href=\"https://giaygiare.vn/mix-do-voi-giay-mcqueen-ca-tinh-doc-dao-nen-tham-khao.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 115, 202);\">Mix đồ với giày Mcqueen cá tính &amp; độc đáo nên tham khảo</a></blockquote><p><span style=\"color: rgb(51, 51, 51);\">Như vậy qua bài viết này bạn đã nắm được tổng hợp các&nbsp;dòng MLB Sneaker phiên bản mới nhất. Nếu bạn đang yêu thích một trong những mẫu giày mới của nhà MLB thì hãy đến ngay Tulo Shop sở hữu ngay những siêu phẩm giày thương hiệu Hàn Quốc chất lượng cao giá tốt nhất nhé!</span></p>', 1, 'xoH9q52cCp-tong-hop-cac-dong-mlb-sneaker-phien-ban-moi-nhat.jpg', 13, '2022-06-05 03:22:59', '2022-06-28 22:17:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_id` bigint(20) UNSIGNED DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_desc` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(12,2) NOT NULL,
  `pricesale` double(12,2) NOT NULL DEFAULT '0.00',
  `origin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `material` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heel_height` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int(11) NOT NULL DEFAULT '11',
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `brand_id`, `slug`, `short_desc`, `detail`, `status`, `image`, `price`, `pricesale`, `origin`, `body`, `material`, `heel_height`, `quantity`, `updated_by`, `created_at`, `updated_at`) VALUES
(10, 'Puma MB.01 LaMelo Ball', 7, 'puma-mb01-lamelo-ball', 'Hậu vệ dẫn bóng của Charlotte Hornets và Tân binh Xuất sắc nhất NBA 2021 LaMelo Ball chuẩn bị tung ra đôi giày bóng rổ đầu tiên mang thương hiệu của mình vào tháng 10. Anh đã hợp tác Puma để phát hành đôi giày mang tên Puma MB.01.', '<p><em style=\"font-size: 15px;\">Giày Puma Electrify Nitro&nbsp;một mẫu giày thể thao cho phép bạn vận động và di chuyển cực kỳ linh hoạt, ngoài việc&nbsp;đáp ứng mọi nhu cầu đi lại&nbsp;hàng ngày&nbsp;Puma Electrify Nitro còn là mẫu giày chạy bộ rất tốt với mức giá hợp lý.</em></p><p><span style=\"font-size: 15px;\">Puma Electrify Nitro với đế giữa sử dụng công nghệ&nbsp;NITRO FOAM cho độ êm ái và phản&nbsp;lực cực tốt.</span></p><p><strong style=\"font-size: 15px;\">Giày Puma Electrify Nitro&nbsp;tại Myshoes.vn được nhập khẩu chính hãng. Full box, đầy đủ phụ kiện.&nbsp;</strong></p><p class=\"ql-align-center\"><span style=\"font-size: 15px;\"><img src=\"https://myshoes.vn/image/catalog/2022/puma/16.5/giay-puma-electrify-nitro-nam-den-xam-01.jpg\" alt=\"Giày Puma Electrify Nitro\"></span></p><p class=\"ql-align-center\"><span style=\"font-size: 15px;\"><img src=\"https://myshoes.vn/image/catalog/2022/puma/16.5/giay-puma-electrify-nitro-nam-den-xam-02.jpg\" alt=\"Giày Puma Electrify Nitro\"></span></p><p class=\"ql-align-center\"><span style=\"font-size: 15px;\"><img src=\"https://myshoes.vn/image/catalog/2022/puma/16.5/giay-puma-electrify-nitro-nam-den-xam-03.jpg\" alt=\"Giày Puma Electrify Nitro\"></span></p><p class=\"ql-align-center\"><span style=\"font-size: 15px;\"><img src=\"https://myshoes.vn/image/catalog/2022/puma/16.5/giay-puma-electrify-nitro-nam-den-xam-04.jpg\" alt=\"Giày Puma Electrify Nitro\"></span></p><p class=\"ql-align-center\"><span style=\"font-size: 15px;\"><img src=\"https://myshoes.vn/image/catalog/2022/puma/16.5/giay-puma-electrify-nitro-nam-den-xam-05.jpg\" alt=\"Giày Puma Electrify Nitro\"></span></p><p><strong style=\"color: rgb(255, 0, 0); font-size: 15px;\"><em>* NTTSHOP cam kết:</em></strong></p><p class=\"ql-align-justify\"><strong style=\"font-size: 15px;\">-&nbsp;Giày Puma Electrify Nitro&nbsp;chính hãng 100%. Phát hiện hàng Fake đền tiền gấp 2 lần giá sản phẩm.</strong></p><p class=\"ql-align-justify\"><strong style=\"font-size: 15px;\">- Myshoes.vn miễn phí giao hàng toàn quốc (với đơn hàng từ 500.000 vnđ).</strong></p><p class=\"ql-align-justify\"><strong style=\"font-size: 15px;\">- Đổi hàng trong 30 ngày.&nbsp;</strong><em style=\"font-size: 15px;\">(Áp dụng với sản phẩm chưa sử dụng, nguyên vẹn như khi nhận hàng)</em></p><p class=\"ql-align-justify\"><strong style=\"font-size: 15px;\">- Bảo hành sản phẩm trong 6 tháng.</strong></p><p class=\"ql-align-justify\"><strong style=\"color: rgb(231, 76, 60); font-size: 15px;\"><em>* Cách thức mua hàng:</em></strong></p><ul><li class=\"ql-align-justify\"><span style=\"font-size: 15px;\">- Khách hàng tiến hành MUA HÀNG trực tiếp trên website hoặc gọi điện tới Hotline: 0973 711 868 để được tư vấn.</span></li><li class=\"ql-align-justify\"><span style=\"font-size: 15px;\">- Khách hàng sẽ nhận được sản phẩm sau 1 - 3 ngày kể từ khi đặt hàng.</span></li></ul>', 0, 'G3DJmr4RUs-4.png', 5900000.00, 4900000.00, 'Hoa Kỳ', 'Cổ lùn', 'Nhựa EVA', '5cm', 15, 13, '2022-06-04 15:48:04', '2022-07-09 02:21:41'),
(12, 'Nike Dunk Low', 6, 'nike-dunk-low', 'Nike đã tiết lộ Dunk Low của mình trong một lần lặp lại “Xổ số” màu kem. Hình bóng phổ biến được chế tác với phần đế da truyền thống của nó có màu ngà nhạt được đánh bông, trong khi lớp phủ màu xanh lá cây sắc nét dọc theo hộp đựng giày, bảng điều khiển và khoen mang lại cho cặp đôi một sự tương phản, đẹp mắt.', '<p>Nike đã tiết lộ Dunk Low của mình trong một lần lặp lại “Xổ số” màu kem.</p><p><br></p><p>Hình bóng phổ biến được chế tác với phần đế da truyền thống của nó có màu ngà nhạt được đánh bông, trong khi lớp phủ màu xanh lá cây sắc nét dọc theo hộp đựng giày, bảng điều khiển và khoen mang lại cho cặp đôi một sự tương phản, đẹp mắt. Thương hiệu có thể được tìm thấy trên bảng điều khiển màu đen, lót và thẻ lưỡi, cũng như một thẻ treo đặc biệt trong thiết kế của biểu tượng cào xổ số. Dunk Low dựa trên đế giữa màu ngà nhạt và đế ngoài màu xanh lá cây sạch sẽ, với dây buộc màu xanh lá cây phù hợp để hoàn thành mô hình sạch sẽ.</p><p><br></p><p>Hãy nhìn vào chiếc giày ở trên. Nike (NYSE: NKE -1,75%) “Xổ số” Dunk Low được thiết lập để phát hành vào năm 2022 vào thời điểm này với giá $ 110 USD.</p>', 1, 'cadQZx2Io1-6.png', 11000000.00, 8900000.00, 'Pháp', 'Nike Flyknit', 'Flyleather', '5cm', 17, 13, '2022-06-04 15:56:58', '2022-06-15 08:40:43'),
(13, 'Nike Air Max 1', 6, 'nike-air-max-1', 'Nike Air Max 1 là thiết kế Nike Air Max đầu tiên của Tinker Hatfield. Đây là đôi giày thể thao đầu tiên có Max Air có thể nhìn thấy được và ra mắt vào năm 1987.', '<p>Nike Air Max 1 là thiết kế Nike Air Max đầu tiên của Tinker Hatfield. Đây là đôi giày thể thao đầu tiên có Max Air có thể nhìn thấy được và ra mắt vào năm 1987. Nó được nhiều người coi là một trong những đôi giày thể thao vĩ đại nhất trong lịch sử và tiếp tục là một mặt hàng được thèm muốn trong các phiên bản màu đặc biệt khác nhau, số lượng hạn chế và sự hợp tác với atmos, Size ?, và Parra. Xem các bài viết dưới đây để biết những thông tin cập nhật mới nhất về giày sneaker Air Max 1.</p>', 1, 'Vn8FmaJgw9-11.png', 3900001.00, 3900001.00, 'Mexico', 'Cổ lùn', 'Vải da', '3cm', 7, 13, '2022-06-04 16:08:33', '2022-06-13 12:29:57'),
(14, 'Nike Air Trainer 1 SP', 6, 'nike-air-trainer-1-sp', 'Như mong đợi được xây dựng cho sự trở lại dạng “Chlorophyll” ban đầu, Nike Air Trainer 1 đang kỷ niệm 35 năm thành lập với một số phong cách thử nghiệm. Ra mắt vào “Co ngò” vào tháng Hai, trang điểm tiện ích của giày thể thao này sẽ có màu “Dark Smoke Grey” vào ngày 17 tháng 3.', '<p>Như mong đợi được xây dựng cho sự trở lại dạng “Chlorophyll” ban đầu, Nike Air Trainer 1 đang kỷ niệm 35 năm thành lập với một số phong cách thử nghiệm. Ra mắt vào “Co ngò” vào tháng Hai, trang điểm tiện ích của giày thể thao này sẽ có màu “Dark Smoke Grey” vào ngày 17 tháng 3. Mặc dù hình dạng của hình bóng còn nguyên vẹn, một số sửa đổi xuất hiện trên phần trên. Đối với người mới bắt đầu, dây khóa kéo chạy ngang qua bàn chân trước được tái tạo qua ống kính của thiết bị đường mòn, đổi da lấy kết hợp vải bạt và khóa nhựa. Tất cả các tấm trong suốt Air Trainer 1 tự hào có lưới thoáng khí và kết cấu nylon nhẹ, điều này khen ngợi dây đeo nói trên tốt. Một loạt dải bạc cong quanh ngón chân, ở giữa bàn chân và xung quanh gót chân giới thiệu khả năng phản chiếu chức năng, mới cho thiết kế năm 1987. Nốt ruồi dưới lòng bàn chân lệch khỏi bộ quần áo chủ yếu \"Off-Noir / Dark Smoke Grey\" bao phủ phần lớn phần trên với tông màu vàng đậm có vẻ phù hợp với tuổi của người mẫu.</p>', 1, 'zCUvmdmhXt-16.png', 9999000.00, 8999000.00, 'Canada', 'Cổ cao, gót cao', 'Vải da heo', '10cm', 23, 13, '2022-06-04 16:18:14', '2022-06-08 10:07:46'),
(15, 'Nike Air Force 1 Low SP', 6, 'nike-air-force-1-low-sp', 'Đa dạng là tên của trò chơi dành cho Nike Air Force 1 Low SP. lớp phủ và chi tiết \"5 cú đánh\" trên gót chân và lưỡi cho một vẻ ngoài hung dữ không thể ngăn cản.', '<p>5 LẦN MỘT BIỂU TƯỢNG.</p><p><br></p><p><br></p><p>Đa dạng là tên của trò chơi dành cho Nike Air Force 1 Low SP. lớp phủ và chi tiết \"5 cú đánh\" trên gót chân và lưỡi cho một vẻ ngoài hung dữ không thể ngăn cản.</p><p><br></p><p><br></p><p>Tôn vinh thời đại</p><p><br></p><p>Chúng tôi đã hợp tác với UNDEFEATED để mang đến cho bạn một đôi giày có giá trị của phiên bản gốc và tất cả các phiên bản kể từ đó, kết hợp các chất liệu từ nhiều năm qua — canvas, da và phong cách đường phố ngọt ngào.</p><p><br></p><p><br></p><p>Được thiết kế với 5</p><p><br></p><p>UNDEFEATED ghi dấu ấn trên giày của bạn với biểu tượng \"5 cú đánh\" tự tin ở gót và lưỡi. Hãy nhìn kỹ hơn một chút vào phần lót giày và bạn sẽ nhận thấy sự đối đầu thân thiện giữa các biểu tượng — Dunk so với AF-1. Lớp phủ giả cá sấu đặt một chút nhanh trong bước của bạn.</p><p><br></p><p><br></p><p>Yếu tố cổ điển</p><p><br></p><p>Như mọi khi, cổ áo có đệm, được cắt thấp trông bóng bẩy và tạo cảm giác tuyệt vời. Một bộ phận Air-Sole trong đế giữa bằng bọt đặt đệm dưới chân.</p><p><br></p><p><br></p><p>Thông tin chi tiết sản phẩm</p><p><br></p><p>Đế cao su</p><p>Màu sắc hiển thị: Xanh lam / Vàng ánh kim / Giọt chanh / Trắng</p><p>Phong cách: DM8462-400</p><p>Quốc gia / Khu vực xuất xứ: Việt Nam</p><p><br></p><p>Lực lượng Không quân 1</p><p><br></p><p>Ra mắt vào năm 1982 như một môn bóng rổ bắt buộc phải có, Lực lượng Không quân 1 đã ra đời vào những năm 90. nhịp điệu của nó trong nền văn hóa hip-hop, phát hành các bản collab và phối màu giới hạn, Air Force 1 đã trở thành một đôi giày thể thao mang tính biểu tượng trên toàn cầu.</p>', 1, 'LGkinP3Fay-15.png', 1100000.00, 699999.00, 'Mỹ', 'Cổ lùn', 'Vải da cao cấp', '5cm', 20, 13, '2022-06-04 16:24:28', '2022-06-08 10:24:07'),
(16, 'Gucci Rhyton', 10, 'gucci-rhyton', 'Được thiết kế với đế dày và kết cấu cồng kềnh, đôi giày thể thao này mang âm hưởng hoài cổ với chất liệu da được xử lý để tạo hiệu ứng cổ điển, trầm mặc.', '<p>Các sản phẩm của Gucci được làm bằng chất liệu được lựa chọn cẩn thận. Vui lòng xử lý cẩn thận để tuổi thọ sản phẩm lâu hơn.</p><p><br></p><p>Bảo vệ khỏi ánh sáng trực tiếp, nhiệt và mưa. Nếu nó bị ướt, hãy lau khô ngay lập tức bằng khăn mềm</p><p>Đổ đầy giấy ăn vào giày để giúp giữ dáng và hút ẩm, sau đó cất vào hộp và túi vải nỉ được cung cấp sẵn</p><p>Làm sạch bằng vải mềm và khô hoặc bàn chải</p><p>Các mặt hàng Đặt hàng trước, Sản xuất theo Đơn đặt hàng và Tự làm sẽ được giao vào ngày dự kiến ​​được ghi trên trang mô tả sản phẩm. Những mặt hàng này sẽ được vận chuyển qua Premium Express khi chúng có sẵn.</p><p><br></p><p>Thời hạn trả lại cho các giao dịch mua trực tuyến là 30 ngày kể từ ngày bạn nhận được đơn mua hàng của mình. Bạn có thể trả lại các mặt hàng bằng cách chọn \"Trả lại Mặt hàng này\" từ tài khoản MY GUCCI của bạn dưới chi tiết đơn đặt hàng, thông qua email xác nhận giao hàng của bạn hoặc bằng cách liên hệ với Cố vấn Khách hàng. Khi yêu cầu đã được chấp thuận, nhãn vận chuyển trả trước của bạn sẽ được gửi qua email cho bạn hoặc sẽ có sẵn để tải xuống trong Tài khoản GUCCI CỦA TÔI của bạn.</p><p><br></p><p>Đối với các đơn đặt hàng Thu thập tại cửa hàng, bạn có thể trả lại hoặc đổi món hàng đã mua trong vòng 30 ngày kể từ ngày nhận hàng tại cửa hàng hoặc bằng cách liên hệ với Dịch vụ khách hàng nếu bạn muốn chúng tôi nhận hàng từ địa chỉ bạn chọn.</p>', 1, 'qovuQiGvBM-17.png', 17000000.00, 15000000.00, 'Mỹ', 'Cổ cao, cao gót', 'Da cao cấp', '10cm', 17, 13, '2022-06-04 16:30:49', '2022-06-14 12:05:04'),
(17, 'Gucci Ace Fur', 10, 'gucci-ace-fur', 'Với sự phổ biến của dép lót lông của Gucci, có nghĩa là thương hiệu đã mở rộng tầm nhìn tương tự đối với những đôi giày thể thao Ace được săn lùng của mình. Tuy nhiên, Gucci gần đây đã thông báo rằng họ sẽ không sử dụng lông thú trong bộ sưu tập Xuân 2018, vì vậy đây có thể sẽ là một trong những lần cuối cùng thương hiệu sử dụng lông thú thật.', '<p>Với sự phổ biến của dép lót lông của Gucci, có nghĩa là thương hiệu đã mở rộng tầm nhìn tương tự đối với những đôi giày thể thao Ace được săn lùng của mình. Tuy nhiên, Gucci gần đây đã thông báo rằng họ sẽ không sử dụng lông thú trong bộ sưu tập Xuân 2018, vì vậy đây có thể sẽ là một trong những lần cuối cùng thương hiệu sử dụng lông thú thật.</p><p><br></p><p>Trong một tin tức khác về sneaker, Nike’s Air Max 97 đang trở lại với đế VaporMax.</p><p><br></p><p>- Để được cập nhật thông tin về các bản phát hành mới, hãy nhớ theo dõi Highsnobiety trên Twitter và Instagram, cũng như chatbot giày sneaker của chúng tôi trên Facebook để nhận thông tin cập nhật nhanh chóng về ngày phát hành, phong cách đường phố của giày sneaker, mẹo mua sắm và hơn thế nữa.</p><p><br></p><p>Phần mua sắm được chỉ định của chúng tôi có các sản phẩm mà chúng tôi yêu thích và muốn chia sẻ với bạn. Highsnobiety có quan hệ đối tác tiếp thị liên kết, có nghĩa là chúng tôi có thể nhận được hoa hồng từ việc mua hàng của bạn.</p>', 1, 'tm2kO5eKYx-18.png', 22000000.00, 22000000.00, 'Bỉ', 'Cổ lùn, gót thấp', 'Vải Canva, lông thú', '2cm', 11, 13, '2022-06-04 16:39:58', '2022-06-23 11:59:39'),
(20, 'Yeezy Foam RNNR Vermillion', 1, 'yeezy-foam-rnnr-vermillion', 'Vừa mới ra mắt vào tháng 6 năm 2020, adidas Foam RNNR đã trở thành một sản phẩm kinh điển ngay lập tức khác từ Ye and Brand With the Three Stripes. Lớp bọt EVA nhẹ được bơm vào phía trên, lỗ thông hơi được ánh xạ và lớp trên cùng mềm mại ở lòng bàn chân đã khiến nó trở thành một trong những loại giày dép thoải mái nhất cho đến nay.', '<p>Vừa mới ra mắt vào tháng 6 năm 2020, adidas Foam RNNR đã trở thành một sản phẩm kinh điển ngay lập tức khác từ Ye and Brand With the Three Stripes. Lớp bọt EVA nhẹ được bơm vào phía trên, lỗ thông hơi được ánh xạ và lớp trên cùng mềm mại ở lòng bàn chân đã khiến nó trở thành một trong những loại giày dép thoải mái nhất cho đến nay.</p><p><br></p><p>Vào năm 2022, có vẻ như người đàn ông trước đây được gọi là Kanye West đang chuẩn bị tung ra adidas Yeezy Foam RNNR V2. Những hình ảnh rò rỉ ban đầu này cho thấy phần trên sẽ có kiểu dáng được sửa đổi một chút, với các lỗ thông hơi được ánh xạ quá khổ dẫn đến dễ thở hơn và nhiều bọt hơn. Nó cũng có đế ngoài được sửa đổi theo phong cách chạy cổ điển của adidas. Mặc dù không có gì được xác nhận tại thời điểm này, nhưng chúng tôi tin rằng có thể an toàn khi giả định rằng adidas Yeezy Foam RNNR V2 cũng sẽ có bao bì giống như người tiền nhiệm của nó, dẫn đến việc lãng phí vật liệu bìa cứng ít hơn.</p><p><br></p><p>Adidas Yeezy Foam RNNR V2 được thiết lập để phát hành vào năm 2022. Nó sẽ ra mắt tại adidas cũng như các nhà bán lẻ chọn lọc của Yeezy cả tại cửa hàng và trực tuyến. Chúng sẽ có sẵn với các kích cỡ dành cho nam giới với giá bán lẻ sẽ được công bố. Hãy khóa nó với Twitter và Ứng dụng dành cho thiết bị di động của chúng tôi để luôn cập nhật về bản phát hành này khi nó đến gần hơn.</p>', 1, 'MNpknqxdlX-24.png', 5179000.00, 5179000.00, 'Hoa Kỳ', 'Cổ ngắn, lưới ở thân giày', 'vật liệu bìa cứng', '3cm', 20, 28, '2022-06-29 06:54:14', '2022-06-29 06:54:14'),
(21, 'Jordan 4 Retro', 6, 'jordan-4-retro', 'Jordan Brand sẽ hợp tác với Nike SB trên một chiếc Air Jordan 4 dự kiến phát hành vào tháng 3 năm 2023, một nguồn tin trong ngành giày thể thao cho Complex biết. Tin tức về sự hợp tác lần đầu tiên được Nice Kicks báo cáo vào thứ Hai.', '<p>Jordan Brand sẽ hợp tác với Nike SB trên một chiếc Air Jordan 4 dự kiến ​​phát hành vào tháng 3 năm 2023, một nguồn tin trong ngành giày thể thao cho Complex biết. Tin tức về sự hợp tác lần đầu tiên được Nice Kicks báo cáo vào thứ Hai.</p><p>Không có hình ảnh nào về dự án sắp tới bị rò rỉ, và hình ảnh hiển thị ở đây là của Air Jordan 4 retro “Bred” từ năm 2019.</p><p>Theo Nice Kicks, Nike SB x Air Jordan 4 sẽ có phần gót mang logo Nike SB thay vì logo Nike Air hoặc Jumpman. Một nguồn tin nói với Complex rằng Air Jordan 4 kiểu SB sẽ được trang bị lại để trượt ván.</p><p>Nhiều năm trước khi dự án Nike SB x Air Jordan đầu tiên được phát hành, đã có tin đồn về việc bộ phận trượt ván của Nike kết nối với thương hiệu con của Michael Jordan’s Nike. Sự hợp tác trong nội bộ Nike đã trở thành hiện thực vào năm 2014 thông qua Air Jordan 1 được thiết kế với sự hợp tác của nghệ sĩ ván trượt và phóng viên ảnh Craig Stecyk. Những sự hợp tác tiếp theo giữa Jordan Brand và Nike SB đã bao gồm những đôi giày mang đi như phiên bản Lance Mountain đen và trắng, cũng được phát hành vào năm 2014 và phối màu “NYC to Paris” và “LA to Chicago” từ năm 2019.</p>', 1, 'oESzhEMeLZ-22.png', 23506000.00, 22900000.00, 'Canada', 'Cổ cao, mũi mềm', 'Vải coton chất lượng cao', '5cm', 22, 28, '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(22, 'Yeezy Boost 350 V2', 9, 'yeezy-boost-350-v2', 'Đường phối màu “Beige / Black” của Adidas Yeezy Boost 350 V2 có phần upper Primeknit màu xám nhạt và được bù đắp bằng một sọc đen ở mặt bên có dòng chữ “SPLY-350” ở giữa bàn chân. Việc thực hiện màu sắc đơn giản tiếp tục với dây giày màu xám phù hợp, đế giữa Boost bán trong mờ và đế ngoài bằng cao su màu xám nhạt.', '<p>Adidas Yeezy Boost 350 V2 đã ra mắt lần đầu tiên bán lẻ vào năm 2016 và nhiều năm sau đó, các phiên bản mới của giày tiếp tục được phát hành. Theo tài khoản mạng xã hội rò rỉ giày sneaker @Yeezyinfluence trên Instagram, một phối màu mới màu be và đen của Á quân phong cách sống Kanye West sẽ tung ra các cửa hàng trước khi kết thúc năm. Tài khoản này cũng chia sẻ những hình ảnh về phong cách sắp ra mắt để người hâm mộ có cái nhìn sớm.</p><p><br></p><p>Đường phối màu “Beige / Black” của Adidas Yeezy Boost 350 V2 có phần upper Primeknit màu xám nhạt và được bù đắp bằng một sọc đen ở mặt bên có dòng chữ “SPLY-350” ở giữa bàn chân. Việc thực hiện màu sắc đơn giản tiếp tục với dây giày màu xám phù hợp, đế giữa Boost bán trong mờ và đế ngoài bằng cao su màu xám nhạt.</p>', 1, 'd2LlalomJU-25.png', 11776000.00, 10889998.00, 'Nam Phi', 'Cổ lùn, Đế cao', 'Vải lưới', '7cm', 28, 28, '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(23, 'Mercurial Superfly', 6, 'mercurial-superfly', 'Dựa trên cải tiến Flyknit 360 độ của chiếc 6, Nike Jr. Mercurial Superfly 7 Elite FG bổ sung một vùng Nike Aerotrak cho bàn chân trước để giúp tăng cường lực kéo.', '<h2>Nike Kids Mercurial Superfly 7 Elite FG</h2><p>BDựa trên cải tiến Flyknit 360 độ của chiếc 6, Nike Jr. Mercurial Superfly 7 Elite FG bổ sung một vùng Nike Aerotrak cho bàn chân trước để giúp tăng cường lực kéo.</p><ul><li>Tấm lót bàn chân trước nhẹ có vùng Nike Aerotrak. Các đinh tán góc cạnh giúp tạo ra khả năng tăng tốc bùng nổ theo từng bước chạy.</li><li>Cấu trúc Flyknit 360 độ bao bọc bàn chân của bạn để tạo cảm giác vừa vặn với làn da thứ hai. Hình thức dành riêng cho trẻ em cung cấp sự linh hoạt cần thiết cho đôi chân đang phát triển.</li><li>Lớp phủ NIKESKIN siêu mỏng giúp bạn đến gần quả bóng để thực hiện các động tác ở tốc độ cao. Kết thúc Kiểm soát mọi điều kiện (ACC) có nghĩa là bạn có được cảm ứng đáng tin cậy trong điều kiện khô và ướt.</li><li>Cổ áo vừa vặn năng động</li></ul><h4><strong><em>Nike Kids Mercurial Superfly 7 Elite FG</em>&nbsp;- Available today at WeGotSoccer!</strong></h4><p><span style=\"color: rgb(85, 85, 85);\">​See Also:</span></p><p>Nike Future Lab</p><p>Nike Black x Chile Red Pack</p><p>Nike Football Daybreak Pack</p><ul><li>Brand: Nike</li><li>Country of Origin: Imported</li><li>Style: AT8034</li></ul>', 1, 'u7O4kgNgFk-35.png', 29900000.00, 25900000.00, 'Pháp', 'Cứng cáp', 'Vải nhựa lưới', '7cm', 10, 28, '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(24, 'Disruptor 2 Premium', 5, 'disruptor-2-premium', 'Năm năm trước, FN đã thêm một hạng mục mới vào Giải thưởng Thành tựu lâu đời hàng thập kỷ của mình, giới thiệu danh hiệu Giày của năm đầu tiên, thuộc về giày thể thao Adidas Stan Smith, một mẫu giày cổ điển được yêu thích trở lại.', '<p>Năm năm trước, FN đã thêm một hạng mục mới vào Giải thưởng Thành tựu lâu đời hàng thập kỷ của mình, giới thiệu danh hiệu Giày của năm đầu tiên, thuộc về giày thể thao Adidas Stan Smith, một mẫu giày cổ điển được yêu thích trở lại.</p><p><br></p><p>Trong những năm kể từ đó, giải thưởng đã được trao cho những cú đá đẳng cấp được tạo ra bởi Kanye West, Rihanna và Virgil Abloh, và nó đã truyền cảm hứng cho nhiều cuộc tranh luận và thảo luận giữa ngành công nghiệp giày dép và nhiều người hâm mộ.</p><p><br></p><p>Khi chọn Chiếc giày của năm, nhóm biên tập của FN sẽ lấy từ nhiều nguồn khác nhau để đưa ra lựa chọn cuối cùng của chúng tôi, bao gồm cả doanh số bán lẻ, phản hồi của người tiêu dùng, sức mạnh truyền thông xã hội và tiếng vang tổng thể.</p><p><br></p><p><strong style=\"font-size: 20px;\">1. Đó là \"xu hướng tốt nhất.\"</strong></p><p>Dù yêu hay ghét, năm 2018 là năm của giày thể thao chunky, và Fila Disruptor 2 không chỉ là xu hướng mà còn là một phiên bản nhái của nó. Với đế răng cưa và các chi tiết tinh tế, nó đã cải thiện diện mạo của người cha.</p><p><br></p><p><strong style=\"font-size: 20px;\">2. Nó trải dài trên toàn cầu.</strong></p><p>Disruptor 2 đã xuất hiện trên những người có ảnh hưởng đến phong cách đường phố trên toàn thế giới, từ New York đến Tokyo Fashion Week. Và buổi trình diễn đường băng náo nhiệt của Feels vào tháng trước ở Milan đã thúc đẩy sức nóng xung quanh hãng.</p><p><img src=\"https://footwearnews.com/wp-content/uploads/2018/08/street-style-white-sneakers-04.jpg\" alt=\"Fila Street Style Paris Fashion Week\"></p><p><br></p><p><strong style=\"font-size: 20px;\">3. Nó bắc cầu dòng.</strong></p><p>Giống như Stan Smith, giày sneaker của Fila gây được tiếng vang với cả người tiêu dùng nam và nữ, vượt qua khoảng cách tuổi tác, hấp dẫn cả thanh thiếu niên và cha mẹ của họ.</p><p><br></p><p><strong style=\"font-size: 20px;\">4. Nó ra đời trong các phiên bản tuyệt vời.</strong></p><p>Fila đã phát hành một loạt các phiên bản “cao cấp” của đôi giày thể thao màu trắng bằng da lộn và da đầy màu sắc. Và nó đã hợp tác trên các bản cộng tác nóng bỏng với Alife, Barneys New York, Pierre Cardin và Liam Hodges.</p><p><img src=\"https://footwearnews.com/wp-content/uploads/2018/09/alife-fila-disruptor-angle.jpg\" alt=\"Alife Fila Disruptor 2 Sneaker\"></p>', 1, '7QQhH7LIaG-30.png', 1463600.00, 1193598.00, 'Anh quốc', 'Đế cao,thân giày', 'Da/vải cao cấp', '10cm', 18, 28, '2022-06-29 07:10:21', '2022-07-09 03:59:55'),
(25, 'Balenciaga Track Trainer', 3, 'balenciaga-track-trainer', 'Lần đầu tiên ra mắt trong bộ sưu tập Thu / Đông 2018, Balenciaga Track Trainer là sự kết hợp giữa cảm hứng được lấy từ những đôi giày chạy bộ và đi bộ đường dài cổ điển.', '<p>Lần đầu tiên ra mắt trong bộ sưu tập Thu / Đông 2018, Balenciaga Track Trainer là sự kết hợp giữa cảm hứng được lấy từ những đôi giày chạy bộ và đi bộ đường dài cổ điển. Bản cập nhật này — được giới thiệu vào tháng 7 năm 2019 — mang đến thiết kế nhiều lớp bằng nylon, lưới và da tổng hợp màu xanh nhạt với đường viền kép. Chữ ký ngôi nhà được đóng dấu màu hồng trên lưỡi và \'Đường đi\' đọc trên gót chân. Đế động của nó có bộ đếm tăng cường cho lực đẩy.</p>', 1, 'dPEPJ18ePZ-37.png', 21373440.00, 19373441.00, 'Hoa Kỳ', 'Cứng cáp,đế cao nặng 7kg', 'Vải hỗn hợp', '12cm', 17, 28, '2022-06-29 07:14:36', '2022-06-29 07:14:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_categories`
--

CREATE TABLE `product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `cat_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_categories`
--

INSERT INTO `product_categories` (`id`, `product_id`, `cat_id`, `created_at`, `updated_at`) VALUES
(55, 13, 11, NULL, NULL),
(56, 13, 16, NULL, NULL),
(57, 13, 20, NULL, NULL),
(58, 13, 23, NULL, NULL),
(59, 13, 19, NULL, NULL),
(60, 14, 11, NULL, NULL),
(61, 14, 16, NULL, NULL),
(62, 14, 17, NULL, NULL),
(63, 14, 18, NULL, NULL),
(64, 14, 20, NULL, NULL),
(65, 14, 21, NULL, NULL),
(66, 14, 22, NULL, NULL),
(67, 15, 16, NULL, NULL),
(68, 15, 19, NULL, NULL),
(69, 15, 20, NULL, NULL),
(70, 15, 23, NULL, NULL),
(71, 15, 18, NULL, NULL),
(72, 15, 22, NULL, NULL),
(73, 16, 16, NULL, NULL),
(74, 16, 17, NULL, NULL),
(75, 16, 18, NULL, NULL),
(76, 16, 19, NULL, NULL),
(77, 16, 20, NULL, NULL),
(78, 16, 21, NULL, NULL),
(79, 17, 16, NULL, NULL),
(80, 17, 17, NULL, NULL),
(81, 17, 18, NULL, NULL),
(82, 17, 19, NULL, NULL),
(83, 17, 20, NULL, NULL),
(84, 17, 23, NULL, NULL),
(127, 12, 11, NULL, NULL),
(128, 12, 16, NULL, NULL),
(129, 12, 17, NULL, NULL),
(130, 12, 20, NULL, NULL),
(131, 12, 21, NULL, NULL),
(132, 12, 22, NULL, NULL),
(144, 10, 16, NULL, NULL),
(145, 10, 17, NULL, NULL),
(146, 10, 18, NULL, NULL),
(147, 10, 20, NULL, NULL),
(148, 10, 21, NULL, NULL),
(151, 20, 16, NULL, NULL),
(152, 20, 17, NULL, NULL),
(153, 20, 20, NULL, NULL),
(154, 20, 21, NULL, NULL),
(155, 21, 11, NULL, NULL),
(156, 21, 14, NULL, NULL),
(157, 21, 16, NULL, NULL),
(158, 21, 17, NULL, NULL),
(159, 21, 18, NULL, NULL),
(160, 21, 20, NULL, NULL),
(161, 21, 21, NULL, NULL),
(162, 21, 22, NULL, NULL),
(163, 22, 11, NULL, NULL),
(164, 22, 14, NULL, NULL),
(165, 22, 15, NULL, NULL),
(166, 22, 16, NULL, NULL),
(167, 22, 19, NULL, NULL),
(168, 22, 20, NULL, NULL),
(169, 22, 23, NULL, NULL),
(170, 23, 11, NULL, NULL),
(171, 23, 13, NULL, NULL),
(172, 23, 20, NULL, NULL),
(173, 24, 16, NULL, NULL),
(174, 24, 17, NULL, NULL),
(175, 24, 18, NULL, NULL),
(176, 25, 20, NULL, NULL),
(177, 25, 21, NULL, NULL),
(178, 25, 22, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_colors`
--

CREATE TABLE `product_colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_colors`
--

INSERT INTO `product_colors` (`id`, `product_id`, `image`, `name`, `value`, `created_at`, `updated_at`) VALUES
(26, 13, 'Vn8FmaJgw9-11.png', 'Màu đen', '0F0E0E', '2022-06-04 16:08:33', '2022-06-04 16:08:33'),
(27, 13, 'X238K92UIM-13.png', 'Màu vàng', 'FFD700', '2022-06-04 16:08:33', '2022-06-04 16:08:33'),
(28, 13, 'i5OQ3yQSzY-12.png', 'Màu trắng', 'F9F9F9', '2022-06-04 16:08:33', '2022-06-04 16:08:33'),
(29, 14, 'zCUvmdmhXt-16.png', 'Màu trắng', 'F9F9F9', '2022-06-04 16:18:14', '2022-06-04 16:18:14'),
(30, 14, 'O3ca1Qzutm-14.png', 'Màu nâu', '8E3200', '2022-06-04 16:18:14', '2022-06-04 16:18:14'),
(31, 15, 'LGkinP3Fay-15.png', 'Màu vàng', 'FFD700', '2022-06-04 16:24:28', '2022-06-04 16:24:28'),
(32, 16, 'qovuQiGvBM-17.png', 'Màu trắng', 'F9F9F9', '2022-06-04 16:30:49', '2022-06-04 16:30:49'),
(33, 17, 'tm2kO5eKYx-18.png', 'Màu đen', '0F0E0E', '2022-06-04 16:39:58', '2022-06-04 16:39:58'),
(68, 12, 'cadQZx2Io1-6.png', 'Màu đỏ', 'FF0000', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(69, 12, 'RgMyCem6Ek-5.png', 'Màu trắng', 'F9F9F9', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(70, 12, 'gBfKNH89Gu-7.png', 'Màu đen', '0F0E0E', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(71, 12, 'QQCV5cJ2fS-8.png', 'Màu tím', '590696', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(77, 10, 'G3DJmr4RUs-4.png', 'Màu cam', 'FF5B00', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(78, 10, 'ZlyuTBH9EE-2.png', 'Màu đen', '0F0E0E', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(79, 10, 'aVlSA1d00a-1.png', 'Màu xanh dương', '242F9B', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(80, 10, 'tIHrmqcThy-3.png', 'Màu tím', '590696', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(82, 20, 'MNpknqxdlX-24.png', 'Màu trắng', 'F9F9F9', '2022-06-29 06:54:14', '2022-06-29 06:54:14'),
(83, 21, 'oESzhEMeLZ-22.png', 'Màu đỏ', 'FF0000', '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(84, 21, 'voHl7WkBmz-20.png', 'Màu đen', '0F0E0E', '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(85, 21, 'zJRovOC2Tx-21.png', 'Màu xanh lục', '357C3C', '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(86, 21, 'G5lKQ88NkM-23.png', 'Màu trắng', 'F9F9F9', '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(87, 22, 'd2LlalomJU-25.png', 'Màu vàng', 'FFD700', '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(88, 22, 'TWifzdej9W-26.png', 'Màu trắng', 'F9F9F9', '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(89, 22, 'tkTQa5U0AE-27.png', 'Màu đen', '0F0E0E', '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(90, 23, 'u7O4kgNgFk-35.png', 'Màu xanh dương', '242F9B', '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(91, 23, '4xS0hxL7YS-36.png', 'Màu đen', '0F0E0E', '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(92, 24, '7QQhH7LIaG-30.png', 'Màu trắng', 'F9F9F9', '2022-06-29 07:10:21', '2022-06-29 07:10:21'),
(93, 25, 'dPEPJ18ePZ-37.png', 'Màu xanh dương', '242F9B', '2022-06-29 07:14:36', '2022-06-29 07:14:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_sizes`
--

CREATE TABLE `product_sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_sizes`
--

INSERT INTO `product_sizes` (`id`, `product_id`, `size`, `created_at`, `updated_at`) VALUES
(44, 13, '36', '2022-06-04 16:08:33', '2022-06-04 16:08:33'),
(45, 13, '39', '2022-06-04 16:08:33', '2022-06-04 16:08:33'),
(46, 13, '41', '2022-06-04 16:08:33', '2022-06-04 16:08:33'),
(47, 13, '42', '2022-06-04 16:08:33', '2022-06-04 16:08:33'),
(48, 13, '40', '2022-06-04 16:08:33', '2022-06-04 16:08:33'),
(49, 14, '36', '2022-06-04 16:18:14', '2022-06-04 16:18:14'),
(50, 14, '38', '2022-06-04 16:18:14', '2022-06-04 16:18:14'),
(51, 14, '40', '2022-06-04 16:18:14', '2022-06-04 16:18:14'),
(52, 14, '42', '2022-06-04 16:18:14', '2022-06-04 16:18:14'),
(53, 15, '37', '2022-06-04 16:24:28', '2022-06-04 16:24:28'),
(54, 15, '39', '2022-06-04 16:24:28', '2022-06-04 16:24:28'),
(55, 15, '38', '2022-06-04 16:24:28', '2022-06-04 16:24:28'),
(56, 15, '41', '2022-06-04 16:24:28', '2022-06-04 16:24:28'),
(57, 15, '43', '2022-06-04 16:24:28', '2022-06-04 16:24:28'),
(58, 15, '44', '2022-06-04 16:24:28', '2022-06-04 16:24:28'),
(59, 15, '42', '2022-06-04 16:24:28', '2022-06-04 16:24:28'),
(60, 16, '36', '2022-06-04 16:30:49', '2022-06-04 16:30:49'),
(61, 16, '37', '2022-06-04 16:30:49', '2022-06-04 16:30:49'),
(62, 16, '38', '2022-06-04 16:30:49', '2022-06-04 16:30:49'),
(63, 16, '39', '2022-06-04 16:30:49', '2022-06-04 16:30:49'),
(64, 17, '36', '2022-06-04 16:39:58', '2022-06-04 16:39:58'),
(65, 17, '39', '2022-06-04 16:39:58', '2022-06-04 16:39:58'),
(66, 17, '41', '2022-06-04 16:39:58', '2022-06-04 16:39:58'),
(67, 17, '42', '2022-06-04 16:39:58', '2022-06-04 16:39:58'),
(68, 17, '44', '2022-06-04 16:39:58', '2022-06-04 16:39:58'),
(110, 12, '37', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(111, 12, '39', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(112, 12, '41', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(113, 12, '42', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(114, 12, '44', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(115, 12, '43', '2022-06-04 18:00:55', '2022-06-04 18:00:55'),
(123, 10, '37', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(124, 10, '39', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(125, 10, '41', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(126, 10, '42', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(127, 10, '43', '2022-06-08 11:58:31', '2022-06-08 11:58:31'),
(129, 20, '37', '2022-06-29 06:54:14', '2022-06-29 06:54:14'),
(130, 20, '39', '2022-06-29 06:54:14', '2022-06-29 06:54:14'),
(131, 20, '40', '2022-06-29 06:54:14', '2022-06-29 06:54:14'),
(132, 20, '41', '2022-06-29 06:54:14', '2022-06-29 06:54:14'),
(133, 21, '37', '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(134, 21, '40', '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(135, 21, '41', '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(136, 21, '44', '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(137, 22, '37', '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(138, 22, '40', '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(139, 22, '41', '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(140, 22, '43', '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(141, 23, '40', '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(142, 23, '41', '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(143, 23, '42', '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(144, 23, '43', '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(145, 23, '44', '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(146, 24, '36', '2022-06-29 07:10:21', '2022-06-29 07:10:21'),
(147, 24, '37', '2022-06-29 07:10:21', '2022-06-29 07:10:21'),
(148, 24, '38', '2022-06-29 07:10:21', '2022-06-29 07:10:21'),
(149, 24, '39', '2022-06-29 07:10:21', '2022-06-29 07:10:21'),
(150, 25, '40', '2022-06-29 07:14:36', '2022-06-29 07:14:36'),
(151, 25, '41', '2022-06-29 07:14:36', '2022-06-29 07:14:36'),
(152, 25, '42', '2022-06-29 07:14:36', '2022-06-29 07:14:36'),
(153, 25, '43', '2022-06-29 07:14:36', '2022-06-29 07:14:36'),
(154, 25, '44', '2022-06-29 07:14:36', '2022-06-29 07:14:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_stars`
--

CREATE TABLE `product_stars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED DEFAULT NULL,
  `stars` tinyint(4) NOT NULL DEFAULT '5',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_stars`
--

INSERT INTO `product_stars` (`id`, `product_id`, `stars`, `created_at`, `updated_at`) VALUES
(1, 10, 5, '2022-06-04 15:48:04', '2022-06-04 15:48:04'),
(3, 12, 4, '2022-06-04 15:56:58', '2022-06-06 09:17:59'),
(4, 13, 2, '2022-06-04 16:08:33', '2022-06-12 19:54:29'),
(5, 14, 3, '2022-06-04 16:18:14', '2022-06-08 16:01:03'),
(6, 15, 1, '2022-06-04 16:24:28', '2022-06-10 05:47:50'),
(7, 16, 2, '2022-06-04 16:30:49', '2022-06-10 05:48:48'),
(8, 17, 5, '2022-06-04 16:39:58', '2022-06-04 16:39:58'),
(11, 20, 5, '2022-06-29 06:54:14', '2022-06-29 06:54:14'),
(12, 21, 5, '2022-06-29 07:00:09', '2022-06-29 07:00:09'),
(13, 22, 5, '2022-06-29 07:03:51', '2022-06-29 07:03:51'),
(14, 23, 5, '2022-06-29 07:07:14', '2022-06-29 07:07:14'),
(15, 24, 5, '2022-06-29 07:10:21', '2022-06-29 07:10:21'),
(16, 25, 5, '2022-06-29 07:14:36', '2022-06-29 07:14:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `purchased_products`
--

CREATE TABLE `purchased_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `purchased_products`
--

INSERT INTO `purchased_products` (`id`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 10, '2022-06-08 07:38:49', '2022-06-08 07:38:49'),
(2, 13, '2022-06-08 07:38:49', '2022-06-08 07:38:49'),
(4, 10, '2022-06-08 07:51:21', '2022-06-08 07:51:21'),
(5, 13, '2022-06-08 07:51:21', '2022-06-08 07:51:21'),
(7, 10, '2022-06-08 07:51:27', '2022-06-08 07:51:27'),
(8, 13, '2022-06-08 07:51:27', '2022-06-08 07:51:27'),
(10, 10, '2022-06-08 07:55:05', '2022-06-08 07:55:05'),
(11, 13, '2022-06-08 07:55:05', '2022-06-08 07:55:05'),
(13, 10, '2022-06-08 08:00:44', '2022-06-08 08:00:44'),
(14, 13, '2022-06-08 08:00:44', '2022-06-08 08:00:44'),
(16, 10, '2022-06-08 08:23:52', '2022-06-08 08:23:52'),
(17, 10, '2022-06-08 08:38:56', '2022-06-08 08:38:56'),
(18, 10, '2022-06-08 08:41:24', '2022-06-08 08:41:24'),
(19, 10, '2022-06-08 08:59:11', '2022-06-08 08:59:11'),
(20, 10, '2022-06-08 08:59:37', '2022-06-08 08:59:37'),
(21, 10, '2022-06-08 09:00:16', '2022-06-08 09:00:16'),
(22, 17, '2022-06-08 09:24:06', '2022-06-08 09:24:06'),
(23, 16, '2022-06-08 09:24:06', '2022-06-08 09:24:06'),
(24, 17, '2022-06-08 09:24:06', '2022-06-08 09:24:06'),
(25, 12, '2022-06-08 09:27:23', '2022-06-08 09:27:23'),
(27, 16, '2022-06-08 09:38:58', '2022-06-08 09:38:58'),
(28, 13, '2022-06-08 09:38:58', '2022-06-08 09:38:58'),
(30, 17, '2022-06-08 09:42:25', '2022-06-08 09:42:25'),
(31, 14, '2022-06-08 10:07:46', '2022-06-08 10:07:46'),
(32, 14, '2022-06-08 10:07:46', '2022-06-08 10:07:46'),
(33, 13, '2022-06-08 10:07:46', '2022-06-08 10:07:46'),
(34, 13, '2022-06-08 10:17:38', '2022-06-08 10:17:38'),
(35, 12, '2022-06-08 10:17:38', '2022-06-08 10:17:38'),
(36, 17, '2022-06-08 10:17:38', '2022-06-08 10:17:38'),
(37, 13, '2022-06-08 10:17:38', '2022-06-08 10:17:38'),
(38, 15, '2022-06-08 10:17:38', '2022-06-08 10:17:38'),
(39, 17, '2022-06-08 10:22:32', '2022-06-08 10:22:32'),
(40, 15, '2022-06-08 10:22:32', '2022-06-08 10:22:32'),
(41, 13, '2022-06-08 10:22:32', '2022-06-08 10:22:32'),
(43, 13, '2022-06-08 10:24:07', '2022-06-08 10:24:07'),
(44, 17, '2022-06-08 10:24:07', '2022-06-08 10:24:07'),
(45, 15, '2022-06-08 10:24:07', '2022-06-08 10:24:07'),
(46, 10, '2022-06-08 16:06:08', '2022-06-08 16:06:08'),
(47, 12, '2022-06-08 20:29:29', '2022-06-08 20:29:29'),
(48, 17, '2022-06-10 06:01:10', '2022-06-10 06:01:10'),
(50, 17, '2022-06-10 06:02:19', '2022-06-10 06:02:19'),
(52, 16, '2022-06-12 19:45:43', '2022-06-12 19:45:43'),
(55, 16, '2022-06-13 12:24:43', '2022-06-13 12:24:43'),
(56, 13, '2022-06-13 12:27:23', '2022-06-13 12:27:23'),
(57, 13, '2022-06-13 12:29:57', '2022-06-13 12:29:57'),
(58, 12, '2022-06-14 12:05:04', '2022-06-14 12:05:04'),
(59, 16, '2022-06-14 12:05:04', '2022-06-14 12:05:04'),
(60, 12, '2022-06-15 08:40:43', '2022-06-15 08:40:43'),
(61, 17, '2022-06-23 11:29:32', '2022-06-23 11:29:32'),
(62, 10, '2022-06-23 11:29:32', '2022-06-23 11:29:32'),
(63, 17, '2022-06-23 11:37:19', '2022-06-23 11:37:19'),
(64, 10, '2022-06-23 11:57:43', '2022-06-23 11:57:43'),
(65, 17, '2022-06-23 11:59:39', '2022-06-23 11:59:39'),
(66, 10, '2022-06-29 04:11:14', '2022-06-29 04:11:14'),
(67, 10, '2022-06-29 08:06:49', '2022-06-29 08:06:49'),
(68, 24, '2022-07-09 03:56:10', '2022-07-09 03:56:10'),
(69, 24, '2022-07-09 03:59:55', '2022-07-09 03:59:55');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `stars` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `reviews`
--

INSERT INTO `reviews` (`id`, `product_id`, `fullname`, `email`, `message`, `parent_id`, `stars`, `type`, `created_at`, `updated_at`, `status`) VALUES
(15, 13, 'Neymar', 'nm10@gmail.com', 'Giày cổ điển đẹp', NULL, 3, 'user', '2022-06-06 08:32:32', '2022-06-06 08:32:32', 1),
(16, 13, 'lac buoc', 'aa@gmail.com', 'Giao hàng đúng h', NULL, 5, 'user', '2022-06-06 08:33:48', '2022-06-06 08:33:48', 1),
(18, 13, 'NTTSHOP', 'nttshop@gmail.com', 'Xấu mà', 15, NULL, 'admin', '2022-06-06 13:07:00', '2022-06-06 13:07:00', 1),
(21, 14, 'Người lạ từng quen', 'acxs@gmail.com', 'Sản phẩm này còn ko sốp', NULL, 3, 'user', '2022-06-08 16:01:03', '2022-06-08 16:01:03', 1),
(22, 15, 'Ngọc Bích', 'pnnb271102@gmail.com', 'Phèn quá', NULL, 1, 'user', '2022-06-10 05:47:50', '2022-06-09 23:07:01', 1),
(23, 16, 'Ngọc Bích', 'phuonghoanglua@gmail.com', 'nhìn cũng đc có lúc ko đc', NULL, 2, 'user', '2022-06-10 05:48:48', '2022-06-09 23:07:04', 1),
(25, 16, 'NTTSHOP', 'nttshop@gmail.com', 'gì m', 23, NULL, 'admin', '2022-06-10 06:06:54', '2022-06-10 06:06:54', 1),
(26, 13, 'Anh la cua em', 'phuonghoanglua@gmail.com', 'Chê nha', NULL, 1, 'user', '2022-06-12 19:54:29', '2022-06-12 19:54:29', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slides`
--

CREATE TABLE `slides` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `slides`
--

INSERT INTO `slides` (`id`, `product_id`, `image`, `status`, `updated_by`, `created_at`, `updated_at`) VALUES
(2, 12, '6IZIfm26s1-Untitled-1.png', 1, 13, '2022-06-06 06:28:25', '2022-06-05 23:42:34'),
(3, 17, 'D8EGOKJubr-2.png', 1, 13, '2022-06-06 06:36:58', '2022-06-06 06:36:58'),
(4, 16, '23oPFL498e-4.png', 1, 13, '2022-06-06 06:42:10', '2022-06-06 06:42:10'),
(5, 13, 'o7mOQ8bvt4-3.png', 1, 13, '2022-06-06 06:42:24', '2022-06-06 06:42:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `topics`
--

CREATE TABLE `topics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `topics`
--

INSERT INTO `topics` (`id`, `name`, `slug`, `status`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Tin khuyến mãi', 'tin-khuyen-mai', 1, 13, '2022-06-04 19:39:09', '2022-06-04 12:49:48'),
(2, 'Tin tuyển dụng', 'tin-tuyen-dung', 1, 13, '2022-06-04 19:39:30', '2022-06-04 19:39:30'),
(3, 'Tin sự kiện', 'tin-su-kien', 1, 13, '2022-06-04 19:40:02', '2022-06-04 19:47:40');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` tinyint(4) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'no-avatar.jpg',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'df'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `role`, `status`, `avatar`, `phone`, `date`, `address`, `created_at`, `updated_at`, `type`) VALUES
(13, 'Nguyen Van Cu', 'vancu@gmail.com', '$2y$10$teqKtddPeLSRVXvfmGhrBO58dDB/wtWVSpdgoKcuB9eVnxI3aNqu2', 0, 1, 'SOxzFGxk9M-R.jpg', '01234567899', '2022-05-20', 'aasdasd', '2022-05-27 10:29:33', '2022-06-28 22:13:31', 'df'),
(14, 'Phạm Bích', 'phambich@gmail.com', '$2y$10$tpMoxmssSWTPJ2ttvvyKbuWEuq.lFrtTNUOLy4ttCNjMxv5AnEY2y', 0, 1, 'no-avatar.jpg', NULL, NULL, NULL, '2022-06-07 02:59:52', '2022-06-07 02:59:52', 'df'),
(15, 'Lionel Messi', 'messi@gmail.com', '$2y$10$ysw2JHvRtiVmxNbiLjYMZeO0Wr8Ifd3/z6EIObraFZ7EqPJrO/rm.', 0, 1, 'no-avatar.jpg', NULL, NULL, NULL, '2022-06-07 03:01:04', '2022-06-07 03:01:04', 'df'),
(24, 'Phạm Nguyễn Ngọc Bích', 'vanc@gmail.com', '$2y$10$bop7J6nefWQ4Ths569vsGOQjS1oX4rUUoRjlVlH0n9x5XmcCG/SGO', 2, 1, '20lCkWCSDM-fe257562eea701f958b6.jpg', '0123456789', '1995-06-21', 'New york', '2022-06-08 19:59:19', '2022-06-08 19:59:19', 'df'),
(27, 'Truong NgTuan', 'karup2k@gmail.com', '$2y$10$YflS.BpENbG.8MhzxFdLAufkrif4uF3TXgFey7yHezyQgfh9FB1zG', 0, 1, 'no-avatar.jpg', NULL, NULL, NULL, '2022-06-12 12:23:37', '2022-07-08 21:14:49', 'df'),
(28, 'SHOP NTT', 'nttshop062022@gmail.com', '$2y$10$I0/ZgtQR/QxHVmxXn27yM.45do/O8gOg7xLyUzdFfB8H6qY5Zp3/G', 1, 1, 'W3lHG73qsF-favico-removebg-preview.png', '0383608951', '2000-06-30', 'Phan Rang Thap Cham Ninh Thuận', '2022-06-12 12:43:36', '2022-06-28 22:13:10', 'df'),
(29, 'Nguyễn Văn Mảnh', 'ntt.shop.3006@gmail.com', '$2y$10$BwwfIZNBU4LQCFBHCtBEoOpd0DmSbFsEYcBsGGRoc22PgQQ7gg/IK', 0, 1, 'no-avatar.jpg', '0123456789', NULL, NULL, '2022-06-12 12:43:52', '2022-06-12 12:49:31', 'gg'),
(30, 'Uchiha Sasuke', 'sasuke@gmail.com', '$2y$10$HfJUsBxjbIbpWx13yklnE.zrmY.keEVrCIiyQs2G.7mqpXvLhGHyC', 0, 1, 'bA3pSBoZyU-c74339ed5aaf28ebe4ec19567ee003e0.jpg', NULL, NULL, NULL, '2022-06-13 12:20:36', '2022-06-13 05:31:16', 'df'),
(31, 'Uzumaki Naruto', 'naruto@gmail.com', '$2y$10$kqLdASEL6X1H/vYa.IWLL.8vrpfp2r.9vPwzbZ9sFp/JZ/tLPhowa', 0, 1, 'no-avatar.jpg', NULL, NULL, NULL, '2022-06-13 12:21:14', '2022-06-13 12:21:14', 'df'),
(32, 'Uchiha Madara', 'madara@gmail.com', '$2y$10$pSVw6NvF9NUU0EXB/LUn0OOMCj8Au9l6.r3AfJkLEnR4fSFWuth3K', 0, 1, 'no-avatar.jpg', NULL, NULL, NULL, '2022-06-13 12:21:59', '2022-06-13 12:21:59', 'df'),
(33, 'Tuan Truong Nguyen', 'ngtuantruong30062k@gmail.com', '$2y$10$72s9YmlPIhWXvvZjOqqhCudtoRKXyXp2P31IEGeZGxfDianyV2XP2', 0, 1, 'no-avatar.jpg', NULL, NULL, NULL, '2022-06-14 21:21:23', '2022-06-23 05:02:13', 'df'),
(34, 'Ngọc Bích 0002', 'pnnb271102@gmail.com', '$2y$10$AnzQCvJdpBNJ1S7CK13QguYobuGA.MRlID/EIjnOrZK5MSksS99G6', 0, 1, 'no-avatar.jpg', NULL, NULL, NULL, '2022-06-29 01:11:33', '2022-06-29 01:11:33', 'gg'),
(35, 'Văn Hà Lâm', 'vanhalam202@gmail.com', '$2y$10$sszFdIHZeyF4SdhjNsb9IOHMQxQnuBvy8dir4Ebn8Dc9WMFzxNe6K', 0, 1, 'no-avatar.jpg', NULL, NULL, NULL, '2022-07-08 20:48:07', '2022-07-08 20:48:07', 'gg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vouchers`
--

CREATE TABLE `vouchers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` tinyint(4) NOT NULL,
  `cash_milestones` double(12,2) NOT NULL,
  `price` double(12,2) NOT NULL,
  `date_milestones` date NOT NULL,
  `status` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `vouchers`
--

INSERT INTO `vouchers` (`id`, `name`, `quantity`, `cash_milestones`, `price`, `date_milestones`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Giảm 300k cho đơn hàng từ trên 1 triệu', 5, 5000000.00, 300000.00, '2022-07-21', 1, '2022-06-07 08:52:04', '2022-06-07 08:52:04'),
(2, 'Giảm 200k cho đơn hàng trên 1 triệu đồng', 10, 1000000.00, 200000.00, '2022-06-26', 1, '2022-06-07 08:55:01', '2022-06-07 08:55:01'),
(3, 'Giảm giá 100k cho bất kỳ đơn hàng nào', 100, 0.00, 100000.00, '2022-06-12', 1, '2022-06-07 09:09:47', '2022-06-07 09:09:47'),
(4, 'Quà tháng 6 nhân ngày sinh nhật giàm 2 triệu cho đơn hàng trên 5 triệu', 10, 5000000.00, 2000000.00, '2022-07-22', 1, '2022-06-12 15:13:00', '2022-06-12 15:13:00'),
(5, 'Ưu đãi 102 tháng 7', 20, 7000000.00, 3000000.00, '2022-07-17', 1, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(6, 'Ưu đãi tháng 6 tháng thiếu nhi', 100, 1000000.00, 5000000.00, '2022-06-02', 1, '2022-06-29 05:16:26', '2022-06-29 05:16:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `voucher_users`
--

CREATE TABLE `voucher_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `voucher_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `voucher_users`
--

INSERT INTO `voucher_users` (`id`, `voucher_id`, `user_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 14, 3, '2022-06-07 08:52:04', '2022-06-23 11:57:43'),
(2, 1, 15, 5, '2022-06-07 08:52:04', '2022-06-07 08:52:04'),
(6, 2, 14, 10, '2022-06-07 08:55:01', '2022-06-07 08:55:01'),
(7, 2, 15, 10, '2022-06-07 08:55:01', '2022-06-07 08:55:01'),
(11, 3, 14, 100, '2022-06-07 09:09:47', '2022-06-07 09:09:47'),
(12, 3, 15, 100, '2022-06-07 09:09:47', '2022-06-07 09:09:47'),
(16, 4, 14, 10, '2022-06-12 15:13:00', '2022-06-12 15:13:00'),
(17, 4, 15, 10, '2022-06-12 15:13:00', '2022-06-12 15:13:00'),
(18, 5, 13, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(19, 5, 14, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(20, 5, 15, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(21, 5, 27, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(22, 5, 29, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(23, 5, 30, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(24, 5, 31, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(25, 5, 32, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(26, 5, 33, 20, '2022-06-29 05:15:25', '2022-06-29 05:15:25'),
(27, 6, 13, 100, '2022-06-29 05:16:26', '2022-06-29 05:16:26'),
(28, 6, 14, 100, '2022-06-29 05:16:26', '2022-06-29 05:16:26'),
(29, 6, 15, 100, '2022-06-29 05:16:26', '2022-06-29 05:16:26'),
(30, 6, 27, 100, '2022-06-29 05:16:27', '2022-06-29 05:16:27'),
(31, 6, 29, 100, '2022-06-29 05:16:27', '2022-06-29 05:16:27'),
(32, 6, 30, 100, '2022-06-29 05:16:27', '2022-06-29 05:16:27'),
(33, 6, 31, 100, '2022-06-29 05:16:27', '2022-06-29 05:16:27'),
(34, 6, 32, 100, '2022-06-29 05:16:27', '2022-06-29 05:16:27'),
(35, 6, 33, 100, '2022-06-29 05:16:27', '2022-06-29 05:16:27');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`),
  ADD KEY `categories_parent_id_foreign` (`parent_id`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_post_id_foreign` (`post_id`),
  ADD KEY `comments_parent_id_foreign` (`parent_id`);

--
-- Chỉ mục cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `forgot_passwords`
--
ALTER TABLE `forgot_passwords`
  ADD PRIMARY KEY (`id`),
  ADD KEY `forgot_passwords_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_details_order_id_foreign` (`order_id`),
  ADD KEY `order_details_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `order_status_histories`
--
ALTER TABLE `order_status_histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_status_histories_order_id_foreign` (`order_id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_top_id_foreign` (`top_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_slug_unique` (`slug`),
  ADD KEY `products_brand_id_foreign` (`brand_id`);

--
-- Chỉ mục cho bảng `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_categories_product_id_foreign` (`product_id`),
  ADD KEY `product_categories_cat_id_foreign` (`cat_id`);

--
-- Chỉ mục cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_colors_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_sizes_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `product_stars`
--
ALTER TABLE `product_stars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_stars_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `purchased_products`
--
ALTER TABLE `purchased_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchased_products_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_product_id_foreign` (`product_id`),
  ADD KEY `reviews_parent_id_foreign` (`parent_id`);

--
-- Chỉ mục cho bảng `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`),
  ADD KEY `slides_product_id_foreign` (`product_id`);

--
-- Chỉ mục cho bảng `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Chỉ mục cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `voucher_users`
--
ALTER TABLE `voucher_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `voucher_users_voucher_id_foreign` (`voucher_id`),
  ADD KEY `voucher_users_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `forgot_passwords`
--
ALTER TABLE `forgot_passwords`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `order_status_histories`
--
ALTER TABLE `order_status_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT cho bảng `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- AUTO_INCREMENT cho bảng `product_stars`
--
ALTER TABLE `product_stars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `purchased_products`
--
ALTER TABLE `purchased_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `slides`
--
ALTER TABLE `slides`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `topics`
--
ALTER TABLE `topics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `voucher_users`
--
ALTER TABLE `voucher_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `forgot_passwords`
--
ALTER TABLE `forgot_passwords`
  ADD CONSTRAINT `forgot_passwords_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `order_status_histories`
--
ALTER TABLE `order_status_histories`
  ADD CONSTRAINT `order_status_histories_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_top_id_foreign` FOREIGN KEY (`top_id`) REFERENCES `topics` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `product_categories`
--
ALTER TABLE `product_categories`
  ADD CONSTRAINT `product_categories_cat_id_foreign` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_categories_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  ADD CONSTRAINT `product_colors_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD CONSTRAINT `product_sizes_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `product_stars`
--
ALTER TABLE `product_stars`
  ADD CONSTRAINT `product_stars_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `purchased_products`
--
ALTER TABLE `purchased_products`
  ADD CONSTRAINT `purchased_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `slides`
--
ALTER TABLE `slides`
  ADD CONSTRAINT `slides_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `voucher_users`
--
ALTER TABLE `voucher_users`
  ADD CONSTRAINT `voucher_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `voucher_users_voucher_id_foreign` FOREIGN KEY (`voucher_id`) REFERENCES `vouchers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
