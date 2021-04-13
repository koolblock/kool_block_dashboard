import React from "react";
import Link from "next/link";
import { makeStyles, Card, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.black_koolblock,
  },
}));


export default function Footer() {
      const classes = useStyles();

  return (
    <footer className={`footer-distributed ${classes.root}`}>
      <div className="footer-left">
        <h3>
          Kool<span>Block</span>
        </h3>

        <p className="footer-links">
          <Link href="/" className="link-1">
            Home
          </Link>
        </p>

        <p className="footer-company-name">KoolBlock © 2021</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>777 Lucky Seven, Casino</span> Lucky City, Lucky Province
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.777.777.7777</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <Link href="/contact_us">Contact Us</Link>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
