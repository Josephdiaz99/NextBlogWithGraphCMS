import React, {useContext} from 'react'
import Link from 'next/link'

const categories=[{name:'react',slug:'react'},{name:'web development',slug:'web-dev'}]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8' >
        <div className='border-b w-full inline-bloc border-blue-400 py-8' >
            <div className='md:float-left block' >
                <Link href='/' >
                    <span className='cursor-pointer font-bold text-4x1 text-white' >
                        Joseph's Blog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents' >

            </div>
        </div>
    </div>
  )
}

export default Header