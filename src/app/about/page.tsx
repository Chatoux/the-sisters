import Image from 'next/image';
import Header from '../components/Header';

export default function AboutPage() {
    return (
        <div className='bg-gray-900 text-white min-h-screen'>
            <Header />
            <main className='py-20 px-5'>
                <section className='max-w-3xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-8'>About Us</h2>
                    <p className='mb-4'>The Sisters are an Argentinian rock band known for their electrifying performances and soulful music. Our journey started in 2010, and since then, we've been hitting stages worldwide.</p>
                    <Image src='/band-history.jpg' alt='Band Performing' width={800} height={500} className='rounded-lg mx-auto' />
                </section>
            </main>
        </div>
    );
}