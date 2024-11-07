import Image from 'next/image';
import Header from './components/Header';

export default function HomePage() {
    return (
        <div className='bg-black text-white min-h-screen'>
            <Header />
            <main className='flex flex-col items-center justify-center py-20'>
                <section className='text-center px-4'>
                    <h1 className='text-5xl font-bold mb-4'>Welcome to The Sisters</h1>
                    <p className='text-xl mb-8'>Experience the rock & roll vibes like never before.</p>
                    <Image src='/hero-band.jpg' alt='The Sisters Rocking Stage' width={600} height={400} className='rounded-lg' />
                </section>
            </main>
        </div>
    );
}