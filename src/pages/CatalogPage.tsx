import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Carousel } from '../components/catalog/Carousel'
import { categories } from '../data/catalog'

export function CatalogPage() {
  return (
    <div className="bg-[#141414] text-white min-h-screen font-['Roboto','Helvetica_Neue',Helvetica,Arial,sans-serif] overflow-x-hidden">
      <Navbar />

      <main className="px-4 sm:px-6 md:px-[4%] pt-16 sm:pt-20 md:pt-[100px] pb-16 sm:pb-20 md:pb-[100px] relative z-10">
        {categories.map((category) => (
          <Carousel key={category.title} category={category} />
        ))}
      </main>

      <Footer />
    </div>
  )
}