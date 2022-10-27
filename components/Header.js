import styled from "styled-components";
import { TbFish } from "react-icons/tb";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <FishIcon size="4rem" />
      <StyledNavigation>
        <Link href="/" passHref legacyBehavior>
          <Anchor>Startseite</Anchor>
        </Link>
        <Link href="/products" passHref legacyBehavior>
          <Anchor>Produkte</Anchor>
        </Link>
        <Link href="/categories" passHref legacyBehavior>
          <Anchor>Kategorien</Anchor>
        </Link>
      </StyledNavigation>
    </StyledHeader>
  );
}

const FishIcon = styled(TbFish)`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Anchor = styled.a`
  color: var(--text-secondary);

  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
`;

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
`;
