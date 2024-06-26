import styles from "../css/Products.module.css";

import { useLoaderData } from "react-router-dom";

function SearchPage() {
  const searchResults = useLoaderData();

  return (
    <div className={styles.product_list}>
      {searchResults?.map(({ url, url_image, price }) => (
        <div key={url} className={styles.product_card}>
          <img src={url_image} />
          <p>{url.match(/\/(.*?)\//)[1].replace(/-/g, " ")}</p>
          <code>{price}$</code>
        </div>
      ))}
    </div>
  );
}

export default SearchPage;
