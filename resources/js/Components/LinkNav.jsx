import React from 'react'
import { Link } from '@inertiajs/react'

function LinkNav({ title, href }) {
  return (
    <>
      <Link href={href} className='
      p-2 text-white hover:bg-blue-500 md:hover:text-xl text-2xl md:text-base transition-all
      '>{title}</Link>
    </>
  )
}

export default LinkNav
