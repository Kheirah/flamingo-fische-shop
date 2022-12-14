import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flamingo Fische Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background>
        <Image
          src="https://unsplash.com/photos/9y7y26C-l4Y/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5MjcwNjYw&force=true&w=2400"
          alt="Schöne Fische"
          width={2400}
          height={1800}
        />
      </Background>

    </div>
  );
}