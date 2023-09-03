export default function SkillCards() {
  const items = [
    {
      icon: 'ecommerce',
      bgcolor: '#8FDD6A',
      title: 'Ecommerce',
      desc: 'Integration of eCommerce platforms, payment gateways, custom product templates, and more.',
    },
    {
      icon: 'development',
      bgcolor: '#792CB6',
      title: 'Design + Development',
      desc: 'Clean, modern designs - optimized for performance, search engines, and converting users to customers.',
    },
    {
      icon: 'analytics',
      bgcolor: '#DBDD6A',
      title: 'Analytics',
      desc: 'Get insights into who is browsing your site so that you can make smarter business decisions.',
    },
    {
      icon: 'seo',
      bgcolor: '#6ADDCF',
      title: 'SEO',
      desc: 'Looking to improve your page performance, SEO, or user experience? Request a free site audit.',
    },
    {
      icon: 'responsive',
      bgcolor: '#DD6A7F',
      title: 'Mobile-Friendly',
      desc: 'A responsive design makes your website accessible to all users, regardless of their device.',
    },
    {
      icon: 'wordpress',
      bgcolor: '#DD9B6A',
      title: 'Content Management',
      desc: 'Custom WordPress theme and plugin development. Easily update content without knowing how to code',
    },
  ]
  return (
    <section className="flex flex-col gap-14">
      <section className="flex justify-center items-center gap-4">
        <img src="/mystical-solutions.png" className="h-36"></img>
        <h1>MYSTICAL SOLUTIONS</h1>
      </section>
      <section className="flex text-white gap-8 px-10 ">
        {items.map((item, index) => {
          return <div key={index} className={`rounded-xl cursor-pointer flex flex-col gap-3 w-[18%] p-4 bg-[#242424]`}>
            <img src={item.icon + ".png"} className={`h-[120px] rounded-lg object-contain p-5 bg-[${item.bgcolor}]`} />
            <h2 className="font-Alice text-xl">{item.title.toUpperCase()}</h2>
            <p className="text-sm">{item.desc}</p>
          </div>
        })}
      </section>
    </section>
  )
}