import { useReducer } from "react";
import { ilkYapilacaklarListesi, kucultucu } from "./kucultuculer/isKucultucu";
import IsListe from "./IsListe";
import IsEkleForm from "./IsEkleForm";

function App() {
  const [yapilacaklar, vekilFonksiyon] = useReducer(kucultucu, ilkYapilacaklarListesi);
  const tamamlananSayisi = yapilacaklar.veri.filter( is=>is.complete === true ).length
  return (
    <>
      <section className="container mt-5">
        <IsEkleForm vekilFonksiyon={vekilFonksiyon}/>
        <IsListe yapilacaklar={yapilacaklar.veri} vekilFonksiyon={vekilFonksiyon}/>
        <div>
        Toplam: {tamamlananSayisi + "/" + yapilacaklar.veri.length }
        </div>
      </section>
    </>
  );
}

export default App