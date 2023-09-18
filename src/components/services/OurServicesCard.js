const OurServicesCard = ({ data }) => {
  return (
    <div className="w-full mx-auto max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow p-4 dark:bg-gray-800 dark:border-gray-700">
      {<data.icon className="text-5xl mx-auto text-secondary" />}
      <h1 className="text-center text-lg md:text-xl font-semibold mt-3 mb-2">
        {data.title}
      </h1>
      <p className="text-justify text-[.8rem]">{data.description}</p>
    </div>
  )
}

export default OurServicesCard
