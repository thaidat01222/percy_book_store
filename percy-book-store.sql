-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2021 at 05:51 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `percy-book-store`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `nameofbook` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `author` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `publishing` varchar(50) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `synopsis` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `languges` varchar(10) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `image` varchar(50) NOT NULL,
  `dateUpdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `countView` int(11) NOT NULL,
  `id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`nameofbook`, `author`, `publishing`, `price`, `synopsis`, `languges`, `image`, `dateUpdate`, `countView`, `id`) VALUES
('The Lord Of The Rings', 'J.R.R TOLKIEN', 'NXB Văn Học', '132.000đ', 'Kỷ Đệ Nhất, các Valar kết liễu Morgoth.\r\n\r\nKỷ Đệ Nhị, Tiên và Người đánh bại Sauron.\r\n\r\nVà nay, giữa Kỷ Đệ Tam tưởng đã hòa bình, báu vật của Sauron lại ngóc đầu trong lòng núi.\r\n\r\nVà thêm một anh chàng Hobbit bỗng thấy mình từ biệt tổ ấm yên bình, dấn vào cuộc phiêu lưu mỗi bước lại thêm xa, thêm gian nan, thêm hệ trọng. Bên cậu sát cánh Đoàn Hộ Nhẫn, Con Người cùng Phù Thủy, Tiên với Người Lùn, vượt đèo cả đầm sâu, qua rừng vàng mỏ tối, vào sinh ra tử hòng lần nữa cứu Trung Địa khỏi rơi vào tay\r\n\r\nCHÚA TỂ NHỮNG CHIẾC NHẪN.', 'Tiếng Việt', 'img/chua_nhan.jpg', '2021-05-19 16:35:32', 0, 1),
('Harry Potter', 'J.K ROWLING', 'NXB Trẻ', '108.000đ', 'Khi một lá thư được gởi đến cho cậu bé Harry Potter bình thường và bất hạnh, cậu khám phá ra một bí mật đã được che giấu suốt cả một thập kỉ. Cha mẹ cậu chính là phù thủy và cả hai đã bị lời nguyền của Chúa tể Hắc ám giết hại khi Harry mới chỉ là một đứa trẻ, và bằng cách nào đó, cậu đã giữ được mạng sống của mình. Thoát khỏi những người giám hộ Muggle không thể chịu đựng nổi để nhập học vào trường Hogwarts, một trường đào tạo phù thủy với những bóng ma và phép thuật, Harry tình cờ dấn thân vào một cuộc phiêu lưu đầy gai góc khi cậu phát hiện ra một con chó ba đầu đang canh giữ một căn phòng trên tầng ba. Rồi Harry nghe nói đến một viên đá bị mất tích sở hữu những sức mạnh lạ kì, rất quí giá, vô cùng nguy hiểm, mà cũng có thể là mang cả hai đặc điểm trên.', 'Tiếng Việt', 'img/harrypotter.jpg', '2021-05-19 16:35:46', 0, 2),
('Doraemon', 'Fujiko F Fujio', 'NXB Kim Đồng', '16.200đ', 'Những chuyến phiêu lưu không bị hạn chế bởi không gian và thời gian. Đó là chuyến du hành vượt qua thời gian trở về thời tiền sử của vũ trụ (Nobita và lịch sử khai phá vũ trụ), của trái đất (Chú khủng long của Nobita), của nước Nhật (Nobita và nước Nhật thời nguyên thủy), đến tương lai (Nobita và cuộc phiêu lưu ở thành phố dây cót, Nobita và vương quốc robot)... 24 chuyến phiêu lưu của nhóm bạn có đích đến là 24 địa điểm kỳ thú, chỉ có trí tưởng tượng và ước mơ có thể vươn tới (Nobita và hành tinh muông thú, Nobita và chuyến du hành xứ quỷ...).', 'Tiếng Việt', 'img/doraemon.jpg', '2021-05-19 16:37:29', 0, 3),
('Đắc Nhân Tâm', 'Dale Carnegie', 'NXB Tổng Hợp TPHCM', '76.440đ', 'Đắc nhân tâm của Dale Carnegie là quyển sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất (best-selling Books) do báo The New York Times bình chọn suốt 10 năm liền. Được xuất bản năm 1936, với số lượng bán ra hơn 15 triệu bản, tính đến nay, sách đã được dịch ra ở hầu hết các ngôn ngữ, trong đó có cả Việt Nam, và đã nhận được sự đón tiếp nhiệt tình của đọc giả ở hầu hết các quốc gia.\r\n\r\nLà quyển sách đầu tiên có ảnh hưởng làm thay đổi cuộc đời của hàng triệu người trên thế giới, Đắc Nhân Tâm là cuốn sách đem lại những giá trị tuyệt vời cho người đọc, bao gồm những lời khuyên cực kì bổ ích về cách ứng xử trong cuộc sống hàng ngày. Sức lan toả của quyển sách vô cùng rộng lớn – với nhiều tầng lớp, đối tượng.\r\n\r\nĐắc Nhân Tâm không chỉ là là nghệ thuật thu phục lòng người, Đắc Nhân Tâm còn đem lại cho độc giả góc nhìn, suy nghĩ sâu sắc về việc giao tiếp ứng xử.\r\n\r\nTriết lý của Đắc Nhân Tâm là  hiểu mình, thành thật với chính mình, từ đó hiểu biết và quan tâm đến những người xung quanh để nhìn ra và khơi gợi những tiềm năng ẩn khuất nơi họ, giúp họ phát triển lên một tầm cao mới. Đây chính là nghệ thuật cao nhất về con người và chính là ý nghĩa sâu sắc nhất đúc kết từ những nguyên tắc vàng của Dale Carnegie.', 'Tiếng Việt', 'img/dac_nhan_tam.jpg', '2021-05-19 16:39:42', 0, 4),
('Trên Đường Băng ', 'Tony Buổi Sáng', 'NXB Trẻ', '66.400đ', 'TRÊN ĐƯỜNG BĂNG là cuốn sách tập hợp những bài viết truyền cảm hứng và hướng dẫn kỹ năng cho các bạn trẻ khi chuẩn bị bước vào đời.\r\n\r\nCuốn Trên Đường Băng được chia làm 3 phần: “Chuẩn bị hành trang”, “Trong phòng chờ sân bay” và “Lên máy bay”, tương ứng với những quá trình một bạn trẻ phải trải qua trước khi “cất cánh” trên đường băng cuộc đời, bay vào bầu trời cao rộng.\r\n\r\nXuất phát từ cái tâm trong sáng của người đi trước dày dặn kinh nghiệm, kiến thức, Tony Buổi Sáng mang đến đọc giả những bài viết hài ước, tinh tế, sinh động và đầy thiết thực. Cuốn Trên Đường Băng với những bài viết về thái độ với sự học và kiến thức nói chung, cách ứng phó với những trắc trở thử thách khi đi làm, cách sống hào sảng nghĩa tình văn minh… truyền cảm hứng cho các bạn trẻ sống hết mình, trọn vẹn từng phút giây và sẵn sàng cho hành trang cuộc sống.\r\n\r\nTrên Đường Băng của Tony Buổi Sáng tuy hướng đến những đọc giả là những người trẻ nhưng những người lớn hơn vẫn để hiểu hơn, và có cách nhìn nhận cũng như giáo dục con em mình tốt nhất thay vì bảo vệ con quá kĩ trở nên yếu ớt và thiếu tự lập. Và để yêu thương “khoa học” nhất. Đây cũng là cuốn sách mà những người đi làm nên sở hữu để nhìn lại chặng đường mình đã đi qua, suy ngẫm và thay đổi vì chưa bao giờ là quá muộn.\r\n\r\nMột cuốn sách với nhiều điều để bạn học hỏi, suy ngẫm và chuẩn bị tốt nhất cho hành trang trên con đường tuổi trẻ của chính mình.', 'Tiếng Việt', 'img/tren_duong_bang.jpg', '2021-05-19 16:41:07', 0, 5),
('Tuổi Trẻ Đáng Giá Bao Nhiêu', 'Rosie Nguyễn', 'NXB Hội Nhà Văn', '66.400đ', '“Bạn hối tiếc vì không nắm bắt lấy một cơ hội nào đó, chẳng có ai phải mất ngủ.\r\n\r\nBạn trải qua những ngày tháng nhạt nhẽo với công việc bạn căm ghét, người ta chẳng hề bận lòng.\r\n\r\nBạn có chết mòn nơi xó tường với những ước mơ dang dở, đó không phải là việc của họ.\r\n\r\nSuy cho cùng, quyết định là ở bạn. Muốn có điều gì hay không là tùy bạn.\r\n\r\nNên hãy làm những điều bạn thích. Hãy đi theo tiếng nói trái tim. Hãy sống theo cách bạn cho là mình nên sống.\r\n\r\nVì sau tất cả, chẳng ai quan tâm.”\r\n\r\n“Tôi đã đọc quyển sách này một cách thích thú. Có nhiều kiến thức và kinh nghiệm hữu ích, những điều mới mẻ ngay cả với người gần trung niên như tôi.\r\n\r\nTuổi trẻ đáng giá bao nhiêu? được tác giả chia làm 3 phần: HỌC, LÀM, ĐI.\r\n\r\nNhưng tôi thấy cuốn sách còn thể hiện một phần thứ tư nữa, đó là ĐỌC.\r\n\r\nHãy đọc sách, nếu bạn đọc sách một cách bền bỉ, sẽ đến lúc bạn bị thôi thúc không ngừng bởi ý muốn viết nên cuốn sách của riêng mình.\r\n\r\nNếu tôi còn ở tuổi đôi mươi, hẳn là tôi sẽ đọc Tuổi trẻ đáng giá bao nhiêu? nhiều hơn một lần.”\r\n\r\n- Đặng Nguyễn Đông Vy, tác giả, nhà báo', 'Tiếng Việt', 'img/tuoi_tre_dang_gia_bao_nhieu.jpg', '2021-05-19 16:42:43', 0, 6),
('Cứ Bình Tĩnh', 'Tuệ Nghi', 'NXB Hà Nội', '69.700đ', 'Tuần hoàn cuộc sống, có yêu thì sẽ có ghét. Sẽ là bất khả thi nếu khuyên con người đừng ghét bỏ ai. Tôi cũng từng ghét người khác, vì tôi nghĩ rằng họ là tác nhân khiến tôi mất đi điều tôi yêu quý. Nhưng suy cho cùng, nếu thứ đó thật sự là của tôi, thì chẳng ai lấy đi được, chẳng ai tác động được. Chỉ có tôi, nếu cứ tiếp tục thù ghét họ thì chính tôi mới tự lấy đi bình yên của bản thân mình. Và tôi quyết định thôi nghĩ về họ. Người đánh vào đời ta một cái, ta xô lại người một cái, oan oan tương báo đến bao giờ mới dứt? Lẽ thường con người ta cứ thấy mình trong vòng xoáy lẩn quẩn là vì thế. Nếu không thể thương nhau, thì cũng đừng ghét, mà đã ghét thì hãy tránh xa chứ đừng nên tìm cách trả đũa nhau làm gì.\r\n\r\nThời vụng dại, hứa yêu nhau mãi mãi, yêu đến sông cạn núi mòn. Khi trưởng thành rồi mới hiểu trên đời này chẳng có điều gì là mãi mãi, kể cả tình yêu. Chỉ có kỷ niệm đẹp mới tồn tại vĩnh viễn trong ký ức của mỗi người, nên sống tốt với nhau được ngày nào quý ngày đó.\r\n\r\nHãy cố gắng đặt niềm tin vào đúng người, nếu có vô tình đặt sai thì hãy hiểu rằng niềm tin vào chính bản thân mình vẫn là nguyên vẹn, chỉ có lòng tin dành cho người không xứng đáng mới bị sứt mẻ đi.  Và ta phải có đủ bản lĩnh để vượt qua những cám dỗ trong cuộc đời, bản lĩnh để cùng nhau đi qua ngày sóng gió, bản lĩnh để vượt qua đớn đau khổ lụy trong tình yêu mà không đánh mất chính mình.\r\n\r\nMọi chuyện xảy ra trên đời này đều có nguyên nhân của nó, nếu cuộc đời ban cho ta quả đắng thì việc của ta chính là bình tĩnh đón nhận, bình tĩnh đối mặt và bình tĩnh bước qua.', 'Tiếng Việt', 'img/cu_binh_tinh.jpg', '2021-05-19 16:44:56', 0, 7);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` int(11) NOT NULL,
  `description` int(11) NOT NULL,
  `content` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `content`) VALUES
(11111, 2222, 3333, 4444),
(4444, 3333, 2222, 1111);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(50) DEFAULT NULL,
  `age` varchar(2) DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(25) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `account-type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `age`, `username`, `password`, `email`, `account-type`) VALUES
('admin', '22', 'admin', 'admin', 'admin@gmail.com', 'staff'),
('client', '22', 'client', 'client', 'client@gmail.com', 'client');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
