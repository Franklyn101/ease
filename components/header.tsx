"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const header = () => {

  const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/bookvisitor": "Book Visitor",
    "/dashboard/payment": "Payment",
  }

  const pathname = usePathname()
  const title = pageTitles[pathname] || 'Dashboard'

  return (
    <div className='font-roboto-mono'>
      {title}
    </div>
  )
}

export default header
