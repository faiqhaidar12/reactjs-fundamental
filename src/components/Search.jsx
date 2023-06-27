import { useState } from "react";

function Search(props) {
  const [cari, setCari] = useState("");
  const ubahPencarian = (e) => {
    setCari(e.target.value);
    props.ubahPencarian(e.target.value);
  };
  return (
    <>
      <div>
        Cari Artikel :
        <input onChange={ubahPencarian} />
      </div>
      <small>
        Hasil pencarian adalah {props.totalPosts} dari pencarian {cari}
      </small>
    </>
  );
}

export default Search;
