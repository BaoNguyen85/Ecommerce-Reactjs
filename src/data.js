import iphone15promax from './assets/iphone.jpg'
import iphone15plus from './assets/iphone-15-plus.jpg'
import iphone14 from './assets/iPhone-14.jpg'
import iphone13 from './assets/iphone-13.jpg'
import iphone12 from './assets/iphone-12.jpg'
import iphone11 from './assets/iphone-11.jpg'
import mb13M2 from './assets/apple-macbook-air-m2.jpg'
import mb15M2 from './assets/apple-macbook-air-15.jpg'
import ipad9 from './assets/iPad-9-wifi.jpg'
import ipadair5m1 from './assets/ipad-air-5-wifi-blue-thumb.jpg'

export const products = [
    {
        id: 1,
        name: 'iphone 11',
        category: 'phone',
        oldprice: 11790000,
        price: 9990000,
        img: iphone11,
        outstanding: 0,
        desc: 
        (
        <div>
        Màn hình: IPS LCD6.1"Liquid Retina <br />
        Hệ điều hành: iOS 15 <br />
        Camera sau: 2 camera 12 MP <br />
        Camera trước: 12 MP <br />
        Chip: Apple A13 Bionic <br />
        RAM: 4 GB <br />
        Dung lượng lưu trữ: 64 GB <br />
        SIM: 1 Nano SIM & 1 eSIMHỗ trợ 4G <br />
        Pin, Sạc: 3110 mAh18 W <br />
        </div>
        )
    },
    {
        id: 2,
        name: 'iphone 12',
        category: 'phone',
        oldprice: 14890000,
        price: 1209000,
        img: iphone12,
        outstanding: 0,
        desc: 
        (
        <div>
        Màn hình: OLED 6.1"Super Retina XDR <br />
        Hệ điều hành: iOS 15 <br />
        Camera sau: 2 camera 12 MP <br />
        Camera trước: 12 MP <br />
        Chip: Apple A14 Bionic <br />
        RAM: 4 GB <br />
        Dung lượng lưu trữ: 64 GB <br />
        SIM: 1 Nano SIM & 1 eSIMHỗ trợ 5G <br />
        Pin, Sạc: 2815 mAh 20 W <br />
        </div>
        )
    },
    {
        id: 3,
        name: 'iphone 13',
        category: 'phone',
        oldprice: 17790000,
        price: 1490000,
        img: iphone13,
        outstanding: 0,
        desc: 
        (
        <div>
        Màn hình: OLED 6.1"Super Retina XDR <br />
        Hệ điều hành: iOS 15 <br />
        Camera sau: 2 camera 12 MP <br />
        Camera trước: 12 MP <br />
        Chip: Apple A15 Bionic <br />
        RAM: 4 GB <br />
        Dung lượng lưu trữ: 128 GB <br />
        SIM: 1 Nano SIM & 1 eSIMHỗ trợ 5G <br />
        Pin, Sạc: 3240 mAh 20 W <br />
        </div>
        )
    },
    {
        id: 4,
        name: 'iphone 14',
        category: 'phone',
        oldprice: 20490000,
        price: 1790000,
        img: iphone14,
        outstanding: 1,
        desc: 
        (
        <div>
        Màn hình: OLED 6.1"Super Retina XDR <br />
        Hệ điều hành: iOS 16 <br />
        Camera sau: 2 camera 12 MP <br />
        Camera trước: 12 MP <br />
        Chip: Apple A15 Bionic <br />
        RAM: 6 GB <br />
        Dung lượng lưu trữ: 128 GB <br />
        SIM: 1 Nano SIM & 1 eSIMHỗ trợ 5G <br />
        Pin, Sạc: 3279 mAh 20 W <br />
        </div>
        )
    },
    {
        id: 5,
        name: 'iphone 15 Pro Max',
        category: 'phone',
        oldprice: 34990000,
        price: 3199000,
        img: iphone15promax,
        outstanding: 0,
        desc: 
        (
        <div>
        Màn hình: OLED 6.7"Super Retina XDR <br />
        Hệ điều hành: iOS 17 <br />
        Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP <br />
        Camera trước: 12 MP <br />
        Chip: Apple A17 Pro 6 nhân <br />
        RAM: 8 GB <br />
        Dung lượng lưu trữ: 256 GB <br />
        SIM: 1 Nano SIM & 1 eSIMHỗ trợ 5G <br />
        Pin, Sạc: 4422 mAh 20 W <br />
        </div>
        )
    },
    {
        id: 6,
        name: 'iphone 15 plus',
        category: 'phone',
        oldprice: 25990000,
        price: 2349000,
        img: iphone15plus,
        outstanding: 1,
        desc: 
        (
        <div>
        Màn hình: OLED 6.7"Super Retina XDR <br />
        Hệ điều hành: iOS 17 <br />
        Camera sau: Chính 48 MP & Phụ 12 MP <br />
        Camera trước: 12 MP <br />
        Chip: Apple A16 Bionic <br />
        RAM: 6 GB <br />
        Dung lượng lưu trữ: 128 GB <br />
        SIM: 1 Nano SIM & 1 eSIMHỗ trợ 5G <br />
        Pin, Sạc: 4383 mAh 20 W <br />
        </div>
        )
    },
    {
        id: 7,
        name: 'MacBook Air 13 inch M2',
        category: 'laptop',
        oldprice: 27090000,
        price: 26490000,
        img: mb13M2,
        outstanding: 0,
        desc: 
        (
        <div>
        Màn hình: 13.6 Retina <br />
        CPU: Apple M2, 100GB/s <br />
        Card: 8 nhân GPU <br />
        Camera trước: 12 MP <br />
        Pin: lên đến 18h <br />
        Khối lượng: 1.24kg
        </div>
        )
    },
    {
        id: 8,
        name: 'MacBook Air 13 inch M2',
        category: 'laptop',
        oldprice: 32290000,
        price: 31490000,
        img: mb15M2,
        outstanding: 1,
        desc: 
        (
        <div>
        Màn hình: 15.3 Retina <br />
        CPU: Apple M2, 100GB/s <br />
        Card: 10 nhân GPU <br />
        Camera trước: 12 MP <br />
        Pin: lên đến 18h <br />
        Khối lượng: 1.51kg
        </div>
        )
    },
    {
        id: 9,
        name: 'iPad 9 WiFi',
        category: 'tablet',
        oldprice: 8390000,
        price: 7990000,
        img: ipad9,
        outstanding: 0,
        desc: 
        (
        <div>
        Màn hình: 10.2" Retina IPS LCD <br />
        Chip: Apple A13 Bionic <br />
        RAM: 3 GB <br />
        Dung lượng lưu trữ: 64 GB <br />
        Nghe gọi qua FaceTime <br />
        Pin 32.4 Wh(~8600 mAh), Sạc: 20 W <br />
        </div>
        )
    },
    {
        id: 10,
        name: 'iPad Air 5 M1 WiFi',
        category: 'tablet',
        oldprice: 15590000,
        price: 14590000,
        img: ipadair5m1,
        outstanding: 1,
        desc: 
        (
        <div>
        Màn hình: 10.9" Retina IPS LCD <br />
        Chip: Apple M1 <br />
        RAM: 8 GB <br />
        Dung lượng lưu trữ: 64 GB <br />
        Nghe gọi qua FaceTime <br />
        Pin 28.6 Wh(~7587 mAh), Sạc: 20 W <br />
        </div>
        )
    },
]