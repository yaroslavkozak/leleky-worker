"use client";
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Menu, Transition, Disclosure, Dialog } from '@headlessui/react';
import Link from 'next/link';
import { blogPosts } from '../content/blogPosts';
import { blogCategories } from '../content/blogCategories';
import { tools as toolsData } from '../content/tools';
import { advancedParentingStages, AdvancedStage } from '../content/advancedParentingStages';
import { ChevronDown, Search, User } from 'lucide-react';

// Update knowledgeBase links to correct pages
const knowledgeBase = [
  { name: 'Теми від А до Я', href: '/knowledge-base/a-to-z', description: 'Всеосяжна енциклопедія для батьків' },
  { name: 'Часті запитання', href: '/knowledge-base/faq', description: 'Часто задавані питання' },
  { name: 'Перевірка симптомів', href: '/knowledge-base/symptoms', description: 'Перевірте симптоми поширених захворювань' },
  { name: 'Посібники для батьків', href: '/knowledge-base/guides', description: 'Поглиблені посібники на різні теми' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [activeStage, setActiveStage] = useState<AdvancedStage | null>(null);


  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-sans" onMouseLeave={() => setIsShowing(false)}>
      {/* Main Header */}
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-2xl text-primary">Лелеки</Link>
        <nav className="hidden md:flex items-center space-x-6 text-text" aria-label="Main navigation">
          <div onMouseEnter={() => setIsShowing(true)}>
            <a href="#" className="flex items-center hover:text-primary transition-colors">
              Етапи батьківства <ChevronDown className="h-5 w-5 flex-none" />
            </a>
          </div>

          {/* Hide Спільнота and Підписка in desktop nav */}
          {/* <Menu as="div" className="relative">
            <Menu.Button className="flex items-center hover:text-primary transition-colors">
              Спільнота <ChevronDown className="h-5 w-5 flex-none" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {community.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={`-m-3 p-3 flex items-start rounded-lg transition ease-in-out duration-150 ${
                              active ? 'bg-neutral' : ''
                            }`}
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-text">{item.name}</p>
                              <p className="mt-1 text-sm text-muted">{item.description}</p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}

          {/* Improve Інструменти menu layout */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center hover:text-primary transition-colors">
              Інструменти <ChevronDown className="h-5 w-5 flex-none" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-7xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {toolsData.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.url}
                            className={`-m-3 p-3 flex items-start rounded-lg transition ease-in-out duration-150 ${active ? 'bg-neutral' : ''}`}
                          >
                            <Image src={item.image} alt={item.name} width={48} height={48} className="w-12 h-12 object-cover rounded-lg mr-4 border border-neutral" />
                            <div className="ml-2">
                              <p className="text-base font-medium text-text">{item.name}</p>
                              <p className="mt-1 text-sm text-muted">{item.description}</p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center hover:text-primary transition-colors">
              Блог <ChevronDown className="h-5 w-5 flex-none" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {blogCategories.map((item) => (
                      <Menu.Item key={item.id}>
                        {({ active }) => (
                          <Link
                            href={`/blog/category/${item.id}`}
                            className={`-m-3 p-3 flex items-start rounded-lg transition ease-in-out duration-150 ${active ? 'bg-neutral' : ''}`}
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-text">{item.name}</p>
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center hover:text-primary transition-colors">
              База знань <ChevronDown className="h-5 w-5 flex-none" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {knowledgeBase.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={`-m-3 p-3 flex items-start rounded-lg transition ease-in-out duration-150 ${
                              active ? 'bg-neutral' : ''
                            }`}
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-text">{item.name}</p>
                              <p className="mt-1 text-sm text-muted">{item.description}</p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Hide Спільнота and Підписка in mobile nav */}
          {/* <Disclosure as="div" className="-mx-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Спільнота
                  <ChevronDown className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`} />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-2 space-y-2">
                  {community.map((item) => (
                    <Disclosure.Button key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure> */}

          {/* <a href="/subscribe" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Підписка</a> */}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-text hover:text-primary"><Search className="w-5 h-5" /></button>
          <button className="text-text hover:text-primary"><User className="w-5 h-5" /></button>
        </div>
        <div className="md:hidden">
          {/* Hamburger Menu Icon */}
          <button className="text-text" onClick={() => setMobileMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        </div>
      </div>

      <Transition
        show={isShowing}
        as="div"
        className="absolute w-full bg-white shadow-lg"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
        onMouseEnter={() => setIsShowing(true)}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-around border-b-2 border-gray-100 pb-6">
            {advancedParentingStages.map((stage) => (
              <div key={stage.name} onMouseEnter={() => setActiveStage(stage)}>
                <a href={stage.href} className="flex flex-col items-center space-y-2 text-base font-semibold text-gray-900 hover:text-primary">
                  <stage.icon className="w-8 h-8" />
                  <span>{stage.name}</span>
                </a>
              </div>
            ))}
          </div>
          
          <Transition
            show={activeStage !== null}
            as="div"
            className="pt-8"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {activeStage && (
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1">
                  <h3 className="text-lg font-bold text-text mb-6">Підкатегорії</h3>
                  <div className="space-y-4">
                    {activeStage.subCategories.map((sub) => (
                      <a key={sub.name} href={sub.href} className="flex items-center space-x-3 text-muted hover:text-primary">
                        <sub.icon className="w-5 h-5" />
                        <span>{sub.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="col-span-1">
                  <h3 className="text-lg font-bold text-text mb-6">Статті по темі</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter(post => post.relatedStages && activeStage && post.relatedStages.includes(activeStage.id))
                      .slice(0, 4)
                      .map(post => {
                        const category = blogCategories.find(c => c.id === post.category);
                        return (
                          <div key={post.id}>
                            <p className="text-sm text-primary">{category ? category.name : post.category}</p>
                            <Link href={post.url} className="font-semibold text-text hover:underline">{post.title}</Link>
                      </div>
                        );
                      })}
                  </div>
                </div>
                <div className="col-span-1">
                  <h3 className="text-lg font-bold text-text mb-6">База знань</h3>
                  <div className="space-y-4">
                    {activeStage.knowledgeBaseLinks.map((link) => (
                      <a key={link.name} href={link.href} className="flex items-center space-x-3 text-muted hover:text-primary">
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="col-span-1">
                  <h3 className="text-lg font-bold text-text mb-6">Корисні інструменти</h3>
                  <div className="space-y-4">
                    {activeStage && toolsData
                      .filter(tool => tool.relatedStages && tool.relatedStages.includes(activeStage.id))
                      .map(tool => (
                        <Link key={tool.id} href={tool.url} className="flex items-center space-x-3 text-muted hover:text-primary">
                        <span>{tool.name}</span>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </Transition>

      {/* Mobile Menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* X icon */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Links */}
                <div className="mt-2">
                  <div className="space-y-1 px-2">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Етапи батьківства
                            <ChevronDown className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {advancedParentingStages.map((item) => (
                              <Disclosure.Button key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Інструменти
                            <ChevronDown className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {toolsData.map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as={Link}
                                href={item.url}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Блог
                            <ChevronDown className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {blogCategories.map((item) => (
                              <Disclosure.Button
                                key={item.id}
                                as={Link}
                                href={`/blog/category/${item.id}`}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            База знань
                            <ChevronDown className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {knowledgeBase.map((item) => (
                              <Disclosure.Button key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>

                    {/* Hide Спільнота and Підписка in mobile nav */}
                    {/* <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Спільнота
                            <ChevronDown className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {community.map((item) => (
                              <Disclosure.Button key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure> */}

                    {/* <a href="/subscribe" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">Підписка</a> */}
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
} 