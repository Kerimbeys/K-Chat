# K-Chat

K-Chat, sohbetlerinizi sade ve hızlı bir şekilde takip etmenizi sağlayan modern bir mesajlaşma arayüzüdür.

## Özellikler
- Mesajları sade ve temiz bir şekilde görüntüleme
- Hızlı ve akıcı sohbet deneyimi
- Minimal tasarım

## Kurulum
1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/k-chat.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd k-chat
   ```

## Geliştirme Sunucusu
Bu proje statik bir arayüzdür. `dev` veya `start` script'i ile yerel sunucuyu başlatabilirsiniz:

```bash
npm run dev
```

Sunucu çalıştığında uygulamayı varsayılan olarak `http://localhost:3000` adresinden görüntüleyebilirsiniz.

## Alternatif Tek Komut (İsteğe Bağlı)
Node.js tabanlı kullanım yerine Python ile hızlıca sunucu açmak isterseniz:

```bash
python3 -m http.server 3000
```

Bu durumda uygulama `http://localhost:3000` adresinde çalışır.
