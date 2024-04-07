import { useState } from "react";

function IsEkleForm({vekilFonksiyon}) {

    const [yeniIsAdi, yeniIsAdiGuncelle] = useState("")

    function formGonder(olay) {
        olay.preventDefault();

        // veki fonksiyonla bir aksiyon tetiklenecek...
        vekilFonksiyon({type: "EKLE", title: yeniIsAdi})
        yeniIsAdiGuncelle("")
        

    }

    return (
        <>
            <form className="input-group mb-3" onSubmit={formGonder}>
                <input type="text" className="form-control form-control-sm" placeholder="İş adı yaz..." value={yeniIsAdi} onChange={(olay) => yeniIsAdiGuncelle(olay.target.value)} />
                <button type="submit" className="btn btn-success btn-sm"> <i className="bi bi-plus-circle-dotted"></i> Ekle</button>
            </form>
        </>
    )
}

export default IsEkleForm;