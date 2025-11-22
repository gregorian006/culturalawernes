// src/data/regionsData.js

export const regionsData = [
  {
    id: 'sumut',
    name: 'North Sumatra',
    audio: '/assets/audio/bgm-sumut.mp3',
    images:[ '/assets/rumah-bolon.jpg',
            '/assets/batak-simalungun.jpeg',
            '/assets/batak-toba.png',
            '/assets/karo.jpeg',
            '/assets/melayu-deli.jpg',
            '/assets/ikan-arsik.jpg',
            '/assets/ulos.jpg',

            ],
    slug: 'sumut',
    culture: 'Suku Batak',
    description: 'Home to the Batak people and the legendary Lake Toba, known for its Ulos cloth and Mangulosi tradition.',
    // TAMBAHAN BARU DI SINI LEK:
    subTribes: [
      'Batak Toba', 
      'Batak Karo', 
      'Batak Simalungun', 
      'Batak Mandailing', 
      'Batak Pakpak', 
      'Batak Angkola',
      'Nias',
      'Melayu Deli'
    ],
    funFact: 'Lake Toba is the largest volcanic lake in the world which has an island in the middle (Samosir) and has beautiful views.',
    traditionalHouse: 'Rumah Bolon', // Tambah ini sekalian biar lengkap
    food: 'Arsik Ikan Mas',
    clothing: 'Ulos & Tali-tali',
    // Koordinat ini nanti kita sesuaikan sama peta kau
    top: '25%', 
    left: '38%',

    mobileTop: '26%',  // Turunin dikit
    mobileLeft: '32%', // Geser kanan dikit
  },
  {
    id: 'sumbar',
    name: 'Sumatera Barat',
    audio: '/assets/audio/bgm-sumbar.mp3',
     images:[ '/assets/sumbar-culture.png',
            ],
    slug: 'sumbar',
    culture: 'Suku Minangkabau',
    description: 'Terkenal dengan Rumah Gadang dan tradisi merantau. Masakan Rendang diakui dunia.',
    food: 'Rendang & Sate Padang',
    clothing: 'Baju Kurung & Suntiang',
    top: '47%', 
    left: '46%',

    mobileTop: '47%', 
    mobileLeft: '43%',
  },
  {
    id: 'aceh',
    name: 'Aceh',
    audio: '/assets/audio/bgm-aceh.mp3',
     images:[ '/assets/aceh-culture.png',
              '/assets/rumah-bolon.jpg',
            ],
    slug: 'aceh',
    culture: 'Suku Aceh',
    description: 'Serambi Mekkah dengan tari Saman yang mendunia. Kuat akan nilai syariat Islam.',
    food: 'Mie Aceh & Ayam Tangkap',
    clothing: 'Baju Meukasah',
    top: '5%', 
    left: '25%',
    mobileTop: '9%', 
    mobileLeft: '10%',
  },
  // Nanti kau tambahi lagi provinsi lain di sini ya Lek...
];