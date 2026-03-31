import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Carousel } from '../components/catalog/Carousel'
import { categories } from '../data/catalog'

export function CatalogPage() {
  return (
    <div className="bg-[#141414] text-white min-h-screen font-['Roboto','Helvetica_Neue',Helvetica,Arial,sans-serif] overflow-x-hidden">
      <Navbar />

      <main className="px-[4%] pt-[100px] pb-[100px] relative z-[3]">
        {categories.map((category) => (
          <Carousel key={category.title} category={category} />
        ))}
      </main>

      <Footer />
    </div>
  )
}