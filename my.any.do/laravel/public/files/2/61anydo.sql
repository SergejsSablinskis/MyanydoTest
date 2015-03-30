-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Дек 15 2014 г., 16:55
-- Версия сервера: 5.6.17
-- Версия PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `anydo`
--

-- --------------------------------------------------------

--
-- Структура таблицы `folders`
--

CREATE TABLE IF NOT EXISTS `folders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Дамп данных таблицы `folders`
--

INSERT INTO `folders` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'PERSONAL', '0000-00-00', '0000-00-00'),
(2, 'SHOPPING', '0000-00-00', '0000-00-00'),
(8, 'WORK', '2014-12-10', '2014-12-10'),
(9, 'new', '2014-12-11', '2014-12-11'),
(10, 'new folder', '2014-12-15', '2014-12-15');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_12_03_141219_create_plans_table', 1),
('2014_12_03_143231_create_folderplans_table', 2),
('2014_12_03_144759_create_note_table', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `notes`
--

CREATE TABLE IF NOT EXISTS `notes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `time_id` int(11) NOT NULL,
  `folder_id` int(11) NOT NULL,
  `note` text COLLATE utf8_unicode_ci NOT NULL,
  `day` date NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `notes`
--

INSERT INTO `notes` (`id`, `time_id`, `folder_id`, `note`, `day`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'my first note', '0000-00-00', '0000-00-00', 0),
(2, 3, 1, 'My second note..', '0000-00-00', '0000-00-00', 0),
(4, 1, 8, 'not working', '0000-00-00', '2014-12-15', 2014);

-- --------------------------------------------------------

--
-- Структура таблицы `times`
--

CREATE TABLE IF NOT EXISTS `times` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `times`
--

INSERT INTO `times` (`id`, `date`) VALUES
(1, 'TODAY'),
(2, 'TOMORROW'),
(3, 'UPCOMING'),
(4, 'SOMEDAY');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
