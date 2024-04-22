<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .email {
            padding: 20px;
        }
    </style>
</head>

<body>
    <div class="email">

        <h3>Xin chào {{ $details['email'] }}</h3>
        @if ($details['content'])
            <h2>
                Bạn đã gửi cho chúng tôi một tin nhắn như sau:
            </h2>
            <p>{{ $details['content'] }}</p>
            <h2>
                Câu trả lời của chúng tôi:
            </h2>
        @endif
        <p>{{ $details['feedback'] }}</p>
    </div>
</body>

</html>
