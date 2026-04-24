import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js'


function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-[#001733] bg-[#002147] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 text-white">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-white">
              Product not found
            </h1>

            <Button
              to="/products"
              className="mt-6 border-2 border-[#D4AF37] bg-[#FFD100] text-[#002147]"
            >
              Back to Products
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">

      <section className="border-y-2 border-[#001733] bg-[#002147] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 text-white">
        <div className="max-w-3xl">

          <div className="mb-4">
            <Button
              to="/products"
              className="border-2 border-[#D4AF37] bg-[#FFD100] text-[#002147]"
            >
              Back to Products
            </Button>
          </div>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-blue-100">
            <span className="font-bold text-[#FFD100]">
              {product.price}
            </span>
            <span>{product.stock}</span>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#001733] bg-[#002147] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 text-white">
        <div className="mx-auto max-w-3xl">

          <div className="mb-8 flex aspect-4/3 items-center justify-center rounded-[1.25rem] border-[3px] border-[#D4AF37] bg-[#FFD100]/10 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            {product.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 text-blue-100 whitespace-pre-wrap"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-[#D4AF37] pt-6">
            <Button
              variant="primary"
              className="mr-3 border-2 border-[#D4AF37] bg-[#FFD100] text-[#002147]"
            >
              Add to Cart
            </Button>

            <Button
              to="/products"
              className="border-2 border-[#D4AF37] bg-white text-[#002147]"
            >
              Back to Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
