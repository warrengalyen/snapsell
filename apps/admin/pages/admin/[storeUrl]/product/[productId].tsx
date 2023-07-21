import AdminLayout from '../../../../layouts/AdminLayout';
import Button from '../../../../components/Button';
import Heading from '../../../../components/Heading';
import Card from '../../../../components/Card';
import InputWithLabel from '../../../../components/InputWithLabel';
import Textarea from '../../../../components/Textarea';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@tanstack/react-query';
import FileUpload from '../../../../components/FileUpload';
import LoadingSpinner from '../../../../components/Loading';
import getServerSideProps from '../../../../utils/authorization';
export { getServerSideProps };

type ImageType = {
  id: string;
  alt: string;
  src: string;
};

type Product = {
  product_name: string;
  description: string;
  product_price: number;
  product_images?: ImageType[];
  inventory_qty: number;
  SKU: string;
  is_active: boolean;
};

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const [imageUploaded, setImageUploaded] = useState(false);
  const [productInputs, setProductsInputs] = useState({
    item: '',
    description: '',
    price: 0,
    sku: '',
    inventory: 0,
    images: [] as ImageType[],
    isActive: true,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const resp = await fetch(`/api/product/${productId}`);
      const product: Product = await resp.json();

      return product;
    },
    enabled: Boolean(productId),
  });

  useEffect(() => {
    if (data) {
      setProductsInputs({
        item: data.product_name,
        description: data.description,
        price: data.product_price,
        sku: data.SKU,
        inventory: data.inventory_qty,
        images: data.product_images ?? [],
        isActive: data.is_active,
      });
    }
  }, [data]);

  const { mutate } = useMutation((body: Product) =>
    fetch(`/api/product/${productId}`, {
      method: 'PUT',
      headers: { ['Content-type']: 'application/json' },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
  );

  function handleImageUpload(url: string) {
    setImageUploaded(true);
    setProductsInputs((prevProductInputs) => ({
      ...prevProductInputs,
      images: [
        ...prevProductInputs.images,
        { src: url, alt: 'product', id: `${prevProductInputs.images.length}` },
      ],
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const body = {
        product_name: productInputs.item,
        description: productInputs.description,
        product_price: Number(productInputs.price),
        SKU: productInputs.sku,
        inventory_qty: Number(productInputs.inventory),
        product_images: productInputs.images,
        is_active: productInputs.isActive,
      };
      mutate(body);
    } catch (error) {
      console.log(error);
    }
    router.back();
  }

  function handleIsActive() {
    setProductsInputs((prevProductInputs) => ({
      ...prevProductInputs,
      isActive: !prevProductInputs.isActive,
    }));
  }

  if (isLoading)
    return (
      <div className="flex justify-center mt-36">
        <LoadingSpinner />
      </div>
    );

  return (
    <>
      <div className="flex w-[calc(90vw-70px)] h-[calc(96vh-48px)] flex-col ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="text-red-500">
            <Heading
              title={productInputs.isActive ? '' : 'ITEM DEACTIVATED'}
              type="h2"
            ></Heading>
            <div className='text-red-500' >
              <Heading title={productInputs.isActive ? "" : "ITEM DEACTIVATED"} type="h1"></Heading>
            </div>
            <div className="flex justify-end">
              <Button
                size="sm"
                appearance="snapYellow"
                value="Active/InActive"
                onClick={handleIsActive}
              >
                {productInputs.isActive ? 'Deactivate Item' : 'Activate Item'}
              </Button>
            </div>
          </div>

            <div className="flex flex-row w-full">
              <InputWithLabel
                label="Item"
                id="item"
                type="text"
                showLabel={true}
                state={productInputs}
                setState={setProductsInputs}
                direction="column"
                style={{ width: '100%' }}
              />
            </div>
          <div className='h-40' >
            <Textarea
              label="Description"
              id="description"
              state={productInputs}
              setState={setProductsInputs}
              direction="column"
            />
          </div>
            <div className="flex flex-col justify-between h-36">
              <div className="flex flex-row h-20 gap-3">
                {productInputs.images.map((img) => (
                  <div key={img.id} className="w-20 rounded">
                    <img key={img.id} src={img.src} alt={img.alt} className="object-contain" />
                  </div>
                ))}
              </div>
              <label className="flex flex-row justify-end " htmlFor="upload">
                <FileUpload id="fileUpload" onChangeEvent={handleImageUpload} />
              </label>
            </div>

            <div className="flex flex-row gap-3">
              <InputWithLabel
                label="Price ($)"
                id="price"
                type="number"
                step="0.01"
                showLabel={true}
                state={productInputs}
                setState={setProductsInputs}
                direction="column"
              ></InputWithLabel>

              <InputWithLabel
                label="SKU"
                id="sku"
                type="text"
                showLabel={true}
                state={productInputs}
                setState={setProductsInputs}
                direction="column"
              ></InputWithLabel>

              <InputWithLabel
                label="Inventory"
                id="inventory"
                type="number"
                showLabel={true}
                state={productInputs}
                setState={setProductsInputs}
                direction="column"
              ></InputWithLabel>
            </div>

          <div className=" flex justify-end ">
            <Button
              size="default"
              appearance="snapYellow"
              onClick={() => {
                router.back();
              }}
            >
              Cancel
            </Button>
            <Button size="default" appearance="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default function () {
  return (
    <AdminLayout title="Product details">
      <ProductDetail />
    </AdminLayout>
  );
}
