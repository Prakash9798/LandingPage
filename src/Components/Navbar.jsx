import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Navbar() {

    useGSAP(()=>{
        var tl1 = gsap.timeline()
      tl1.from(".left h1",{
        y:-40,
        duration:0.3,
        delay:0.2,
        opacity:0, 
        stagger:0.3
      })
      tl1.from(".right h1",{
        y:-40,
        duration:0.3,
        delay:0.2,
        opacity:0,
        stagger:0.3
      }
     )
     tl1.from(".content h1",{
        x:-200,
        opacity:0,
        delay:0.2,
        duration:0.3,
        
     })
    tl1.from(".content p",{
        x:-200,
        opacity:0,
        delay:0.2,
        duration:0.3,
    })
    tl1.from("button",{
        x:-200,
        opacity:0,
        delay:0.2,
        duration:0.3,
    })
    tl1.from(".left2 img",{
        y:-100,
        opacity:0,
        delay:0.2,
        duration:0.3,
    })
    tl1.from(".right2 img",{
        x: 100,
        opacity:0,
        delay:0.2,
        duration:0.3,
    })
   

    })
  

    
    return (
        <div className='h-screen w-full bg-zinc-900 '>
            <div className='nav flex items-center justify-between p-5 font-serif'>
                <div className="left">
                    <h1 className='text-2xl text-white  font-light'>LOGO</h1>
                </div>
                <div className="right flex gap-10 text-2xl  font-light text-white ">
                    <h1>About</h1>
                    <h1>Journal</h1>
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="center flex items-center justify-center gap-20">
                <div className="left1 w-1/2 h-[40vw] ">
                    <div className="content">
                        <h1 className='text-white text-4xl tracking-widest font-serif  w-[48vw] pt-28 px-16'>Hard Work beats talent when talent doesn't work hard </h1>
                        <p className='text-white text-md p-10 font-light ml-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem autem qui fugiat debitis. Harum in corporis dignissimos error accusantium odit sapiente eos non sint ad provident, quo pariatur nulla officia.</p>
                        <button  className='px-10 py-3 rounded-full  text-white bg-black ml-10 font-light '>Explore More </button>
                    </div>
                </div>
                <div className="right1 w-1/2 h-[40vw] ">
                 <div className="container flex">
                   <div className="left2">
                    <img  className=" w-1/2   rounded-lg  bg-cover bg-center border-[0.5px] mt-28 ml-7 " src="https://cdn.shopify.com/s/files/1/0027/5536/2879/files/Pioneer_RG_Leather_Black-Dial_Male_480x480.jpg?v=1673936366" alt="" />
                   </div>
                   <div className="right2">
                       <img  className =" w-[170px] h-[240px] mt-12 mr-20 border-[0.5px]" src="https://c7.alamy.com/comp/HE1FXG/closeup-of-colorful-illuminated-keyboard-at-night-HE1FXG.jpg" alt="" />
                       <img  className =" img1  w-[210px] h-[200px] mt-10 mr-20 border-[0.5px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYJUleejZXMJwpBOgg9uVYuhQP2InSPMRow&s" alt="" />
                   </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
