import AdminLayout from '../../../../layouts/AdminLayout';
import Heading from '../../../../components/Heading';
import Button from '../../../../components/Button';
import Card from '../../../../components/Card';
import Table from '../../../../components/Table';
import Address from '../../../../components/Address';
import Link from 'next/link';

const tableColumnNames = [
  { id: 'Product_name', name: 'Product name' },
  { id: 'SKU', name: 'SKU' },
  { id: 'Price', name: 'Price' },
  { id: 'Quantity', name: 'Quantity' },
  { id: 'Total', name: 'Total' },
];

const tableRows = [
  {
    id: '1',
    Product_name: 'Black T-shirt',
    SKU: '12345',
    Price: '30',
    Quantity: '3',
    Total: '90',
  },
  {
    id: '2',
    Product_name: 'White Dress',
    SKU: '6789',
    Price: '75',
    Quantity: '1',
    Total: '75',
  },
  {
    id: '3',
    Product_name: 'Vans old school',
    SKU: '42490',
    Price: '85',
    Quantity: '2',
    Total: '170',
  },
  {
    id: '5',
    Product_name: 'white shirt',
    SKU: '124155521',
    Price: '40',
    Quantity: '1',
    Total: '40',
  },
  {
    id: '4',
    Product_name: 'cross bag',
    SKU: '90152',
    Price: '30',
    Quantity: '1',
    Total: '30',
  },
];

function OrderDetail() {
  return (
    <>
      <p>Order detail</p>
    </>
  );
}

export default function () {
  return (
    <AdminLayout title="Order Details">
      <Heading title="Order #738272" type="h1" />
      <div className="flex justify-end">
        <Link href="/admin/storeurl/order/">
          <Button size="default" appearance="primary">
            Back
          </Button>
        </Link>
      </div>
      <div className="flex">
        <div className="w-full">
          <Card>
            <Heading title="Items Ordered(3)" type="h2" />
            <Table
              tableColumnNames={tableColumnNames}
              tableRows={tableRows}
            ></Table>
          </Card>
          <Card>
            <div className="flex justify-between">
              <Heading title="Total Order" type="h3" />
              <div className="mr-28">
                <Heading title="$405" type="h3" />
              </div>
            </div>
          </Card>
        </div>
        <div className="ml-20">
          <Card>
            <Heading title="Customer" type="h4" />
            <p className="mb-4">example@example.com</p>
            <Heading title="Ship to" type="h4" />
            <Address
              firstName="Henry"
              lastName="Kim"
              firstLine="2304 Peppermint Drive"
              secondLine="Unit B"
              city="Modesto"
              state="CA"
              state="Stanislaus"
              country="USA"
              postcode="95355"
            />
            <Heading title="Bill to" type="h4" />
            <Address
              firstName="John"
              lastName="Smith"
              firstLine="13456 Stanford Avenue"
              secondLine=""
              city="Los Angeles"
              state="CA"
              state="Los Angeles"
              country="USA"
              postcode="90059"
            />
          </Card>
        </div>
      </div>
      <p></p>
    </AdminLayout>
  );
}
