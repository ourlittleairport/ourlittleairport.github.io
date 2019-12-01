const ap = new APlayer({
    element: document.getElementById('player'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    theme: '#ad7a86',
    order: 'random',
    audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
        theme: '#ebd0c2'
    }, {
        name: 'トリカゴ',
        artist: 'XX:me',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
        theme: '#46718b'
    }, {
        name: '前前前世',
        artist: 'RADWIMPS',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
        theme: '#505d6b'
    }, {
        name: '光るなら(HLS)',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        theme: '#ebd0c2',
        type: 'hls'
    }]
});
