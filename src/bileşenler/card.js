const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const Card = document.createElement("div");
  Card.classList.add("card");

  const HeadLine = document.createElement("div");
  HeadLine.classList.add("headline");
  HeadLine.textContent = makale.anabaslik;
  Card.appendChild(HeadLine);

  const Author = document.createElement("div");
  Author.classList.add("author");
  HeadLine.appendChild(Author);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  Author.appendChild(imgContainer);

  const imgYeni = document.createElement("img");
  imgYeni.src = makale.yazarFoto;
  imgContainer.appendChild(imgYeni);

  const YazarAdi = document.createElement("span");
  YazarAdi.textContent = makale.yazarAdi + "tarafından";
  Author.appendChild(YazarAdi);
  Card.appendChild(Author);

  return Card;

  Card.addEventListener("click", (event) => {
    console.log(event.target.querySelector(".headline".textContent));
  });
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
