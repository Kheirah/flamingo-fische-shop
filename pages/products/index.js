import GridList from "../../components/GridList";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <GridList>
        <li>
          <Link href="/products/Guppy">Guppy</Link>
        </li>
        <li>
          <Link href="/products/Regenbogenfisch">Regenbogenfisch</Link>
        </li>
        <li>
          <Link href="/products/Killermuschel">Killermuschel</Link>
        </li>
        <li>
          <Link href="/products/Kuschelwahl">Kuschelwahl</Link>
        </li>
        <li>
          <Link href="/products/Lachstierchen">Lachstierchen</Link>
        </li>
        <li>
          <Link href="/products/Bundestagswahl">Bundestagswahl</Link>
        </li>
      </GridList>
    </>
  );
}
