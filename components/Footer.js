import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="h-[442px] border-t border-gray-300 mt-10">
      <div className="flex justify-between w-[90%] m-auto py-20">
        <Image
          className="h-fit"
          src="/logo.svg"
          alt="website logo"
          width={185}
          height={70}
        ></Image>
        <div className="flex text-sm gap-36 mr-10">
          <div>
            <p className="text-gray-400 font-bold mb-2">LINKS</p>
            <ul className="font-semibold">
              <li className="py-2">
                <Link href="/">How it works</Link>
              </li>
              <li className="py-2">
                {" "}
                <Link href="/">FAQ</Link>
              </li>
              <li className="py-2">
                <Link href="/">Reviews</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-400 font-bold mb-2">SOLUTIONS</p>
            <ul className="font-semibold">
              <li className="py-2">
                <Link href="/">Contact</Link>
              </li>
              <li className="py-2">
                {" "}
                <Link href="/">Our Clients</Link>
              </li>
              <li className="py-2">
                <Link href="/">About us</Link>
              </li>
              <li className="py-2">
                <Link href="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto">
        <hr></hr>
        <div className="flex flex-row font-semibold py-8 text-gray-600 justify-between">
          <p>@2023 All rights reserved.</p>

          <div>
            <Link href="/" className="mr-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.812 5.01711H6.145C3.855 5.01711 2 6.85211 2 9.11611V14.8841C2 17.1481 3.856 18.9841 6.145 18.9841H17.812C20.102 18.9841 21.957 17.1481 21.957 14.8841V9.11611C21.957 6.85211 20.101 5.01611 17.812 5.01611V5.01711ZM15.009 12.2801L9.552 14.8551C9.51872 14.8711 9.48192 14.8785 9.44503 14.8765C9.40815 14.8744 9.37237 14.8631 9.34103 14.8436C9.3097 14.824 9.28382 14.7968 9.2658 14.7646C9.24779 14.7323 9.23822 14.6961 9.238 14.6591V9.35011C9.23867 9.31299 9.24872 9.27663 9.26722 9.24444C9.28573 9.21224 9.31208 9.18526 9.34382 9.16599C9.37556 9.14673 9.41167 9.13581 9.44877 9.13425C9.48587 9.1327 9.52276 9.14057 9.556 9.15711L15.014 11.8921C15.0504 11.9102 15.0809 11.9383 15.102 11.9729C15.1232 12.0076 15.1341 12.0476 15.1336 12.0882C15.1331 12.1288 15.1211 12.1685 15.0991 12.2026C15.077 12.2367 15.0458 12.2639 15.009 12.2811V12.2801Z"
                  fill="#0F172A"
                />
              </svg>
            </Link>
            <Link href="/" className="mr-5">
              <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.04598 3.865V6.613H0.0319824V9.973H2.04598V19.959H6.17998V9.974H8.95498C8.95498 9.974 9.21498 8.363 9.34098 6.601H6.19698V4.303C6.19698 3.96 6.64698 3.498 7.09298 3.498H9.34698V0H6.28298C1.94298 0 2.04598 3.363 2.04598 3.865Z"
                  fill="#0F172A"
                />
              </svg>
            </Link>
            <Link href="/" className="mr-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
                  fill="#0F172A"
                />
                <path
                  d="M11.982 6.81909C10.6134 6.82121 9.30154 7.36588 8.33391 8.3337C7.36627 9.30152 6.82186 10.6135 6.82001 11.9821C6.82159 13.351 7.36603 14.6634 8.33391 15.6315C9.30179 16.5996 10.6141 17.1442 11.983 17.1461C13.3521 17.1445 14.6647 16.5999 15.6328 15.6318C16.6008 14.6637 17.1454 13.3512 17.147 11.9821C17.1449 10.6132 16.5999 9.30098 15.6317 8.33329C14.6634 7.3656 13.3509 6.82141 11.982 6.82009V6.81909ZM11.982 15.1381C11.1452 15.1381 10.3428 14.8057 9.75109 14.214C9.15941 13.6223 8.82701 12.8198 8.82701 11.9831C8.82701 11.1463 9.15941 10.3438 9.75109 9.75217C10.3428 9.16049 11.1452 8.82809 11.982 8.82809C12.8188 8.82809 13.6213 9.16049 14.2129 9.75217C14.8046 10.3438 15.137 11.1463 15.137 11.9831C15.137 12.8198 14.8046 13.6223 14.2129 14.214C13.6213 14.8057 12.8188 15.1381 11.982 15.1381Z"
                  fill="#0F172A"
                />
                <path
                  d="M17.156 8.09509C17.8392 8.09509 18.393 7.54127 18.393 6.85809C18.393 6.17492 17.8392 5.62109 17.156 5.62109C16.4728 5.62109 15.919 6.17492 15.919 6.85809C15.919 7.54127 16.4728 8.09509 17.156 8.09509Z"
                  fill="#0F172A"
                />
              </svg>
            </Link>
            <Link href="/" className="mr-5">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0413664 0L6.60487 8.82491L0 16H1.48661L7.26929 9.71796L11.9414 16H17L10.0671 6.67879L16.2149 0H14.7283L9.40292 5.78545L5.1 0H0.0413664ZM2.22749 1.10103H4.5514L14.8136 14.899H12.4897L2.22749 1.10103Z"
                  fill="#0F172A"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
