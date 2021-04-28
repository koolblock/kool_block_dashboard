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
        <p className="footer-links">
          <Link href="/#blogs" className="link-1">
            Blogs
          </Link>
        </p>

        <p className="footer-links">
          <Link href="/#faq" className="link-1">
            Frequently Asked Questions
          </Link>
        </p>

        <p className="footer-links">
          <Link href="/request_demo" className="link-1">
            Request a Demo
          </Link>
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>#211-439 West Broadway Street</span> Vancouver, British
            Columbia
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.604.889.2662</p>
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
          Koolblock Inc. has developed a standard for safety in workspaces. The
          company has tested its procedures in real life settings. Path-Safe has
          been developed with the assistance of the Canadian Federal government
          assistance.
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
        <p className="footer-company-name">KoolBlock © 2021</p>
      </div>
    </footer>
  );
}
