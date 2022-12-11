import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
const Footer = ({configs}: any) => (
    <footer className='w-full bg-primary-3 flex justify-center  '>
    <div className="w-[75%] md:w-full flex self-center py-[40px] md:flex-col md:gap-12 md:pl-4 ">
        <div className="flex flex-1 flex-col">
            <span className="text-gray-100 text-2xl font-bold">VMConsórcio</span>
            <span className="text-gray-400 text-md">Site description lorem ipsom</span>
        </div>
        <div className="flex flex-1 flex-col gap-2">
            <span className="text-gray-300 text-xs font-bold mb-2">Contact Info</span>
            <a className="text-gray-100 text-sm">{configs?.tel1}</a>
            <a className="text-gray-100 text-sm">{configs?.tel2}</a>
            <a className="text-gray-100 text-sm">{configs?.whatsapp} (WhatsApp)</a>
            <span className="text-gray-100 text-sm">{configs?.email}</span>
            <span className="text-gray-100 text-sm">{configs?.address}</span>
            <span className="text-gray-100 text-sm">{configs?.cnpj}</span>
        </div>
        <div className="flex flex-1 flex-col gap-2">
            <span className="text-gray-300 text-xs font-bold mb-2">LINKS</span>
            <a href="/about" className="text-gray-100 text-sm">Quem Somos Nós</a>
            <a href="/blog" className="text-gray-100 text-sm">Blog</a>
        </div>
        <div className="flex flex-1 flex-col gap-2">
            <span className="text-gray-300 text-xs font-bold mb-2">Redes Sociais</span>
            <a href="https://facebook.com" className="text-gray-100 text-sm"><Facebook /> Facebook</a>
            <a href="https://instagram.com" className="text-gray-100 text-sm"><Instagram /> Instagram</a>
            <a href="https://twitter.com" className="text-gray-100 text-sm"><Twitter /> Twitter</a>
            <a href="" className="text-gray-100 text-sm flex items-center gap-1"><img src='/img/reclame-aqui-icon-wt.png' style={{width: 25}} />Reclame Aqui</a>
        </div>
    </div>
    </footer>

)

export default Footer