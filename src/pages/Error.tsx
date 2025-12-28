import React from 'react'
import { Link } from 'react-router'
import Button2 from '../components/Button2'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../components/ui/breadcrumb'
import { SlashIcon } from 'lucide-react'

const ErrorPages: React.FC = () => {
  return (
    <div className='container' >
        <div className='mt-5 xs:mt-8 sm:mt-10 md:mt-14 lg:mt-16 xl:mt-20'>
          <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-[10px] xs:text-[12px] sm:text-[13px] md:text-[14px]">
                  <BreadcrumbLink >
                  <Link to={"/"}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon className='w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4' />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="text-[10px] xs:text-[12px] sm:text-[13px] md:text-[14px]">
                  <BreadcrumbLink >
                  <Link to={"*"}>404 Error</Link>
                  
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
        </div>

        
     

      <div className='flex flex-col items-center justify-center'>
     <h1 className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[110px] font-inter font-medium tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] leading-tight xs:leading-tight sm:leading-snug md:leading-snug lg:leading-[115px] mt-12 xs:mt-16 sm:mt-20 md:mt-32 lg:mt-40 xl:mt-[140px]'>404 Not Found</h1>
     <p className='font-poppins font-normal text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-[16px] mt-4 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-10 xl:mt-10 leading-5 xs:leading-6 sm:leading-6 md:leading-6 lg:leading-6 mb-8 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-20 px-4 xs:px-6 sm:px-8 md:px-12 text-center'>Your visited page not found. You may go home page.</p>
     
     <Link to={"/"} >
     <Button2>Back to home page</Button2>
     </Link>
      </div>
      
    </div>
  )
}

export default ErrorPages
