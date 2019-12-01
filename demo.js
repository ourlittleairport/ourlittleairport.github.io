const ap = new APlayer({
    element: document.getElementById('player'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    theme: '#ad7a86',
    order: 'random',
    audio: [{
        name: '土瓜灣情歌',
        artist: 'my little airport',
        url: 'https://storage.googleapis.com/ourlittleairport/土瓜灣情歌.mp3',
        cover: 'https://storage.googleapis.com/ourlittleairport/適婚的年齡.jpg'
    }, {
        name: '愛情disabled',
        artist: 'my little airport',
        url: 'https://storage.googleapis.com/ourlittleairport/愛情disabled.mp3',
        cover: 'https://storage.googleapis.com/ourlittleairport/適婚的年齡.jpg'
    }, {
        name: '今晚講嘢夜唔夜',
        artist: 'my little airport',
        url: 'https://storage.googleapis.com/ourlittleairport/今晚講嘢夜唔夜.mp3',
        cover: 'https://storage.googleapis.com/ourlittleairport/適婚的年齡.jpg'
    }, {
        name: '年輕的茶餐廳老闆娘',
        artist: 'my little airport',
        url: 'https://storage.googleapis.com/ourlittleairport/年輕的茶餐廳老闆娘.mp3',
        cover: 'https://storage.googleapis.com/ourlittleairport/適婚的年齡.jpg'
    }, {
        name: '美麗新香港',
        artist: 'my little airport',
        url: 'https://storage.googleapis.com/ourlittleairport/美麗新香港.mp3',
        cover: 'https://storage.googleapis.com/ourlittleairport/適婚的年齡.jpg'
    }]
});
