-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2021 a las 00:19:13
-- Versión del servidor: 5.7.17
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE `trabajos` (
  `salario` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `titulo` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `empresa` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `contactos` varchar(10000) COLLATE latin1_spanish_ci NOT NULL,
  `horario` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `departamento` varchar(60) COLLATE latin1_spanish_ci NOT NULL,
  `ciudad` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` varchar(10000) COLLATE latin1_spanish_ci NOT NULL,
  `requerimientos` varchar(10000) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`salario`, `titulo`, `empresa`, `contactos`, `horario`, `departamento`, `ciudad`, `descripcion`, `requerimientos`) VALUES
('98989', '', '', '', '', '', '', '', ''),
('0i090', '', '', '', '', '', '', '', ''),
('miloo', '', '', '', '', '', '', '', ''),
('300000000', 'Traqueto', 'Colnarcos', '', '24-7', 'Colombia', '', 'Marcando calavera', ''),
('', '', '', '', '', '', '', '', ''),
('1505050', 'ew', 'ew', '', 'ew', 'ew', '', 'ew', ''),
('145', 'ewe', 'uwu', '', 'owo', 'iwi', '', 'ono', ''),
('', '', '', '', '', '', '', '', ''),
('100000', 'Programador', 'LilasEntertainment', '', '10/12 Pm', 'Envigado', '', 'Lila dios nuestro Sofi te amo', ''),
('12', 'e', 's', '', 'e', 's', '', 'e', ''),
('Emanuel', '5000', 'Enbvigado', '', 'w', 'wq', '', 'qw', ''),
('eMANUEL', 'cefit', '50000', '', 'envigado', 'sdsds', '', 'sdsd', ''),
('1 SMLV', 'Programador de sitios webs', 'Emanuel.SAS', '', '7:00 AM/ 2:00 PM', 'Envigado', '', 'Se solicita un programador de software con especialidad y conocimiento en CSS, BOOTSTRAP, JS, SERVIDORES', ''),
('100 pesos', 'no sÃ©', 'emanuel sa', '12345', '', 'Antioquia', 'envigado', 'no sÃ© que poner', 'ojalÃ¡ sirva'),
('1 SMLV', 'Guarda', 'Seracis', '3206977496', '', 'Antioquia', 'Poblado', 'Guarda en el poblado, zona tranquila, acceso a internet, baÃ±o, revisar quien entra y quien sale', 'Bachillerato, cursos de seguridad'),
('mil pesos', 'bus', 'bus.sa', 'emanuel', '', 'Antioquia', 'Envigado', 'busetero', 'montar bus'),
('100.000', 'eed', 'wewedw', 'edweedw', '', 'ewdw', 'dewedd', 'wedwe', 'dewdew');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `username` varchar(80) COLLATE latin1_spanish_ci NOT NULL,
  `password` varchar(80) COLLATE latin1_spanish_ci NOT NULL,
  `email` varchar(80) COLLATE latin1_spanish_ci NOT NULL,
  `to_date` varchar(80) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `to_date`) VALUES
('camilo', '$2y$10$DZYtWc9L63phMxPUM5XMOett0cBz511CvmE45MCr6mNJv8HsgvJeq', 'camilo@gmail.com', '2021-06-12'),
('Don Quijote', '$2y$10$RwkepiDsh9AbTHM.WxgtOO1/81iGX1VSt3T89kMej4TL4PjDLIZNm', 'quijote@gmail.com', '2021-06-12'),
('oscar caÃ±as', '$2y$10$QbHd/gZp3q4ERd7ljIA1eewsvPrKboAdeOVH6H2/2d76rq7GxN7xi', 'oc@gmail.com', '2021-06-12'),
('Pedro el escamoso', '$2y$10$TplqQrEYpqaAJLmSvUdRlum6RfcVvGomYeDD0e22Rbem0GbTTBHAm', 'pedroescamoso@gmail.com', '2021-06-12'),
('Pedro Picapiedra', '$2y$10$fpWgM5qiDZPUMhWwK7z75.3yQ4vl/FzC1GpXL9CcF7KHk1dboPSoi', 'pedropicapiedra@gmail.com', '2021-06-12'),
('Vilma', '123456', 'vilma@123.com', '2021-06-12'),
('Tamariz', '$2y$10$R4A/IS1KO7Ni/fYaVL86J.PaqgODMJR00FS0UsZrXGE9scB2L8m4m', 'tam@gmail.com', '2021-06-12'),
('Juan Pablo', '$2y$10$OrPpWsg7kQGYwVuVWfK1Ju85VJL0XE2WATWqgJAMdmnYwsJFLe1PO', 'jp@gmail.com', '2021-06-12'),
('Nancy', '$2y$10$GM/LZ6/Gnk9.jvAcg4maIuiokEQw5/Q4ZAaeZraOnfY9H243Jrh22', 'nancy@gmail.com', '2021-06-12'),
('Jesus', '$2y$10$5jING42.NKCg8mN3SkeFMugwpkCNzzLAxzu05oRGKVr4cFq3gwCVe', 'j@gmail.com', '2021-06-12 13:32:44'),
('Luis', '$2y$10$/v5pztZ2abcJNOUkybqubuMuJRDAIfvIsO3BHfemiSEr/45oFXy9q', 'lucho@e.com', '2021-06-15 15:19:27'),
('Julian', '$2y$10$5YIOtYTphagSvmrohYg32ebI5Sbp8.s7Lbd9TxC2DP9FuHhenncKq', 'j@gmail.com', '2021-06-19 06:54:19'),
('Darcy', '$2y$10$Z9lcykHr.gW7us0I1hd3Wu6ZAxiUwjo.6mJw/uIcaGSOsYALK2K8u', 'darcy@gmail.com', '2021-06-19 07:12:43'),
('sebastian', '$2y$10$/Cw6XsY.IVtuxfGJ9PK/R.84HFSFPr5tbkEnO8ShhX9mw5gGgOz0e', 'sebas@gmail.com', '2021-06-19 07:44:43'),
('oscar ivan', '$2y$10$T/iMYdho5BqIOuIxHHcQw.PAnwqQyZiu3uqQwZUjtuKaUjDBjmdEy', 'os@hotmail.com', '2021-06-19 07:51:27'),
('Pablo Marmol', '$2y$10$qKdM7vjIFjy7rhMeqXp.PO/fwheCkDO/R/8DxHsgSzZnzSAqj2dF6', 'pablo@gmail.com', '2021-07-17 09:25:10'),
('emanuel', '$2y$10$n78Or3o4uHcxX6l7jDCu7ezGyF3SttE/eH5qnJB0oK5Eb9XRMd0ei', 'emanuelg@gmail.com', '2021-07-31 08:22:25'),
('friki', '$2y$10$rVBTb7LAAW908wg3/BiaKOBZZeJIg21sTk6JOeP13xghBOJMC3Kri', 'frikinuel@300.com', '2021-07-31 09:09:22'),
('sofi', '$2y$10$T2bI/cUM.VNspYki9bVCCOR4AfUiavm7L8avZdkqBVKwnaNWca5Le', 'sofilinda@soylinda.com', '2021-07-31 13:06:07'),
('Santiago', '$2y$10$aeB93EPYNQ9EkuO496mp5uarzj2wz5t9dCUy19cGgEJufhtXTTQSe', 'Santiago@Gmail.com', '2021-08-14 07:25:47'),
('Lila', '$2y$10$flvkM8jP1qEu58NtotcQcev2OzMJgN8pdoR26wpfMObB8d/hC7K8e', 'Lila@gmail.com', '2021-08-14 14:25:18'),
('Lila', '$2y$10$6Nb5eOAsOQTuZHUuACV6ZOP8IoB0oBPkTIvPGZiNyzbI22P.lrAzC', 'Lila@gmail.com', '2021-08-14 14:25:19'),
('Prueba', '$2y$10$XQBs5a/bOr9RLr7wcsF.wuRmL7O7bIvaDbHVsqH5HdPdoJabHcZZW', 'Prueba@Probando.com', '2021-08-15 13:11:09'),
('Diego', '$2y$10$vgJtlp7XwMiEdakU8kAoIOujRqpY1Z3zn/qpVYrlyDV00tqHWMOx2', 'Diego@gmail.com', '2021-08-30 19:12:16'),
('Becerra', '$2y$10$2NbDmUti6hcoEELLFhsjpu06iAyAtKJoMQqnqHXpQydrvjWETjXIK', 'Becerra@gmail.com', '2021-09-10 15:58:28'),
('emanuel', '$2y$10$z/qTIh.87wAptIG1RfKdkOi5ZMspH7euImsYFAHZudd.fZhT5QOmy', 'emanuelgodi22@gmail.com', '2021-09-11 10:21:10'),
('sofia', '$2y$10$6/grbWvcvEKbiitnuaBXPuCFqZGPTm9TP0yQXgUwk7.pa7zuYm4hy', 'sofia@gmail.com', '2021-10-16 13:52:31'),
('julian', '$2y$10$leHOwfuuQAZlL0XATDwgF.u4fZ0QsYgvZbg5eyirf0pAO8zpaBSOm', 'julian@gmail.com', '2021-10-16 15:50:54');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
