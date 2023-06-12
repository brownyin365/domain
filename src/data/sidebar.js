import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiBookLine, RiContactsLine, RiHome2Line, RiPenNibLine, RiPencilLine, RiRemoteControl2Line, RiShoppingBag2Line, RiStockLine } from 'react-icons/ri';
import { BsAirplaneEngines } from 'react-icons/bs';


export const links = [
    
    {
      title: 'Explore Domain',
      links: [
        {
          name: 'home',
          icon: <RiHome2Line />,
        },
        {
          name: 'register',
          icon: <BsAirplaneEngines />,
        },
        {
          name: 'domain',
          icon: <IoMdContacts />,
        },
        {
            name: 'Brc20',
            icon: <RiShoppingBag2Line />,
        },
        {
          name: 'inscribe',
          icon: <RiPencilLine />,
        },
        {
            name: 'inscription',
            icon: <RiRemoteControl2Line />,
        },
        {
            name: 'Connect Wallet',
            icon: <RiContactsLine />,
        },
      ],
    },
    {
      title: 'Know More',
      links: [
        {
          name: 'docs',
          icon: <RiBookLine />,
      },
        {
          name: 'editor',
          icon: <FiEdit />,
        },
        {
          name: 'color-picker',
          icon: <BiColorFill />,
        },
      ],
    },
  ];
  