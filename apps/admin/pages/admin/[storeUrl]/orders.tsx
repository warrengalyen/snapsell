import AdminLayout from '../../../layouts/AdminLayout';
import Table from '../../../components/Table';
//import findOrders from '../../api/orders';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Order } from 'database';

// type Order = {
//   order_id: string,
//   order_number: string;
//   customer_name: string;
//   total_items: string;
//   order_total: string;
//   date_placed: string;
// };

function Orders() {
  const router = useRouter();

  const {
    data: orders,
    isLoading,
    isError,
  }: UseQueryResult<Record<string, string>> = useQuery({
    queryKey: ['order'],
    queryFn: () => fetch('/api/orders').then((res) => res.json()),
    enabled: !!router.isReady,
    initialData: {
      id: '',
      order_id: '', //order_id
      friendly_order_number: 'xxxxxxx', //friendly_order_number
      customer_first_name: '', //customer_first_name, customer_last_name
      order_details: '', //order_details. quantity
      total_order_cost: '', //total_order_cost
      created_at: '', //created_at
    },
  });

  const [formOrders, setFormOrders] = useState({});

  useEffect(() => {
    console.log('orders: ' + JSON.stringify(orders));
    setFormOrders(orders);
  }, [orders]);

  return (
    <>
      <p>Orders</p>
    </>
  );
}

export default function () {
  return (
    <AdminLayout title="Orders">
      <Orders />
    </AdminLayout>
  );
}
