import React, { useEffect } from 'react';
import { AiFillNotification, AiOutlineMenu } from 'react-icons/ai';
import { FiAirplay, FiGrid, FiMonitor, FiShoppingCart, FiTwitter } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { cart, chat, Notification, UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'> 
      <button type="button" onClick={customFunc} style={{color}}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span style={{ background: dotColor }}
          className="absolute inline-flex 
          rounded-full h-2 w-2 right-2 top-2"
        />
          {icon}
      </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

    // Using the effect to resize sidebar on mobile view
    useEffect(() => {
      const handleResize = () => setScreenSize
      (window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener
      ('resize', handleResize);
    }, []);

    // Using if and else statement to track screensize
    useEffect(() => {
      if(screenSize <= 900) {
        setActiveMenu(false);
      }else{
        setActiveMenu(true);
      }
    }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton title="Menu" customFunc={() => 
        setActiveMenu((prevActiveMenu) => !prevActiveMenu 
          )} 
          color="blue" icon={<AiOutlineMenu/>}/>

        <div className="flex">
{/* <NavButton title="Home" 
          dotColor="#03C9D7"
          customFunc={() => 
          handleClick('domain')} 
          color="blue" 
          icon={<FiMonitor/>}/> */}

          
<NavButton title="Token List"
          dotColor="#03C9D7"
          customFunc={() => 
          handleClick('cart')} 
          color="blue" 
          icon={<FiGrid/>}/>

          <TooltipComponent content="wallet"
          position="BottomCenter">
            <div className="flex items-center 
            gap-2 cursor-pointer p-1 hover:bg-light-gray 
            rounded-lg"
              onClick={() => handleClick('connectWallet')}>
                <span className="text-2xl font-bold text-gray-400">Connect Wallet</span>
            </div>
          </TooltipComponent>

<NavButton title="Twitter" 
          dotColor="#03C9D7"
          customFunc={() => 
          handleClick('twitter')} 
          color="blue" 
          icon={<FiTwitter/>}/>

<NavButton title="Notification" 
          dotColor="#03C9D7"
          customFunc={() => 
          handleClick('Notifications')} 
          color="blue" 
          icon={<RiNotification3Fill/>}/>

          {isClicked.Notification && <Notification/>}
          </div>
    </div>
  )
}

export default Navbar