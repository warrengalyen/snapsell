import AdminLayout from '../../../layouts/AdminLayout';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import Heading from '../../../components/Heading';
import InputWithLabel from '../../../components/InputWithLabel';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery, UseQueryResult, useMutation } from '@tanstack/react-query';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '../../../components/Modal';
import getServerSideProps from '../../../utils/authorization';
import LoadingSpinner from '../../../components/LoadingSpinner';
export { getServerSideProps };

type productValues = {
  product_name: string;
  store_id?: Record<string, any>;
  product_name_slug: string;
  product_price: number;
  SKU: string;
};

function Products() {
  const router = useRouter();
  const storeUrl = router.query.storeUrl;
  const [open, setOpen] = useState(false);
  const [formInputs, setFormInputs] = useState({
    SKU: '',
    product_name: '',
    product_price: '',
    store_id: '',
  });

  const { data: storeId }: UseQueryResult<Record<string, any>> = useQuery({
    queryKey: ['storeId'],
    queryFn: () => fetch(`/api/${storeUrl}`).then((res) => res.json()),
    enabled: !!router.isReady,
  });

  const slugify = (str: string) => {
    const baseSlug = str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return baseSlug;
  };

  const createProduct = useMutation({
    mutationFn: async (values: productValues) => {
      const response = await fetch('/api/product/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      return data.product_id;
    },
  });

  const handleSave = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newProduct = {
      ...formInputs,
      product_price: Number(formInputs.product_price),
      product_name_slug: slugify(formInputs.product_name),
      store_id: storeId,
    };
    createProduct.mutate(newProduct, {
      onError: (error) => {
        toast.error('Failed to add product.');
      },
      onSuccess: (res) => {
        router.push(`/admin/${storeUrl}/product/${res}`);
      },
    });
  };

  const { data: products, isFetching }: UseQueryResult<Record<string, any>[]> =
    useQuery({
      queryKey: ['products'],
      queryFn: () =>
        fetch(`/api/products/${storeUrl}`).then((res) => res.json()),
      enabled: !!router.isReady,
      initialData: [],
    });

  const [formProducts, setFormProducts] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    const formattedProducts = products.map((product) => {
      return {
        ...product,
        product_price: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(Number(product.product_price)),
      };
    });
    setFormProducts(formattedProducts);
  }, [products]);

  return (
    <>
      <div className="flex flex-row justify-between w-full md:w-5/6 lg:w-full mb-8">
        <Heading title={'Products'} type="h1" />
        <div className="flex justify-end">
          <Button
            size="default"
            appearance="snapYellow"
            onClick={() => setOpen(true)}
          >
            {' '}
            Add Product
          </Button>{' '}
        </div>
      </div>
      {isFetching && (
        <div className="flex justify-center mt-36">
          <LoadingSpinner />
        </div>
      )}
      {!isFetching && (
        <Table
          link={true}
          linkProperty="product_id"
          prependLink={`/admin/${router.query.storeUrl}/product`}
          tableColumnNames={[
            { id: 'product_name', name: 'Product Name' },
            { id: 'SKU', name: 'SKU' },
            { id: 'inventory_qty', name: 'Inventory' },
            { id: 'product_price', name: 'Price' },
          ]}
          tableRows={formProducts}
        />
      )}
      {/*Modal area*/}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>
              Please add your product information.
            </DialogDescription>
          </DialogHeader>
          <InputWithLabel
            label="Product name"
            id="product_name"
            type="text"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <InputWithLabel
            label="SKU"
            id="SKU"
            type="text"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <InputWithLabel
            label="Product price($)"
            id="product_price"
            type="number"
            showLabel={true}
            state={formInputs}
            setState={setFormInputs}
            direction="column"
            required
          />
          <form
            onSubmit={(event) => {
              handleSave(event);
              setOpen(false);
              event.preventDefault();
            }}
          >
            <DialogFooter>
              <Button size="lg" appearance="primary" type="submit">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function () {
  return (
    <AdminLayout title="Products">
      <Products />
    </AdminLayout>
  );
}
