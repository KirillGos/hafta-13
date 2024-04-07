function IsListe({ yapilacaklar, vekilFonksiyon }) {
    const tamamlandiYap = (is) => {
        vekilFonksiyon({ type: "TAMAMLANDI", id: is.id });
    };

    const isSil = (is) => {
        vekilFonksiyon({ type: "SİL", id: is.id });
    };
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <h1 className="h3">Yapillacaklar Listesi</h1>
                    {yapilacaklar.map((is) => (
                        <div key={is.id} className="d-flex justify-content-between">
                            <label className="d-flex gap-2">
                                <input
                                    type="checkbox"
                                    checked={is.complete}
                                    onChange={() => tamamlandiYap(is)}
                                />
                                {is.title}
                            </label>
                            <div role="button" className="text-danger" onClick={() => isSil(is)}>
                                <i className="bi bi-trash"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default IsListe;