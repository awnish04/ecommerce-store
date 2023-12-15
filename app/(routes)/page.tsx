import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";


export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const bilboard = await getBillboard("cf0decc8-33df-4fc1-b68b-5acfc98ee074");
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={bilboard} />
        

        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList 
        title="Featured Products" 
        items={products}
        />
        </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
