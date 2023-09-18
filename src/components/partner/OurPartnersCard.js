import Image from 'next/image'

const OurPartnersCard = ({ data }) => {
  return (
    <div className="w-full mx-auto max-w-sm p-0 pb-4 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative" style={{ paddingBottom: '65%' }}>
        <Image
          src={data.image}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, 640px"
        />
      </div>
      <h1 className="text-center px-4 text-lg md:text-xl font-semibold mt-3 mb-2">
        {data.title}
      </h1>
      <p className="text-justify text-[.8rem] px-4">{data.description}</p>
    </div>
  )
}

export default OurPartnersCard
