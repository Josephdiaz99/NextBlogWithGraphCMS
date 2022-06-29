
import Head from 'next/head'

const post=[

  {title:'NextJS',excerpt:'Es bueno utilizar el nextJS'},
  {title:'NextJS with Tailwind ',excerpt:'Es bueno utilizar el nextJS con Tailwind '},
]

const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Joseph's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
    {post.map((post,index)=>(
          <div>
          {post.title}
          {post.excerpt}
          </div>
       )
    )}
    </div>

    </div>
  )
}

export default Home
