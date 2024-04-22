<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .email {
            padding: 60px;
        }
        .button {
            text-decoration: none;
            color: #ffffff;
            direction: inline-block;
            padding: 0.7rem 1.4rem;
            background-color: #444444
        }
    </style>
</head>

<body>
    <div class="container">
        <h3>Xin chào {{ $details['email'] }}</h3>
       <p style="font-size: 1.2rem">Vui lòng nhấn vào nút bên dưới để xác thực tài khoản.</p>
       <a href="http://localhost:3000/quen-mat-khau/{{$details['token']}}" class="button">Xác thực tài khoản</a>
    </div>
</body>

</html>
