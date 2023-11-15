
// import style from "../../../../styles/Admin/Home.module.css"
import AdminNavbar from '@/components/Admin/Navbar/AdminNavbar'
import AddServices from '@/components/Admin/Navbar/Home/AddServices'
import ContactInfo from '@/components/Admin/Navbar/Home/ContactInfo'
import DeleteServices from '@/components/Admin/Navbar/Home/DeleteServices'
import TotalServices from '@/components/Admin/Navbar/Home/TotalServices'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
       <AdminNavbar/>
       <Image src='/admin.webp' alt=''  width={0} height={500} sizes="100vw" style={{width:'100%' ,objectFit:'cover'}}/>
       <TotalServices/>
       <AddServices/>
       <DeleteServices/>
       <ContactInfo/>
        

    </div>
  )
}

export default Home