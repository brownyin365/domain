import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home, Domain, Register, Inscription, Docs, Brc20, Notifications, Editor, ColorPicker, Inscribe} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {

    const { activeMenu } = useStateContext();

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                      <TooltipComponent content="Settings" position="Top">
                        <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: 'blue', borderRadius: '50%'}}>
                            <FiSettings />
                        </button>
                      </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full'
                        : 'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2'
                    }>
                        {/* Navbar */}
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                    {/* Route */}
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/register" element={<Register />} />

                            {/* Pages */}
                            <Route path="/home" element={<Home />} />
                            <Route path="/domain" element={<Domain />} />
                            <Route path="/brc20" element={<Brc20 />} />
                            <Route path="/inscrribe" element={<Inscribe />} />
                            <Route path="/inscriptionList" element={<Inscription />} />
                            <Route path="docs" element={<Docs />} />

                            {/* Apps */}
                            <Route path="/color-picker" element={<ColorPicker />} />
                            <Route path="/notifications" element={<Notifications />} />
                            <Route path="/editor" element={<Editor />} />
                        </Routes>
                    </div>
                 </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App