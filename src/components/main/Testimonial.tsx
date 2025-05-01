import { TestimonialsCard } from "../UI"

const testimonial = () => {
  return (
    <section className="px-10 lg:px-20 py-10">
      <div className="text-center flex flex-col justify-center items-center md:w-[65%] gap-4 md:gap-8 m-auto mb-10">
        <h3 className="text-deep text-lg">| Testimonials</h3>
        <h2 className="text-2xl md:text-4xl font-medium">What Our Clients say</h2>
        <p className="text-text md:text-xl">We’ve worked with amazing clients across industries — and here’s what they’re saying about their experience with FOURDEVS.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </section>
  )
}

export default testimonial
