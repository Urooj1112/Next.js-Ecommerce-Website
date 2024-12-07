import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white">
      {/* 1st Section */}
      <div className="max-w-[1170px] mx-auto flex flex-wrap justify-center md:justify-between items-start gap-10 px-6 py-20">
        {/* Company <Information part>*/}
        <div className="flex flex-col w-full md:w-auto">
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <h3 className="text-xl font-medium my-6">Subscribe</h3>
          <p className="text-[16px] mb-4 opacity-70">Get 10% off your first order</p>
          <div className="flex items-center justify-between border-white border-2 rounded px-4 w-[250px] h-12 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent placeholder-white text-[16px] w-[140px] opacity-70 focus:outline-none"
            />
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.912 9.99999H3L1.023 2.13499C1.01034 2.08928 1.00263 2.04234 1 1.99499C0.978005 1.27399 1.772 0.773987 2.46 1.10399L21 9.99999L2.46 18.896C1.78 19.223 0.996005 18.737 1 18.029C1.00203 17.9657 1.01314 17.9031 1.033 17.843L2.5 13"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Support Part */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-lg font-medium">Support</h3>
          <ul className="text-[16px] space-y-4">
            <li>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account Part */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-lg font-medium">Account</h3>
          <ul className="text-[16px] space-y-4">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Part */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="text-[16px] space-y-4">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download Part */}
        <div className="flex flex-col gap-4 md:gap-0">
          <h3 className="text-lg font-medium mb-6">Download App</h3>
          <p className="text-xs font-medium opacity-70 mb-3">
            Save $3 with the App (New User Only)
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-20 h-20 bg-black"
              style={{
                backgroundImage: "url(/images/QRCode.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex flex-col gap-2">
              <Link href="https://www.googleplay.com" target="_blank">
                <img
                  src="/images/play-app-store-android-label-logo.png"
                  alt="Google Play"
                  className="w-32"
                />
              </Link>
              <Link href="https://www.appstore.com" target="_blank">
                <img
                  src="/images/download-appstore.png"
                  alt="App Store"
                  className="w-32"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="border-t border-white opacity-40 py-4">
        <p className="text-center text-[14px]">
          © Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
