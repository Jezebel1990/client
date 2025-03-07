import Link from "next/link";
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from "@styled-icons/material-outlined";

import * as S from "./styles";

export const ProfileLinks = {
  ME: "/profile/me",
  CARDS: "/profile/cards",
  ORDERS: "/profile/orders",
} as const;

export type ProfileMenuProps = {
  activeLink?: typeof ProfileLinks[keyof typeof ProfileLinks];
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({ activeLink }) => (
  <S.Nav>
    <Link href={ProfileLinks.ME} passHref>
      <S.Link isActive={activeLink === ProfileLinks.ME} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>

    <Link href={ProfileLinks.CARDS} passHref>
      <S.Link isActive={activeLink === ProfileLinks.CARDS} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>

    <Link href={ProfileLinks.ORDERS} passHref>
      <S.Link isActive={activeLink === ProfileLinks.ORDERS} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link title="Sign out">
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
);

export default ProfileMenu;