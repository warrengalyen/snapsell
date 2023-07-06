import AdminLayout from '../../../../layouts/AdminLayout';
import Button from '../../../../components/Button';
import Heading from '../../../../components/Heading';
import Card from '../../../../components/Card';
import InputWithLabel from '../../../../components/InputWithLabel';
import Textarea from '../../../../components/Textarea';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Image } from 'next/image';
import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';

interface Product {
  product_name: string;
  description: string;
  product_price: number;
  product_images: string[];
  inventory_qty: number;
  SKU: string;
}

///////////  Testing Photo/File upload.
// TODO: If Cloudinary widget not used, move to its own component  //////
function Upload() {
  const [imgSource, setImgSource] = useState('');
  function handleCapture(target) {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setImgSource(newUrl);
      }
    }
  }

  return (
    <div className=''>
      <div className='flex h-20 gap-4'>
        {/* <label className='label' htmlFor='icon-button-file'>

        </label> */}
        {/* https://engineering.99x.io/how-to-access-the-camera-of-a-mobile-device-using-react-progressive-web-app-pwa-9d77168e5f2d */}
        <img className='flex w-20 rounded' src={imgSource} alt={''}></img>
        <input
          accept='image/*'
          id='icon-button-file'
          type='file'
          capture='environment'
          onChange={(event) => handleCapture(event.target)}
        />

      </div>
    </div>
  );
}

////////////////

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const [productInputs, setProductsInputs] = useState({
    item: '',
    description: '',
    price: '0',
    sku: '',
    inventory: '0',
    images: [] as string[],
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const resp = await fetch(`/api/product/${productId}`);
      const product: Product = await resp.json();

      setProductsInputs({
        item: product.product_name,
        description: product.description,
        price: `${product.product_price}`,
        sku: product.SKU,
        inventory: `${product.inventory_qty}`,
        images: product.product_images,
      });

      return product;
    },
    enabled: Boolean(productId),
  });

  const { mutate } = useMutation((body: Product) =>
    fetch(`/api/product/${productId}`, {
      method: 'PUT',
      headers: { ['Content-type']: 'application/json' },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
  );

  const [flag, setFlag] = useState(false);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    try {
      const body = {
        product_name: productInputs.item,
        description: productInputs.description,
        product_price: Number(productInputs.price),
        SKU: productInputs.sku,
        inventory_qty: Number(productInputs.inventory),
        product_images: productInputs.images,
      };
      mutate(body);
    } catch (error) {
      console.log(error);
    }
  }

  function handleImageSubmit() {}

  // TODO: will be for Active/Inactive
  function flagHandler(event: any) {

  }

  // in progress
  // function handleCapture(target) {
  //   if (target.files) {
  //     if (target.files.length !== 0) {
  //       const file = target.files[0];
  //       const newUrl = URL.createObjectURL(file);
  //       setImgSource(newUrl);
  //     }
  //   }
  // }

  return (
    <>
      <div className="flex w-[calc(90vw-70px)] h-[calc(96vh-48px)] flex-col ">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between h-6">
            <Heading title={productInputs.item} type="h2"></Heading>
            <div className="flex justify-end">
              <Button
                size="sm"
                appearance="default"
                type="submit"
                value="Active/InActive"
              >
                Active/Inactive
              </Button>
            </div>
          </div>

          <Card>
            <div className="flex flex-row w-full">
              <InputWithLabel
                label="item"
                id="item"
                type="text"
                showLabel={true}
                state={productInputs}
                setState={setProductsInputs}
                direction="column"
                style={{ width: '100%' }}
              />
            </div>
          </Card>

          <Card>
            <Textarea
              label="description"
              id="description"
              state={productInputs}
              setState={setProductsInputs}
              direction="row"
            />
          </Card>

          <Card>
            <div className="flex flex-row justify-between h-36">
              <div className="flex flex-row h-20 gap-3">
                {productInputs.images.map((src) => (
                  <img className='flex w-20 rounded' key={src} src={src} /> // use nextjs image
                ))}
              </div>
              <label className="flex flex-row justify-end " htmlFor="upload">
                {/* <input
                  type="file"
                  id="upload"
                  name="upload"
                  onChange={flagHandler}
                /> */}
                {/* <FileUpload /> */}
              </label>
            </div>
          </Card>

          <Card>
            <div className="flex flex-row gap-3">
              <InputWithLabel
                label="price"
                id="price"
                type="text"
                showLabel={true}
                state={productInputs}
                setState={setProductsInputs}
                direction="column"
              ></InputWithLabel>

              <InputWithLabel
                label="sku"
                id="sku"
                type="text"
                showLabel={true}
                state={productInputs}
                setState={setProductsInputs}
                direction="column"
              ></InputWithLabel>

              <InputWithLabel
                label="inventory"
                id="inventory"
                type="text"
                showLabel={true}
                state={productInputs}
                setState={setProductsInputs}
                direction="column"
              ></InputWithLabel>
            </div>
          </Card>

          <div className=" flex justify-end ">
            <Button size="default" appearance="default">
              <Link href="/admin/d/products">Cancel</Link>
            </Button>
            <Button size="default" appearance="default" type="submit">
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
