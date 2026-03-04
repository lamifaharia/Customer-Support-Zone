
import vectorImg from "./assets/vector1.png";


  
    <div className="min-h-screen bg-gray-50">
      {/* -----------------Navbar--------------------- */}
      <nav className="flex justify-between items-center py-5 px-12 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#422AD5] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xs">CS</span>
          </div>
          <h1 className="text-xl font-bold text-[#111827] tracking-tight">
            Support<span className="text-[#422AD5]">Zone</span>
          </h1>
        </div>

        <div className="flex items-center gap-10">
          <ul className="hidden md:flex gap-8 text-gray-500 text-sm font-semibold">
            <li className="hover:text-[#422AD5] transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#422AD5] transition-colors cursor-pointer">
              FAQ
            </li>
            <li className="hover:text-[#422AD5] transition-colors cursor-pointer">
              Changelog
            </li>
            <li className="hover:text-[#422AD5] transition-colors cursor-pointer">
              Blog
            </li>
            <li className="hover:text-[#422AD5] transition-colors cursor-pointer">
              Download
            </li>
            <li className="hover:text-[#422AD5] transition-colors cursor-pointer">
              Contact
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-br from-[#551eac] via-[#7d42e2] to-[#4f2194] text-white px-5 py-2.5 rounded-[5px] font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all">
              + New Ticket
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-10">
        {/*-------------------- Banner -----------------------*/}

        {/* Banner Section - Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* ------------In-Progress Card --------------*/}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#491e8e] via-[#7C3AED] to-[#4C1D95] p-12 rounded-[2rem] text-center text-white shadow-xl transform hover:scale-[1.01] transition-all">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-60 mix-blend-screen"
              style={{ backgroundImage: `url(${vectorImg})` }}
            ></div>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-60 mix-blend-screen scale-x-[-1]"
              style={{ backgroundImage: `url(${vectorImg})` }}
            ></div>
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest font-bold opacity-80">
                In-Progress
              </p>
              <h2 className="text-7xl font-black mt-2 tracking-tighter">
                {inProgress.length}
              </h2>
            </div>
          </div>

          {/* -----------------Resolved Card-------------*/}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#149f71] via-[#2fd69f] to-[#0b9466] p-12 rounded-[2rem] text-center text-white shadow-xl transform hover:scale-[1.01] transition-all">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-60 mix-blend-screen"
              style={{ backgroundImage: `url(${vectorImg})` }}
            ></div>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-60 mix-blend-screen scale-x-[-1]"
              style={{ backgroundImage: `url(${vectorImg})` }}
            ></div>
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest font-bold opacity-80">
                Resolved
              </p>
              <h2 className="text-7xl font-black mt-2 tracking-tighter">
                {resolvedCount}
              </h2>
            </div>
          </div>
        </div>
        {/*-------------------- Banner Section - End -----------------*/}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         

          
        </div>
      </main>
          {/* ---------------------------footer--------------------------- */}
      <footer className="bg-[#01040d] text-white pt-20 pb-10 px-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* --------------------------Column 1------------------------- */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#422AD5] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">CS</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Support Zone
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The most advanced ticket management dashboard for modern teams.
              Build, track, and resolve with ease.
            </p>
            
          </div>

          {/* ---------------------------Column 2 -------------------------*/}
          <div>
            <h4 className="text-sm font-black tracking-widest text-[#ffffff] mb-6">
              Company
            </h4>
            <ul className="text-gray-400 text-sm space-y-4 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Our Mission
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact Saled
              </li>
            </ul>
          </div>

          {/* Column 3: --------------------------Column 3-------------------------- */}
          <div>
            <h4 className="text-sm font-black tracking-widest text-[#ffffff] mb-6">
              Services
            </h4>
            <ul className="text-gray-400 text-sm space-y-4 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">
                Product & Services
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Customer stories
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Download Apps
              </li>
            </ul>
          </div>

          {/* ------------------------------Column 4------------------------------ */}
          <div>
            <h4 className="text-sm font-black tracking-widest text-[#ffffff] mb-6">
              Information
            </h4>
            <ul className="text-gray-400 text-sm space-y-4 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Join Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Security
              </li>
            </ul>
          </div>

          {/**----------------column5----------------- */}

          <div>
            <h4 className="text-sm font-black tracking-widest text-[#ffffff] mb-6">
              Social Links
            </h4>
            <ul className="text-gray-400 text-sm space-y-4 font-medium">
             <li className="w-8 h-8 rounded-full  flex items-center justify-center  cursor-pointer transition-colors">
              <FaLinkedin size ={35}/>
              </li>
              <li className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center  cursor-pointer transition-colors">
                <FaFacebook size ={39}/>
                </li>
              <li className="w-8 h-8 rounded-full  flex items-center justify-center  cursor-pointer transition-colors">
                <FaSquareXTwitter size ={35} />
              </li>
              <li className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center  cursor-pointer transition-colors">
                <ImMail4 size ={35}/>
                </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex  justify-center items-center">
          <p className="text-gray-500 text-xs font-bold">
            © 2026 Customer Support Zone — Ticket System. All rights reserved
          </p>
        </div>
      </footer>

      
    </div>
  

