import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import css from "styled-jsx/css";

function Header({ position }: any) {
  const router = useRouter();
  const path = router.pathname;
  return (
    <AppBar position={position || "fixed"} variant="elevation" color="primary">
      <Toolbar variant="dense">
        <Image
          onClick={() => router.push("/")}
          className="cursor-pointer"
          src="/images/logo.svg"
          alt="AC"
          height={40}
          width={40}
        />
        <div className="w-full flex flex-row justify-evenly max-w-sm mx-auto">
          <Link href="/">
            <Button
              classes={{ text: classNames({ "font-bold": path === "/" }) }}
            >
              About Me
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              classes={{ text: classNames({ "font-bold": path === "/blog" }) }}
            >
              Articles
            </Button>
          </Link>
        </div>
        <div style={{ width: 40, height: 40 }} />
      </Toolbar>
      {styles}
    </AppBar>
  );
}

const { className, styles } = css.resolve`
  span {
    font-weight: 800;
  }
`;

export default Header;
