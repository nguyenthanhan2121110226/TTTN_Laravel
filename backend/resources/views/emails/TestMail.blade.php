<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Đơn hàng mới</title>
</head>
<body>
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #efefef">
        <h1 style="text-align: center;"><strong>NTTSHOP</strong></h1>
<h1 style="text-align: center;">Xin Chào {{$details["fullname"]}}!</h1>
<p style="text-align: center;">
  <em>Cảm ơn bạn đã mua sản phẩm của chúng tôi!</em>
</p>
<p style="text-align: center;">
  <em>Để xác nhận đơn hàng vừa đặt, vui lòng kiểm tra đơn hàng sau đây!</em>
</p>
<h2>Thông tin đơn hàng:</h2>
<ul style="list-style-type: square;">
  <li>
    <strong>
      <span style="color: #808080;">Tên người nhận</span>: {{$details["reciverName"]}}</strong>
  </li>
  <li>
    <strong>
      <span style="color: #808080;">Số điện thoại</span>: {{$details["phone"]}}</strong>
  </li>
  <li>
    <strong>
      <span style="color: #808080;">Địa chỉ giao h&agrave;ng</span>: {{$details["address"]}}</strong>
  </li>
  <li>
    <strong>
      <span style="color: #808080;">Ghi ch&uacute; đơn h&agrave;ng</span>: {{$details["note"]}}</strong>
  </li>
  <li>
    <strong>
      <span style="color: #808080;">Phương thức thanh to&aacute;n</span>: {{$details["paymentMethod"]}}</strong>
  </li>
  <li>
    <strong>
      <span style="color: #808080;">Ngày đặt hàng</span>: {{$details["createdAt"]->format("d/m/Y G.i:s")}}</strong>
  </li>
</ul>
<p>&nbsp;</p>
<hr />
<h2>Chi tiết đơn h&agrave;ng:</h2>
<table style="border-collapse: collapse; width: 100%; height: 69px;" border="1">
  <thead>
    <tr style="height: 18px;">
      <td style="width: 40.5913%; height: 18px;"><strong>Th&ocirc;ng tin sản phẩm</strong></td>
    </tr>
    </thead>
    <tbody>
    @foreach ($details["details"] as $product)
      <tr style="height: 51px;">
      <td style="width: 40.5913%; height: 51px;">
        <p>T&ecirc;n SP:
          <strong>{{$product["name"]}}</strong>
        </p>
        <p>
          <strong>
            <span style="color: #808080;">Số lượng</span>: {{$product["quantityCart"]}}</strong>
        </p>
        <p>
          <strong>
            <span style="color: #808080;">K&iacute;ch thước</span>: {{$product["size"]["size"]}}</strong>
        </p>
        <p>
          <strong>
            <span style="color: #808080;">M&agrave;u sắc</span>: 
            <span style="display: inline-block; width: 25px; height: 25px;
            background-color: {{$product["color"]["value"]}}; border: 2px solid #cccccc"></span></strong>
        </p>
        <p>
          <strong>
            <span style="color: #808080;">Gi&aacute; SP</span>: {{number_format($product["price"])}}vnđ</strong>
        </p>
        <h2>
          <strong>Tổng gi&aacute;: {{number_format($product["price"] * $product["quantityCart"])}}vnđ</strong>
        </h2>
      </td>
    </tr>
      @endforeach
  </tbody>
</table>
<h2>Tổng thanh to&aacute;n:&nbsp;</h2>
<ul style="list-style-type: square;">
  <li>
    <strong>
      <span style="color: #808080;">Tạm t&iacute;nh</span>: {{number_format($details["amount"])}}vnđ</strong>
  </li>
  <li>
    <strong>
      <span style="color: #808080;">Ph&iacute; ship</span>: {{number_format($details["shipping"])}}vnđ</strong>
  </li>
  <li>
    <strong>
      <span style="color: #808080;">Ph&iacute; giảm voucher</span>: {{number_format($details["voucher"])}}vnđ</strong>
  </li>
</ul>
<h3>
  <strong>Th&agrave;nh tiền: {{number_format($details["amount"] + $details["shipping"] - $details["voucher"])}}vnđ</strong>
</h3>
<hr />
<p>
  <em>
    <strong>Để theo d&otilde;i đơn h&agrave;ng của bạn chi ti&ecirc;t, Vui l&ograve;ng nhấn v&agrave;o đ&acirc;y:</strong>
  </em>
</p>
<p style="text-align: center;">
  <strong>
    <a style="text-decoration: none; padding: 10px; display: inline-block; background-color: #323333; color: #ffffff; cursor: pointer;" title="Theo d&otilde;i đơn h&agrave;ng" href="https://nttshop.netlify.app/thong-tin-ca-nhan/don-hang/{{$details['orderId']}}" target="_blank">Theo d&otilde;i đơn h&agrave;ng</a>
  </strong>
</p>
<p>
  <strong>Mọi thắc mắc xin vui l&ograve;ng li&ecirc;n hệ</strong>:&nbsp;
  <a href="mailto:nttshop062022@gmail.com">nttshop062022@gmail.com</a>
</p>
<p>
  <em>Một lần nữa, Xin cảm ơn qu&yacute; kh&aacute;ch đ&atilde; mua h&agrave;ng, hy vọng shop sẽ đ&aacute;p ứng đầy đủ sở th&iacute;ch về sản phẩm của bạn, tr&acirc;n trọng cảm ơn!</em>
</p>
    </div>
</body>
</html>
