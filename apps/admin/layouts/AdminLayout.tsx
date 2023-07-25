import Head from 'next/head';
import { useState, PropsWithChildren, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import Button from '../components/Button';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import SearchInputs from '../components/SearchInputs';

type Store = {
  store_id: string;
  store_name: string;
  store_url: string;
};

export default function AdminLayout({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  const router = useRouter();
  const logoSrc = '/snapsell-white-square.png';
  const { storeUrl } = router.query;

  const { data: stores } = useQuery({
    queryKey: ['stores'],
    queryFn: () =>
      fetch(`/api/stores/${sessionStorage.getItem('userId')}`).then((res) =>
        res.json()
      ),
    enabled: !!router.isReady,
  });

  const [currentStoreUrl, setCurrentStoreUrl] = useState(storeUrl);
  const helperGetUrl = (string: string) => {
    return string.split('/')[string.split('/').length - 1];
  };

  const initialNavigation = [
    {
      name: 'Dashboard',
      href: `/admin/${currentStoreUrl}/dashboard`,
      current: true,
    },
    {
      name: 'Orders',
      href: `/admin/${currentStoreUrl}/orders`,
      current: false,
    },
    {
      name: 'Products',
      href: `/admin/${currentStoreUrl}/products`,
      current: false,
    },
    {
      name: 'Store Editor',
      href: `/admin/${currentStoreUrl}/editor`,
      current: false,
    },
    {
      name: 'Visit Store',
      href: `${process.env.NEXT_PUBLIC_STOREFRONT_URL}/${currentStoreUrl}`,
      current: false,
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="SnapSell" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <div className="mx-auto flex  justify-between items-center w-full border-slate-200 border-b bg-slate-900">
        <Bars3Icon
          className="h-6 ml-4 md:hidden cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
        <div className="flex justify-end md:justify-between items-center w-full gap-2 bg-slate-900 py-4">
          <Link href={`/admin/${storeUrl}/dashboard`}>
            <div className="flex gap-2 ml-4 text-2xl place-content-center">
              <Image src={logoSrc} alt="company logo" width={40} height={40} />
              <div className="flex justify-center items-center text-white font-semibold tracking-wide">
                SnapSell
              </div>
            </div>
          </Link>
          <div className="flex items-center ml-auto">
            <SearchInputs />
          </div>
          <select
            id="stores"
            onChange={(e) => {
              setCurrentStoreUrl(e.target.value);
              switch (helperGetUrl(router.pathname)) {
                case 'dashboard':
                  router
                    .push(`/admin/${e.target.value}/dashboard`)
                    .then(() => router.reload());
                  break;
                case 'orders':
                case '[orderId]':
                  router
                    .push(`/admin/${e.target.value}/orders`)
                    .then(() => router.reload());
                  break;
                case 'products':
                case '[productId]':
                  router
                    .push(`/admin/${e.target.value}/products`)
                    .then(() => router.reload());
                  break;
                case 'editor':
                  router
                    .push(`/admin/${e.target.value}/editor`)
                    .then(() => router.reload());
                  break;
                default:
                  break;
              }
            }}
            value={currentStoreUrl}
            className="mr-4 w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
          >
            {stores?.map((store: Store) => {
              return (
                <option value={store.store_url} key={store.store_id}>
                  {store.store_name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex h-[calc(100vh-76px)] flex-col md:flex-row">
        <nav className="hidden md:flex flex-col justify-between border-slate-200 border-r w-72 bg-gray-100">
          <div className="flex flex-col justify-between px-3 pt-3">
            {initialNavigation.map((page, index) => {
              return (
                <Link href={page.href} key={index}>
                  <div className="px-3 pt-3 text-lg">{page.name}</div>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col items-center border-t w-full px-3 py-3 ">
            <Button
              size="sm"
              appearance="link"
              type="button"
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-base  text-red-600"
            >
              Log Out
            </Button>
          </div>
        </nav>
        <nav
          className={
            isNavOpen
              ? 'w-full flex-col text-center border-slate-200 border-r text-xs md:hidden'
              : 'hidden'
          }
        >
          <div className="flex flex-col justify-between px-3 pt-3">
            {initialNavigation.map((page, index) => {
              return (
                <Link href={page.href} key={index}>
                  <div
                    className="px-3 py-3 text-base"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    {page.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col items-center border-t w-full px-3 py-3 text-base">
            <div
              className="flex flex-col items-center border-y w-full px-3 py-3 text-base text-red-600"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <Button
                size="sm"
                appearance="link"
                type="button"
                onClick={() => {
                  signOut({ callbackUrl: '/' });
                  sessionStorage.clear();
                }}
                className="text-base  text-red-600"
              >
                Log Out
              </Button>
            </div>
          </div>
        </nav>
        <div className="p-4 w-full overflow-y-scroll">{children}</div>
      </div>
    </>
  );
}
