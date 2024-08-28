import kfc from "../../photos/kfc.png"
import sign from "../../photos/sign.png"
import sign2 from "../../photos/sign2.png"
import min from "../../photos/D-K137-removebg-preview.png"
import min2 from "../../photos/D-PR00000854-removebg-preview.png"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from "../next/next"

function Hero() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        
        const handleResize = () => {
          if(window.innerWidth=== 1024){
            onClose()
          }
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const menuList = [
        {
          "topic": "INTERNATIONAL BURGER FEST",
          "subtopics": [
            "Classic American Burger",
            "Spicy Mexican Burger",
            "Italian Pesto Burger",
            "Japanese Teriyaki Burger",
            
          ],
          
        },
        {
          "topic": "MATCH DAY COMBOS",
          "subtopics": [
            "Burger and Fries Combo",
            "Hot Dog and Nachos Combo",
            "Chicken Wings and Beer Combo",
            "Pizza and Soda Combo",
            "Popcorn and Soft Drink Combo"
          ],
         
        },
        {
          "topic": "VALUE LUNCH SPECIALS",
          "subtopics": [
            "Grilled Chicken Sandwich",
            "Veggie Wrap",
            "Caesar Salad",
            "Turkey Club Sandwich",
            "Fish and Chips"
          ],
          
        },
        {
          "topic": "BOX MEALS",
          "subtopics": [
            "Chicken Box Meal",
            "Beef Box Meal",
            "Vegetarian Box Meal",
            "Seafood Box Meal",
            "Mixed Grill Box Meal"
          ],
          
        },
        {
          "topic": "BURGERS",
          "subtopics": [
            "Cheeseburger",
            "Bacon Burger",
            "Veggie Burger",
            "Double Patty Burger",
            "BBQ Burger"
          ],
        }
      ]
      

      const [menuDrop, setMenuDrop] = useState(false);
      const handleDropDown=()=>{
        setMenuDrop(!menuDrop)
      }
      const [dropdown, setDropdown] = useState(false);
      const dropdownRef = useRef(null);
    
      const toggleDropdown = () => {
        setDropdown(!dropdown);
      };
    
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdown(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    return (
        <section style={{position:"relative"}}>
            <div className="hidden lg:flex justify-between lg:py-10 lg:px-40 ">



                <div className="flex lg:gap-3" ref={dropdownRef}>
                    <img className="h-7" src={kfc}></img>
                    <p className="pt-1 cursor-pointer"  popovertarget="menu" onClick={toggleDropdown}>Menu</p>
                    {dropdown && (<Dropdown menuList={menuList} onClick={menuDrop}/>)}
                    <p className="pt-1">Deals</p>

                </div>
                <div className="flex gap-5">
                    <div className="flex pt-2">
                        <img className="h-5 mr-2" src={sign}></img>
                        <p className="font-bold">Sign In</p>

                    </div>
                    <div className="flex">
                        <p>0</p>
                        <img className="h-12" src={sign2}></img>
                    </div>
                </div>
            </div>
            <div className="lg:hidden sm:block justify-center  flex mt-5">
                <div className="flex  justify-between">

                    <div className="mr-20 ml-2">
                        <p><svg xmlns="http://www.w3.org/2000/svg" onClick={onOpen} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </p>

                        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>

                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader borderBottomWidth='1px'> <span><svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                </span><span className="font-bold text-2xl mt-6">LET'S GET COOKIN'</span></DrawerHeader>
                                <DrawerBody>


                                    <div className="flex mt-5 ">
                                        <img className="mr-2 h-6" src={sign}></img>
                                        <div className="flex font-bold">Sign in / Sign up <span className="mt-1 ml-2"> <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg></span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mt-5">
                                            <p className="mt-9  text-black font-bold">MENU</p>
                                            <img className="h-24  "   src={min}></img>

                                        </div>
                                        <div className="flex justify-between ">
                                            <p className="mt-9 text-black font-bold">DEALS</p>
                                            <img className="h-28" src={min2}></img>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 mt-10">
                                    <p>Get Help</p>
                                    <p>Contact Us</p>
                                    <p>KFC Feedback</p>
                                    <p>Privacy Policy</p>
                                    </div>
                                   
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </div>
                    <div className="mr-16">
                        <img className="h-7" src={kfc}></img>
                    </div>
                    <div className="flex">
                        <p>0</p>
                        <img className="h-12 mr-4" src={sign2}></img>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero;