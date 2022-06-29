import Head from 'next/head'
import {PostCard,Categories,PostWidget} from '../components'

const post=[

  {title:'NextJS',excerpt:'Es bueno utilizar el nextJS'},
  {title:'NextJS with Tailwind ',excerpt:'Es bueno utilizar el nextJS con Tailwind '},
]

const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300 ">
      <Head>
        <title>Joseph's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
    <div className='lg:col-span-8 col-span-1' >
      {post.map((post,index)=>(
         <PostCard post={post} key={post.title} />
       )
    )}
      </div>
    </div>

      <div className='lg:col-span-4 col-span-1' >
        <div className='lg:sticky relative top-8' >
       
        </div>
      </div>

    </div>
  )
}

export default Home
