# Do an - *Blog 3T*

**Blog 3T** Đây là trang web cho phép người dùng đăng bài viết.

Danh sách sinh viên: 	Phạm Ngọc Thiện - 1312554 
							Trần Quang Tín - 1312602 
							Nguyễn Minh Tú - 1312680 


## Yêu cầu

Yêu cầu **GIT**:

* [ ] Có sử dụng GIT.
* [ ] Sử dụng GIT trên 1 branch.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [ ] Sử dụng GIT theo Feature Branch Workflow.
* [ ] Sử dụng GIT theo Gitflow Workflow.

Yêu cầu **Công Nghệ**:

* [ ] Giải thích được lựa chọn xử lý tại client & server
* [ ] Giải thích lý do sử dụng AJAX
* [ ] Đưa ra được nhiều hướng xử lý và so sánh
* [ ] Đưa được nhiều loại trường hợp so sánh, lựa chọn công nghệ hay

Yêu cầu **thiết kế**:

* [ ] Thiết kế theo table.
* [ ] Thiết kế với div.
* [ ] Thiết kế nâng cao
    * [ ] Navigation, header, footer, sidebar.
    * [ ] Các hiệu ứng: hover, focus,...
* [ ] Thiết kế chạy trên nhiều trình duyệt
    * [ ] IE
    * [ ] Firefox
    * [ ] Chrome
    * [ ] Icon, màu sắc,...
* [ ] Thiết kế responsive

Yêu cầu **Lập trình front-end**:

* [ ] Lập trình JS cơ bản
* [ ] Lập trình JS thao tác DOM
* [ ] Sử dụng sự kiện như hover, change, click, focus,...
* [ ] Lập trình JS với animation
* [ ] Sử dụng MVC và module
* [ ]  Sử dụng HTML 5 cơ bản: localstorage, session storage,...
* [ ]  Áp dụng một số design pattern nâng cao
* [ ]  Áp dụng các thư viện JS phổ biến như: Angular JS, React,...
- Sử dụng HTML 5 nâng cao: File API


Yêu cầu **Lập trình và kiến trúc web**:

* [ ] Có làm và thao tác CSDL
* [ ] Có làm với MVC
* [ ] Tách xử lý logic ở mode
* [ ] Sử dụng decorators để tách một số xử lý liên quan giao diện khỏi model
* [ ] Sử dụng thêm nhiều mẫu thiết kế presenter, decorators, strategy để phân chia rõ hơn trách nhiệm các lớp trong MVC

Yêu cầu **AJAX**:

* [ ] Có làm
* [ ] Lập trình AJAX với JSON
* [ ] Lập trình AJAX với các callback success, error
* [ ] Sử dụng một số design pattern để thiết kế lớp truy xuất API
* [ ] Lưu trữ thông tin chứng thực tự động 
* [ ] Upload file với AJAX

Yêu cầu **Web API**:

* [ ] Có làm
* [ ] Dùng JSON hoặc XML
* [ ] Thiết kế API theo Restful hợp lý
* [ ] Xây dựng được các API lấy thông tin đơn giản
* [ ] Xây dựng API cho phép đăng thông tin như cập nhật, xóa,...
* [ ] Có chứng thực API
* [ ] Tải file lên qua API

Yêu cầu **Bảo mật**:

* [ ] Người dùng không được phép vào các trang không có quyền
* [ ] Tổ chức phân quyền dưới dạng middleware
* [ ] Chống SQL Injection
* [ ] Bảo mật chứng thực API
* [ ] Hiểu và giải thích được cách chống SQL Injection và bảo mật API

Yêu cầu **API bên ngoài**:

* [ ] Google map API
* [ ] Chứng thực dùng API như Facebook, Google, Github,...
* [ ] Thanh toán với Paypal API
* [ ] Sử dụng API để post, chia sẻ thông tin: Facebook Graph, Twitter, Ingtagram, ...
* [ ]  Sử dụng nhiều API

Yêu cầu **Sử dụng frameworks**:

* [ ] jQuery
* [ ] CSS framework: bootstrap, foundation,...
* [ ] Backend Framework: MEAN, Sails, Meteor
* [ ] Front-end Framework: Angular JS 1, Angular JS 2, Ember, Backbone, React,...
* [ ] Sử dụng tốt cả 3 framework cho CSS, backend và front-end
	
				
## Chức năng


Danh sách chức năng **bắt buộc**:

* [ ] Đăng ký tài khoản bằng email, password, và tên.
* [ ] Đăng nhập bằng email và password.
* [ ] Sau khi đăng nhập người dùng có đăng bài viết của mình lên.
* [ ] Cho phép comment trên bài viết. Để thực hiện chức năng này thì phải đăng nhập.
* [ ] Cho phép người đọc đánh giá bài viết.
* [ ] Người dùng có thể tạo avarta cho mình.
* [ ] Người đọc có thể tìm kiếm bài viết theo tên của bài viết.
* [ ] Hiển thị top 10 các bài viết được đọc giả đánh giá cao nhất. 
* [ ] Hiển thị top 5 các Blogger tiêu biểu.(Dựa vào số lượng bài up mà Blogger sẽ được tích luỹ điểm cho tài khoản của mình).	
* [ ] Cho phép người đọc liên hệ với nhóm thông qua trang Liên hệ mà không cần đăng nhập. 
* [ ] Có hướng dẫn các Blogger cách đăng bài, chỉnh sửa bài của mình.
* [ ] Hiển thị số lượng comment ở dưới cái bài Blog. 
* [ ] Người đọc có thể xem các danh sách các bài Blog theo chủ đề mà mình muốn đọc.
* [ ] Hiển thị ngày, giờ đăng cùng với tên tác giả dưới từng bài Blog.
* [ ] Có mục quy định của nhóm đối với các Blogger hay đối với người đọc như: Không được đăng các bài có nội dung nhạy cảm đối với Blogger, không được comment bài blog bằng những từ ngữ thô tục đối với người đọc,.. 
* [ ] Người đọc có thể báo vi phạm nội dung xấu đối với các trang Blog không đúng với quy định của Web hoặc là cảm thấy không phù hợp với môi trường Blog bằng nút Báo vi phạm.


Danh sách chức năng **phụ**:

* [ ] Chia sẻ bài Blog lên Facebook.
* [ ] Phân quyền người dùng. Thêm, xoá, sửa bài viết do chính người đó đăng. Còn admin có thế xem xóa sửa bất cứ bài viết nào.
* [ ] Người dùng có thể đăng nhập với Facebook.
* [ ] Tạo một trang thông tin người dùng cho phép người dùng quản lí thông tin của mình. 
* [ ] Hiển thị các bài đăng mới nhất trong mục bài viết gần đây.
* [ ] Có thể thêm các biểu tượng cảm xúc(Mặt cười, mặt khóc,...) trong comment.
* [ ] Mọi người có thể kết bạn với nhau khi bấm nút kết bạn. Lời mời sẽ được gửi đến tài khoản của người được mời kết bạn.(Bắt buộc phải đăng nhập)


## Video Walkthrough
Here's a walkthrough of implemented user stories:
## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

