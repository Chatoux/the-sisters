import Image from 'next/image';
import Header from '../components/Header';

export default function ServicesPage() {
    return (
        <div className='bg-gray-800 text-white min-h-screen'>
            <Header />
            <main className='py-20 px-5'>
                <section className='max-w-3xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-8'>Our Services</h2>
                    <p className='mb-4'>As a band, we provide various services including live performances, private events, and studio recordings. We bring energy, passion, and professionalism with our music.</p>
                    <Image src='/services-event.jpg' alt='Live Event' width={800} height={500} className='rounded-lg mx-auto' />
                </section>
            </main>
        </div>
    );
}