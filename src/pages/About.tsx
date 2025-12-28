import {   SlashIcon  } from "lucide-react"
import { Icon } from "@iconify/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb"
import { about_image,  employee_1, employee_2, employee_3, } from "../constant/constant"
import { nanoid } from 'nanoid';
import { Link } from "react-router";
import type { JSX } from "react";
import Services from "../components/Services";

interface InfoItem {
  id: string;
  icon: JSX.Element;
  total: number;
  description: string;
}

interface SocialIcon {
  id: number;  
  icon: string;
}

interface Employee {
  id: string;
  name: string;
  title: string;
  image: string;
  icons: SocialIcon[];
}

const About: React.FC = () => {

  const info:InfoItem[] = [
    {
      id: nanoid(),
      icon: <Icon icon="iconoir:shop-four-tiles" width="40" height="40" />,
      total: 10.5,
      description: "Sellers active in our site"
    },
    {
      id: nanoid(),
      icon: <Icon icon="streamline:dollar-coin" width="40" height="40" />,
      total: 33,
      description: "Monthly product sell"
    },
    {
      id: nanoid(),
      icon: <Icon icon="fluent:shopping-bag-16-regular" width="40" height="40" />,
      total: 45.5,
      description: "Customer active in our site"
    },
    {
      id: nanoid(),
      icon: <Icon icon="healthicons:money-bag-outline" width="40" height="40" />,
      total: 25,
      description: "Anual gross sale in our site"
    },
  ]

  const employees:Employee[] = [
    {
      id: nanoid(),
      name:"Tom Cruise",
      title: "Founder & Chairman",
      image: employee_1 ,
      icons: [
          {
          id: 1,
          icon: "ph:twitter-logo"
        },
        {
          id: 2,
          icon: "streamline-logos:instagram-logo-2"
        },
        {
          id: 3,
          icon: "ri:linkedin-line"
        },

      ]

    },
    {
      id: nanoid(),
      name:"Emma Watson",
      title: "Managing Director",
      image: employee_2 ,
      icons: [
         {
          id: 1,
          icon: "ph:twitter-logo"
        },
        {
          id: 2,
          icon: "streamline-logos:instagram-logo-2"
        },
        {
          id: 3,
          icon: "ri:linkedin-line"
        },

      ]

    },
    {
      id: nanoid(),
      name:"Will Smith",
      title: "Product Designer",
      image: employee_3 ,
      icons: [
        {
          id: 1,
          icon: "ph:twitter-logo"
        },
        {
          id: 2,
          icon: "streamline-logos:instagram-logo-2"
        },
        {
          id: 3,
          icon: "ri:linkedin-line"
        },

      ]

    },
  ]




  return (
    <section className="pt-10 sm:pt-14 md:pt-20">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="about_container">
          <div>
            {/* Breadcrumb from Shadecn UI */}

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-xs sm:text-sm md:text-[14px]">
                  <BreadcrumbLink >
                  <Link to={"/"}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="text-xs sm:text-sm md:text-[14px]">
                  <BreadcrumbLink >
                  <Link to={"/about"}>About</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-10.5 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-19 mb-16 sm:mb-20 md:mb-28 lg:mb-35">
            {/* About Text */}
            <div className="max-w-full lg:max-w-[505px] w-full lg:w-auto">

              <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-[54px] mb-4 sm:mb-6 md:mb-8 lg:mb-10 font-semibold">Our Story</h1>
              <p className="font-poppins text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-[26px]">Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                <br /><br />
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
              </p>
            </div>

            {/*About Image  */}
            <div className="about_image w-full lg:w-auto">
              <img src={about_image} alt="image" className="w-full lg:w-auto h-auto max-w-full" />
            </div>

          </div>


      {/* About Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-between items-center mb-16 sm:mb-24 md:mb-32 lg:mb-[140px] px-0">
            {
              info.map((item) => {
                return (
                  <div className="py-4 sm:py-6 md:py-8 hover:shadow-info transition-all duration-300 hover:bg-button2 hover:cursor-pointer group px-4 sm:px-6 md:px-8 flex flex-col w-full border border-[rgba(0,0,0,0.31)] dark:border-gray-600 items-center justify-center rounded-sm" key={item.id}>
                    <div className="rounded-full flex transition-all items-center group-hover:bg-[rgba(255,255,255,0.3)] justify-center bg-[rgba(47,46,48,0.31)] dark:bg-gray-700 w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 mb-3 sm:mb-4 md:mb-6">
                      <div className="rounded-full flex transition-all items-center justify-center group-hover:bg-white group-hover:text-black bg-button dark:bg-button2 w-12 sm:w-14 md:w-[58px] h-12 sm:h-14 md:h-[58px] text-white text-lg sm:text-xl md:text-2xl">
                        {item.icon}
                      </div>
                    </div>
                    <p className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-[32px] group-hover:text-white font-bold mb-2 sm:mb-3 dark:text-gray-200">{item.total}k</p>
                    <p className="font-poppins text-xs sm:text-sm md:text-[14px] group-hover:text-white max-w-[213px] text-center dark:text-gray-300">{item.description}</p>
                  </div>
                );
              })
            }
          </div>


            {/* About Of Owners and employees */}
            {/* This part will be in carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7.5 items-start mb-8 sm:mb-10 md:mb-12 lg:mb-10 justify-between">
            {
                employees.map((employee)=>{
                  return(
                    <div key={employee.id}>
                        <div className="bg-[#F5F5F5] dark:bg-gray-700 flex justify-center pt-6 sm:pt-8 md:pt-10 items-end mb-4 sm:mb-6 md:mb-8 rounded-sm min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[380px]">
                          <img src={employee.image} alt={employee.name} className="w-auto h-auto max-w-full" />
                        </div>
                        <div className="px-2 sm:px-0">
                          <h3 className="font-inter text-lg sm:text-2xl md:text-3xl lg:text-[32px] leading-6 sm:leading-8 md:leading-9 lg:leading-[30px] dark:text-white">{employee.name}</h3>
                          <p className="font-poppins mt-1 sm:mt-2 text-xs sm:text-sm md:text-base dark:text-gray-300">{employee.title}</p>
                          <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                            {
                              employee.icons.map((social)=>{
                                return(
                                    <Link key={social.id} to="#" className="hover:scale-110 transition-transform">
                                      <Icon icon={social.icon} width={20} height={20} className="sm:w-6 sm:h-6 dark:text-gray-300" />
                                    </Link>
                                )
                              })
                            }
                          </div>
                        </div>
                    </div>
                  )
                })
            }

          </div>


            {/* About Services */}
         
            <Services/>
        </div>
      </div>
    </section>
  )
}

export default About