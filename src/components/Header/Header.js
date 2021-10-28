import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import Container from "@components/Container";

import styles from "./Header.module.scss";
import { useSnipcart } from "use-snipcart";
import { useEffect } from "react";

const Header = () => {
  const { cart = {} } = useSnipcart();
  const { subtotal = "$0.00" } = cart;

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>Cloud Crawler Trading INC.</a>
          </Link>
        </p>
        {
          <p className={styles.headerCart}>
            <button className="snipcart-checkout">
              <FaShoppingCart />
              <span>{`$${subtotal}`}</span>
            </button>
          </p>
        }
      </Container>
    </header>
  );
};

export default Header;
