import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[--company-background-color] text-center pt-20 pb-10">
      <p className="text-white font-Kanit text-sm font-medium">
        © 2026 <Link
              href="https://virtualpros.vercel.app/" 
            >
              Virtual Pro Pvt Ltd
            </Link>. All rights reserved. · Designed & Developed by Virtual Pro
      </p>
    </div>
  )
}

export default Footer