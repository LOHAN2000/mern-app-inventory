import React, { useEffect, useState } from 'react'

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkmode, setIsDarkMode] = useState(false)
  


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const toggleTheme = async () => {
    setIsDarkMode((val) => {
      const newTheme = !val
      localStorage.setItem('theme', newTheme ? 'dark' : 'light') 
      return newTheme
    })
  }

  useEffect(() => {
    const saveState = localStorage.getItem('theme')
    if (saveState) {
      setIsDarkMode(saveState === 'dark')
    }
  }, [])

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark');
    }
  },[isDarkmode])


  

  return (  
    <nav className='p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div onClick={() => {console.log('hola')}} className='flex gap-x-1 items-center cursor-pointer'>
          <h1 className='uppercase font-bold text-[#40a8d8] dark:text-[#80A2A6] text-xl'>Product Store</h1>
          <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={isDarkmode ? '#80A2A6' : '#40a8d8'} viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M5.535 7.677c.313-.98.687-2.023.926-2.677H17.46c.253.63.646 1.64.977 2.61.166.487.312.953.416 1.347.11.42.148.675.148.779 0 .18-.032.355-.09.515-.06.161-.144.3-.243.412-.1.111-.21.192-.324.245a.809.809 0 0 1-.686 0 1.004 1.004 0 0 1-.324-.245c-.1-.112-.183-.25-.242-.412a1.473 1.473 0 0 1-.091-.515 1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.401 1.401 0 0 1 13 9.736a1 1 0 1 0-2 0 1.4 1.4 0 0 1-.333.927.896.896 0 0 1-.667.323.896.896 0 0 1-.667-.323A1.4 1.4 0 0 1 9 9.74v-.008a1 1 0 0 0-2 .003v.008a1.504 1.504 0 0 1-.18.712 1.22 1.22 0 0 1-.146.209l-.007.007a1.01 1.01 0 0 1-.325.248.82.82 0 0 1-.316.08.973.973 0 0 1-.563-.256 1.224 1.224 0 0 1-.102-.103A1.518 1.518 0 0 1 5 9.724v-.006a2.543 2.543 0 0 1 .029-.207c.024-.132.06-.296.11-.49.098-.385.237-.85.395-1.344ZM4 12.112a3.521 3.521 0 0 1-1-2.376c0-.349.098-.8.202-1.208.112-.441.264-.95.428-1.46.327-1.024.715-2.104.958-2.767A1.985 1.985 0 0 1 6.456 3h11.01c.803 0 1.539.481 1.844 1.243.258.641.67 1.697 1.019 2.72a22.3 22.3 0 0 1 .457 1.487c.114.433.214.903.214 1.286 0 .412-.072.821-.214 1.207A3.288 3.288 0 0 1 20 12.16V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2v-6.888ZM13 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2Z" clipRule="evenodd"/>
          </svg>
        </div>
        <div className={`md:static absolute  left-0 p-4 w-full md:w-auto md:p-0 transition-all duration-300 ease-in md:opacity-100  ${isMenuOpen ? 'top-[50px] opacity-100' : 'top-[-300px] opacity-0'}`}>
          <ul className='flex gap-x-3 md:flex-row items-center md:gap-3'>
            <li>
              <a className='px-2 py-1 border rounded-md dark:border-[#80A2A6] dark:hover:bg-[#F2F2F2] dark:hover:border-[#F2F2F2] border-[#40a8d8]  hover:bg-[#d5f2ff] hover:border-[#9bdfff] transition duration-300 cursor-pointer'><i className="fa-regular fa-square-plus fa-lg" style={{color: `${isDarkmode ? '#80A2A6' : '#40a8d8'}`}}></i></a>
            </li>  
            <li>
              <a onClick={toggleTheme} className='px-2 py-1 border rounded-md dark:border-[#80A2A6] dark:hover:bg-[#F2F2F2] dark:hover:border-[#F2F2F2] border-[#40a8d8]  hover:bg-[#d5f2ff] hover:border-[#9bdfff] transition duration-300 cursor-pointer'><i className={`fa-solid ${isDarkmode ? 'fa-moon' : 'fa-sun'} fa-lg`} style={{color: `${isDarkmode ? '#80A2A6' : '#40a8d8'}`}}></i></a>
            </li>
          </ul>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white">
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} fa-lg`}></i>
        </button>
      </div>
    </nav>
  )
}
