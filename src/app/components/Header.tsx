import Link from 'next/link';

export default function Header() {
    return (
        <header className='bg-gray-800 p-4'>
            <nav className='container mx-auto flex justify-between items-center'>
                <div className='text-2xl font-bold'><Link href='/'>The Sisters</Link></div>
                <ul className='flex space-x-4'>
                    <li><Link href='/' className='hover:text-blue-400'>Home</Link></li>
                    <li><Link href='/about' className='hover:text-blue-400'>About</Link></li>
                    <li><Link href='/services' className='hover:text-blue-400'>Services</Link></li>
                    <li><Link href='/contact' className='hover:text-blue-400'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}