import doctorImage from '../../assets/doc.jpg'
import OurDoctorCard from './OurDoctorCard'

const doctorData = [
  {
    name: 'Dr. John Doe',
    image: doctorImage,
    degignation: 'Cardiologist',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est inventore enim eaque voluptate reiciendis error corporis laborum accusantium ipsa repellendus!',
  },
  {
    name: 'Dr. John Doe',
    image: doctorImage,
    degignation: 'Cardiologist',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est inventore enim eaque voluptate reiciendis error corporis laborum accusantium ipsa repellendus!',
  },
  {
    name: 'Dr. John Doe',
    image: doctorImage,
    degignation: 'Cardiologist',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est inventore enim eaque voluptate reiciendis error corporis laborum accusantium ipsa repellendus!',
  },
  {
    name: 'Dr. John Doe',
    image: doctorImage,
    degignation: 'Cardiologist',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est inventore enim eaque voluptate reiciendis error corporis laborum accusantium ipsa repellendus!',
  },
]

const OurDoctors = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-slate-500 mt-10 pb-2">
        Our Doctors
      </h1>
      <p className="text-sm text-center mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        sit fugiat dignissimos est modi minima eaque blanditiis tenetur
        architecto eveniet qui nobis. Mollitia ex reprehenderit neque! Nesciunt
        quasi commodi, voluptas minus maxime, exercitationem harum alias
        suscipit dolores corrupti quaerat cum beatae facilis! Neque nemo
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full px-4 md:px-0">
        {doctorData.map((data, index) => (
          <OurDoctorCard key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default OurDoctors
