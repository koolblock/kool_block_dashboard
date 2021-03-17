import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          Kool<span>Block</span>
        </h3>

        <p class="footer-links">
          <Link href="/" class="link-1">
            Home
          </Link>
        </p>

        <p class="footer-company-name">KoolBlock © 2021</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>777 Lucky Seven, Casino</span> Lucky City, Lucky Province
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.777.777.7777</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <Link href="/contact_us">Contact Us</Link>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
