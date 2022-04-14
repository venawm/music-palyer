import { v4 as uuidv4 } from 'uuid';

const data = ()=>{

    return[
        {
            name: "Beaver Creek",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
          },
          {
            name: "Daylight",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Keep Going",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Nightfall",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Reflection",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
          },
          {
            name: "Under the City Stars",
            cover:
              "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
          },
        {
            name :"HeatWaves",
            artist : "Danny Ricn",
            cover : "https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png",
            audio : "https://newdjsongremix.com/files/download/type/128/id/1493",
            id :uuidv4(),
            active : false
        },
        {
            name :"Blinding Lights",
            artist : "The Weekend",
            cover : "https://i1.sndcdn.com/artworks-T5KqOdidfrbpyddU-sGIJsA-t500x500.jpg",
            audio : "https://srv9.y2mate.is/download?file=3508a22a9b2cf359d39f35321c3c8edd251003003&token=RRIEzbvcovzQYZEtj14Cug&expires=1648466907528&s=ox5gzNDgg_sFHzqad1Mf7Q",
            id :uuidv4(),
            active : false
        },
        {
            name :"WaterMelon Sugar",
            artist : "Harry Styles",
            cover : "https://i.scdn.co/image/ab67616d0000b2738998493af10c24893d392d3e",
            audio : "https://srv14.y2mate.is/download?file=3bb7eb2ba5b4ceb0cebd33caa443a6dc251003003&token=_n7Kd0csS_HCxdTawhzTeg&expires=1648466818668&s=eL_DUIJbasll-lIUrlebrA",
            id :uuidv4(),
            active : false
        },
        
    ];
}
export default data;