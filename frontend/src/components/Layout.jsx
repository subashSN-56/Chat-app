// import Sidebar from "../components/Sidebar"
// import Navbar from "../components/Navbar"




// const Layout = ({ children, showSidebar = false }) => {
//     return (
//         <div className='min-h-screen'>
//             <div className='flex'>
//                 {showSidebar && <Sidebar />}
//                 <div>
//                     <Navbar />
//                     <main>
//                         {children}
//                     </main>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Layout

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = ({ children, showSidebar = false }) => {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar (left) */}
            {showSidebar && (
                <aside className="w-64 bg-gray-900 text-white">
                    <Sidebar />
                </aside>
            )}

            {/* Main content area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar (top-right controls inside) */}
                <Navbar />

                {/* Page content */}
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
