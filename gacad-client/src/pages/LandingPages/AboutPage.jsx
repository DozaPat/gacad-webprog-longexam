import Button from '../../components/Button';
import logo from '../../assets/img/nice.png';
import about1 from '../../assets/img/lanyard.jpg';
import about2 from '../../assets/img/merch.jpg';
import about3 from '../../assets/img/apparel.jpg';
import about4 from '../../assets/img/mercha.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* HERO ABOUT SECTION */}
      <section className="border-y-[3px] border-[#FFD100] bg-[#002147] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div className="rounded-3xl border-[3px] bg-[#FFD100] p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem]">
              <img
                src={logo}
                alt="BulldogEx"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
              About Store
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100 sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear
              product categories, quick actions, and straightforward store information.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                to="/"
                className="border-2 border-white bg-[#FFD100] text-[#002147] hover:bg-white"
              >
                Back Home
              </Button>

              <Button
                to="/products"
                className="border-2 border-white bg-white text-[#002147] hover:bg-[#FFD100]"
              >
                Open Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STORE OVERVIEW */}
      <section className="border-y-[3px] border-[#FFD100] bg-[#002147] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
            Store Overview
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-[3px] border-white bg-[#FFD100] p-5">
            <p className="text-2xl font-bold text-[#002147]">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#002147]/80">
              Items
            </p>
          </div>

          <div className="rounded-3xl border-[3px] border-white bg-[#FFD100] p-5">
            <p className="text-2xl font-bold text-[#002147]">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#002147]/80">
              Categories
            </p>
          </div>

          <div className="rounded-3xl border-[3px] border-white bg-[#FFD100] p-5">
            <p className="text-2xl font-bold text-[#002147]">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#002147]/80">
              Pickup Slots
            </p>
          </div>

          <div className="rounded-3xl border-[3px] border-white bg-[#FFD100] p-5">
            <p className="text-2xl font-bold text-[#002147]">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#002147]/80">
              Orders
            </p>
          </div>
        </div>
      </section>

      {/* STORE FLOW */}
      <section className="border-y-[3px] border-[#FFD100] bg-[#002147] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
              Store Flow
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Stacked shopping wireframe
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-[3px] border-white bg-[#FFD100] p-5">
                <h3 className="text-lg font-semibold text-[#002147]">
                  Curated Catalog
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#002147]/80">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="rounded-3xl border-[3px] border-white bg-[#FFD100] p-5">
                <h3 className="text-lg font-semibold text-[#002147]">
                  Simple Checkout
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#002147]/80">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="rounded-3xl border-[3px] border-white bg-[#FFD100] p-5">
                <h3 className="text-lg font-semibold text-[#002147]">
                  Pickup Ready
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#002147]/80">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          {/* UPDATED VISUAL GRID SECTION */}
          <div className="rounded-3xl border-[3px] border-white bg-[#001a38] p-6 shadow-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
              Visual Grid
            </p>
            
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[about1, about2, about3, about4].map((img, index) => (
                <div 
                  key={index} 
                  className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-white border-[3px] border-[#FFD100] overflow-hidden"
                >
                  <img 
                    src={img} 
                    alt={`Gallery item ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>

            <Button
              to="/products"
              className="mt-6 w-full border-2 border-white bg-[#FFD100] text-[#002147] hover:bg-white"
            >
              View All Products
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
