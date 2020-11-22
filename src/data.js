import { v4 as uuidv4 } from 'uuid'

export default function chillHop() {
    return [
        {
            name: "Jazz Cabbage",
            artist: "Ian Ewing, Strehlow",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#BA4A46', '#FDF0DD'], //Colorzilla Extension
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9363"
        },
        {
            name: "Caught In The Rain",
            artist: "Aso",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/4ea638d533e86b4ba2feca13786ddfd9ec8b5df0-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#FCA15A', '#83ADAB'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8776"
        },
        {
            name: "Lagoons",
            artist: "Strehlow, Chris Mazuera",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#BA4A46', '#FDF0DD'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8266"
        }
    ]
}