console.log('Hello World!');
ings
const firebaseConfig = {
  apiKey: "AIzaSyBFHoYtqY5cuyP7otd4bjfClllJXyHS4fk",
  authDomain: "insan-cemerlang-384e5.firebaseapp.com",
  projectId: "insan-cemerlang-384e5",
  storageBucket: "insan-cemerlang-384e5.appspot.com",
  messagingSenderId: "220243131962",
  appId: "1:220243131962:web:b076a6e7f59cf798317f03",
  measurementId: "G-N8BXH58CNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export async function ambildaftarsiswa () {
 const refDokumen = Collection(basisdata,"siswa");
 const kueri = query(refDokumen,orderBy("nama"));
 const cuplikankueri = await getDocs(kueri);

let hadilkueri =[];
cuplikankueri.forEach((dokumen) =>{
 hasilkueri.push({
 id: dokumen.id,
  nama: dokumen.data().nama,
  alamat: dokumen.data().alamat
 })
}) 

 return hasilkueri;
} 