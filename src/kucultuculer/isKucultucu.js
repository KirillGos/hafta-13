import { v4 as uuid } from 'uuid'

const ilkYapilacaklarListesi = {
  veri: [{
    id: 0,
    title: "Yumurta alınacak (organik kırda gezen tavuk)",
    complete: false,
  },

  {
    id: 1,
    title: "Ekmek alınacak (ramazan pidesi)",
    complete: false,
  }
  ], 
  tamamlanan: 0,
};

 function tamamlananSayisi(veri) {
  return veri.filter(is => is.complete === true).length;
}
const isKucultucu = (state, aksiyon) => {
  switch (aksiyon.type) {
    case "TAMAMLANDI":
      const tamamlandiVeri =  state.veri.map((todo) => {
        if (todo.id === aksiyon.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
      const yeniState =  {...state, veri: tamamlandiVeri}
      return {...yeniState, tamamlanan: tamamlananSayisi(yeniState.veri)}
    case "SİL":
      const silindiVeri =  state.veri.filter((todo) => {
        if (todo.id !== aksiyon.id) { // eger vekil fonksiyondan gelen id suanki  ise esit degilse yeni array'e elemani ekle... filtreleme islemi yapiliyor
          return todo;
        }
      });
      return {...state, veri: silindiVeri}
    case "EKLE":
      /*  const enBuyukIs = state.reduce((max, is) => {
         return is.id > max ? is.id : max;
       }, state[0].id) + 1; 
       const yeniId = state.reduce((max, is) => {
           return Math.max(max, is.id)
        },0) + 1;
       */
      const yeniIs = { id: uuid(), title: aksiyon.title, completed: false }
      return {...state, veri: [...state.veri, yeniIs]}
      
      case "TAMAMLANAN_GUNCELLE":
      return state.filter(is => is.completed === true).length;

    default:
      return state;
  }
};

export { ilkYapilacaklarListesi, isKucultucu as kucultucu }