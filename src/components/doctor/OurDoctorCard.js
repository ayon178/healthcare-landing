import Image from 'next/image'

const OurDoctorCard = ({ data }) => {
  return (
    <div className="w-full mx-auto p-0 pb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center gap-4 px-4">
      <Image
        src={data.image}
        alt={data.name}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className=" py-4">
        <h1 className="text-xl font-semibold">{data.name}</h1>
        <p className="text-sm text-slate-500">{data.degignation}</p>
        <div className="h-[2px] w-20 bg-slate-400 mt-1 mb-2"></div>
        <p className="text-sm md:text-justify text-slate-600">{data.details}</p>
      </div>
    </div>
  )
}

export default OurDoctorCard
