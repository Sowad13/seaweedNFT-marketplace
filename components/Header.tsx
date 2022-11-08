import React from 'react';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from 'next/link';
import { BellIcon, ShoppingCartIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';

type Props = {}

function Header({ }: Props) {

  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className='max-w-6xl mx-auto p-2'>
      <nav className='flex justify-between'>
        <div className='flex items-center space-x-4 text-base'>
          {address ? (
            <button onClick={disconnect} className="connectWalletBtn">Hi, {address.slice(0, 4) + "..." + address.slice(-4)} </button>
          ) : (
            <button onClick={connectWithMetamask} className='connectWalletBtn'>Connect your wallet</button>
          )}
          <p className="headerLink">Daily Deals</p>
          <p className="headerLink">Help & Contact</p>
        </div>

        <div className='flex items-center space-x-4 text-base'>
          <p className="headerLink">Ship to</p>
          <p className="headerLink">Sell</p>
          <p className="headerLink">Watchlist</p>

          <Link href={"/addItem"} className="flex items-center hover:link">
            Add to inventory
            <ChevronDownIcon className='h-4'></ChevronDownIcon>
          </Link>

          <BellIcon className='h-6 v-6 hover:link' />
          <ShoppingCartIcon className='h-6 v-6 hover:link' />

        </div>

      </nav>

      <hr className='mt-2' />

      <section className='flex items-center space-x-2 py-5'>
        <div className='h-12 w-12 sm:w-28 md:w-30 cursor-pointer flex-shrink-0'>
          <Link href={"/"}>
            <Image
              className='w-full h-full object-contain'
              alt="Thirdweb_Logo"
              src="/logo.png"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <button className='flex items-center space-x-2 w-20'>
          <p className='text-gray-600 text-sm'>Shop by category</p>
          <ChevronDownIcon className='h-4 flex-shrink-0' />
        </button>

        <div className='flex items-center space-x-2 px-2 md:px-5 py-2 border-gray-500 border flex-1'>
          <MagnifyingGlassIcon className='w-5 text-gray-400' />
          <input className='flex-1 outline-none' placeholder='Search for anything' type="text" />
        </div>

        <button className='hidden sm:inline-block bg-blue-600 text-white px-5 md:px-10 py-2 border-2 border-blue-600'>Search</button>

        <Link href="/create">
          <button className='border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white cursor-pointer'>List Item</button>
        </Link>
      </section>

      <hr />

      <section className='flex py-3 space-x-8 text-base whitespace-nowrap justify-center px-6'>
        <p className='link'>Home</p>
        <p className='link'>Gaming</p>
        <p className='link'>Explore</p>
        <p className='link hidden md:inline'>Stats</p>
        <p className='link hidden md:inline'>Resources</p>
        <p className='link hidden md:inline'>Collectibles</p>
      </section>
    </div>
  )
}

export default Header