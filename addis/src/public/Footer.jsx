import fb from './imag/fb.png';
import insta from './imag/insta.png';
import tw from './imag/tw.png';
//import utub from './imag/utub.png';


export default function Footer() {

  return (
    <>
      <div className="md:flex max-sm:justify-center md:justify-between bg-gray-700 text-white w-auto md:h-36 p-7">
        <div className="">
          <div className="grid grid-cols-2 hover:text-yellow-600 hover:cursor-pointer">
            <svg className="m-2 w-6 h-6  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
            </svg>
            <h1 className="text-3xl max-sm:-ml-28 md:-ml-16 font-bold ">
              Contact
            </h1>
          </div>
          <h2 className=" my-3 hover:text-yellow-600 hover:scale-110">
            <a href="https://www.google.com/maps/place/Adiss+Zemen+Hospital/@12.1218735,37.7612261,1365m/data=!3m1!1e3!4m10!1m2!2m1!1sADDIS+ZEMEN+HOSPITAL!3m6!1s0x16436568d2c7f6b5:0x10676a116ff359c1!8m2!3d12.1218738!4d37.769466!15sChRBRERJUyBaRU1FTiBIT1NQSVRBTJIBE2dvdmVybm1lbnRfaG9zcGl0YWzgAQA!16s%2Fg%2F11h7fzlpw0?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D">
            Location : [ አዲስ ዘመን ቀበሌ 03 ውዝንቦ ሠፈር ] </a> </h2>
          <h2 className="my-3  hover:text-yellow-600 hover:scale-110"><a href="/">phone : [+258----------]</a></h2>
        </div>
     
      <div className="footer-content max-sm:justify-start md:px-56 md:flex flex-col items-center">
        <div className="copyright mb-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="social-media flex gap-5 max-sm:justify-center mb-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-150 social-icon">
            <img src={fb} alt = "Facebook icon"  className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-150 social-icon">
            <img src={tw} alt = "twirrer icon" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-150 social-icon">
            <img src={insta} alt = "instagram icon" className="w-6 h-6" />
          </a>
        </div>
      </div>

    </div>
    </>
    )
}
