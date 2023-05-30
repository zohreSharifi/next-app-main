"use client";
import "./globals.css";
import Link from 'next/link'
import React from 'react'

function Homepage() {
  return (
    <div> this is home page
        <br/>
        <Link href="/blogs">blogs</Link>
    </div>
  )
}

export default Homepage