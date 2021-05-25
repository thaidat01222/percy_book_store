import React from 'react'

function ListTypeOfBook() {
    return (
        <div className="list-type-of-book">
            <p><center>Danh Mục Sách</center></p>
            <ul >
                <li><a href="#">Văn học </a>
                <ul className="sub-menu">
                    <li><a href="#">Quốc Văn</a></li>
                    <li><a href="#">Ngoại Văn</a></li>
                </ul>
                </li>
                <li><a href="#">Kinh Tế</a></li>
                <li><a href="#">Ngoại Ngữ</a>
                <ul className="sub-menu">
                    <li><a href="#">Anh Ngữ</a></li>
                    <li><a href="#">Pháp Ngữ</a></li>
                    <li><a href="#">Trung Ngữ</a></li>
                    <li><a href="#">Nhật Ngữ</a></li>
                    <li><a href="#">Hàn Ngữ</a></li>
                </ul>
                </li>
                <li><a href="#">Khoa Học</a>
                <ul className="sub-menu">
                    <li><a href="#">Thiên Văn</a></li>
                    <li><a href="#">Vật Lý</a></li>
                    <li><a href="#">Công Nghệ</a></li>
                </ul>
                </li>
                <li><a href="#">Sách Giáo Khoa</a>
                <ul className="sub-menu">
                    <li><a href="#">Cấp Tiểu Học</a></li>
                    <li><a href="#">Cấp Cơ Sở</a></li>
                    <li><a href="#">Cấp Phổ Thông</a></li>
                </ul>
                </li>
                <li><a href="#">Trẻ Em</a></li>
            </ul>
        </div>
    );
}

export default ListTypeOfBook;