import Button from '../../components/Button';
import banner from '../../assets/img/nice.png';
import merch from '../../assets/img/merch.jpg';
import mercha from '../../assets/img/mercha.jpg';
import apparel from '../../assets/img/apparel.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/45" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
                            National University Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
                            National University Manila Bulldogs Exhange
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
                            Browse your campus merchandise, place orders, and pick up at your convenience. BulldogEx makes campus shopping easy and efficient for every student.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-[#001733] bg-[#002147] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 text-white">
  <div className="mb-6">
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
      Store Overview
    </p>
    <h2 className="mt-2 text-2xl font-semibold text-white">
      Quick shopping blocks
    </h2>
  </div>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

    <div className="rounded-3xl border-2 border-[#002147] bg-[#FFD100] p-5 hover:scale-105 transition">
      <p className="text-3xl font-bold text-[#002147]">08</p>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#002147]/80">
        Products
      </p>
    </div>

    <div className="rounded-3xl border-2 border-[#002147] bg-[#FFD100] p-5 hover:scale-105 transition">
      <p className="text-3xl font-bold text-[#002147]">06</p>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#002147]/80">
        Categories
      </p>
    </div>

    <div className="rounded-3xl border-2 border-[#002147] bg-[#FFD100] p-5 hover:scale-105 transition">
      <p className="text-3xl font-bold text-[#002147]">24</p>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#002147]/80">
        Orders
      </p>
    </div>

    <div className="rounded-3xl border-2 border-[#002147] bg-[#FFD100] p-5 hover:scale-105 transition">
      <p className="text-3xl font-bold text-[#002147]">03</p>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#002147]/80">
        Pickup Slots
      </p>
    </div>

  </div>
</section>

           <section className="border-y-2 border-[#001733] bg-[#002147] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 text-white">
  <div className="mb-6">
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
      Shop Sections
    </p>
    <h2 className="mt-2 text-2xl font-semibold text-white">
      Simple store cards
    </h2>
  </div>

  <div className="grid gap-4 md:grid-cols-3">

    {/* Card 1 */}
    <article className="rounded-3xl border-2 border-[#002147] bg-[#FFD100] p-4 shadow-lg shadow-black/20 hover:scale-105 transition">
      <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem]">
        <img 
          src={merch} 
          alt="Daily Essentials"
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#002147]">
        Daily Essentials
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#002147]/80">
        Get our official Bags, Tumblers, Id Lace, Stickers Merch!
      </p>
      <Button to="/products" className="mt-4" variant="primary">
        View Products
      </Button>
    </article>

    {/* Card 2 */}
    <article className="rounded-3xl border-2 border-[#002147] bg-[#FFD100] p-4 shadow-lg shadow-black/20 hover:scale-105 transition">
      <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem]">
        <img 
          src={mercha} 
          alt="Study Supplies"
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#002147]">
        Study Supplies
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#002147]/80">
        Notes, desk tools, and study kits for class and review weeks.
      </p>
      <Button to="/products" className="mt-4" variant="primary">
        Shop Supplies
      </Button>
    </article>

    {/* Card 3 */}
    <article className="rounded-3xl border-2 border-[#002147] bg-[#FFD100] p-4 shadow-lg shadow-black/20 hover:scale-105 transition">
      <div className="aspect-[4/3] overflow-hidden rounded-[1.25rem]">
        <img 
          src={apparel} 
          alt="Campus Apparel"
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#002147]">
        Campus Apparel
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#002147]/80">
        Comfortable pieces for class days, commute days, and weekends.
      </p>
      <Button to="/products" className="mt-4" variant="primary">
        View Apparel
      </Button>
    </article>

  </div>
</section>
        </div>
    );
};

export default HomePage;
