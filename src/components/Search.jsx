import { useState } from "react";

function Search(props) {
  const [cari, setCari] = useState("");

  const ubahPencarian = () => {
    props.ubahPencarian(cari);
  };

  const cariKeyDown = (e) => {
    if (e.key === "Enter") {
      ubahPencarian();
    }
  };

  return (
    <>
      <div>
        Cari Artikel :
        <input
          onChange={(e) => setCari(e.target.value)}
          onKeyDown={cariKeyDown}
        />
        <button onClick={ubahPencarian}>Cari Gan</button>
      </div>
      <small>
        Hasil pencarian adalah {props.totalPosts} dari pencarian {cari}
      </small>
    </>
  );
}

export default Search;
