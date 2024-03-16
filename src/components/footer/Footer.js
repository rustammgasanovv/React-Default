import React, { Component } from 'react'
import Logo from '../../images/celtLogo.png'

export class Footer2 extends Component {
  render() {
    return (
      <footer className="mt-[52px] shadow-[0px_0px_16px_0px_#00000030] py-4">
      <div className="container mx-auto flex justify-between items-center pb-[25px]  gap-[12px] border-b border-black max-[950px]:flex-col">
        <img src={Logo} alt="Logo" className=" w-[115px]" />
        <div className="text-sm mt-4 md:mt-[20px] mb-[30px]">
          <ul className='flex gap-[20px] items-center'>
            <li>
              <a className="md:inline-block text-[16px] mr-4">
                Exams
              </a>
            </li>
            <li>
              <a className="md:inline-block text-[16px] mr-4">
                Exams
              </a>
            </li>
            <li>
              <a className="md:inline-block text-[16px] mr-4">
                Exams
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-gray-400 text-center mt-4">
      <p className='text-center p-[20px_0px]'>© 2024 All Rights Reservered</p>
      </div>
      </footer>
    )
  }
}

export default Footer2