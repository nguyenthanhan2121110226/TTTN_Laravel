<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Thông báo</title>
</head>

<body>
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #efefef">
        <h1 style="text-align: center;"><strong>NTTSHOP</strong></h1>
        <h1 style="text-align: center;">Xin Chào {{ $details['fullname'] }}!</h1>
        <p>Thông báo:</p>
        <p>Đơn hàng của bạn <em><strong>{{$details["status_payment_text"]}}</strong></em></p>
        <p>Thời gian: {{$details['createdAt_stt']->format('d/m/Y G.i:s')}}</p>
        <p>Nội dung: <em>{{$details["reason"]}}</em></p>

        <p style="text-align: center;">
            <em>Để xác nhận đơn hàng vừa đặt, vui lòng kiểm tra đơn hàng sau đây!</em>
        </p>
        <h2>Thông tin đơn hàng:</h2>
        <ul style="list-style-type: square;">
            <li>
                <strong>
                    <span style="color: #808080;">Tên người nhận</span>: {{ $details['reciverName'] }}</strong>
            </li>
            <li>
                <strong>
                    <span style="color: #808080;">Số điện thoại</span>: {{ $details['phone'] }}</strong>
            </li>
            <li>
                <strong>
                    <span style="color: #808080;">Địa chỉ giao h&agrave;ng</span>: {{ $details['address'] }}</strong>
            </li>
            <li>
                <strong>
                    <span style="color: #808080;">Ghi ch&uacute; đơn h&agrave;ng</span>: {{ $details['note'] }}</strong>
            </li>
            <li>
                <strong>
                    <span style="color: #808080;">Phương thức thanh to&aacute;n</span>:
                    {{ $details['paymentMethod'] }}</strong>
            </li>
            <li>
                <strong>
                    <span style="color: #808080;">Ngày đặt hàng</span>:
                    {{ $details['createdAt']->format('d/m/Y G.i:s') }}</strong>
            </li>
        </ul>
        <p>&nbsp;</p>
        <hr />
        <h2>Tổng thanh to&aacute;n:&nbsp;</h2>
        <ul style="list-style-type: square;">
            <li>
                <strong>
                    <span style="color: #808080;">Tạm t&iacute;nh</span>:
                    {{ number_format($details['amount']) }}vnđ</strong>
            </li>
            <li>
                <strong>
                    <span style="color: #808080;">Ph&iacute; ship</span>:
                    {{ number_format($details['shipping']) }}vnđ</strong>
            </li>
            <li>
                <strong>
                    <span style="color: #808080;">Ph&iacute; giảm voucher</span>:
                    {{ number_format($details['voucher']) }}vnđ</strong>
            </li>
        </ul>
        <h3>
            <strong>Th&agrave;nh tiền:
                {{ number_format($details['amount'] + $details['shipping'] - $details['voucher']) }}vnđ</strong>
        </h3>
        <hr />
        <p style="text-align: center;">
            <strong>
                <a style="text-decoration: none; padding: 10px; display: inline-block; background-color: #323333; color: #ffffff; cursor: pointer;"
                    title="Theo d&otilde;i đơn h&agrave;ng"
                    href="http://localhost:3000/thong-tin-ca-nhan/don-hang/{{ $details['orderId'] }}"
                    target="_blank">Theo d&otilde;i đơn h&agrave;ng</a>
            </strong>
        </p>
        <p>
            <strong>Mọi thắc mắc xin vui l&ograve;ng li&ecirc;n hệ</strong>:&nbsp;
            <a href="mailto:nttshop062022@gmail.com">nttshop062022@gmail.com</a>
        </p>
        <p>
            <em>Một lần nữa, Xin cảm ơn qu&yacute; kh&aacute;ch đ&atilde; mua h&agrave;ng, hy vọng shop sẽ đ&aacute;p
                ứng đầy đủ sở th&iacute;ch về sản phẩm của bạn, tr&acirc;n trọng cảm ơn!</em>
        </p>
    </div>
</body>

</html>
