import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import Link from 'next/link';

const tabs = () => {
  return (
    <div className='flex items-center gap-3'>
        <Link href="/dashboard" className="flex items-center flex-col gap-1">
          <AiOutlineHome className='text-3xl' />
          <span>Dashboard</span>
        </Link>
      
      <Link href="/dashboard/balance" className="flex items-center flex-col gap-1">
        <IoWalletOutline className='text-3xl' />
        <span>Balance due</span>
      </Link>

      <Link href="/dashboard/addvisitor" className="flex items-center flex-col gap-1">
        <FaPeopleCarry className='text-3xl' />
        <span>Add Visitor</span>
      </Link>
    </div>
  )
}

export default tabs
