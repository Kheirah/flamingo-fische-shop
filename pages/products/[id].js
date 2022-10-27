import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Product Detail Page for {id}</h1>;
}
