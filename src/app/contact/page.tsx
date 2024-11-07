import Header from '../components/Header';

export default function ContactPage() {
    return (
        <div className='bg-gray-700 text-white min-h-screen'>
            <Header />
            <main className='py-20 px-5'>
                <section className='max-w-3xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-8'>Contact Us</h2>
                    <p className='mb-4'>Reach out for bookings or any inquiries. We would love to hear from you.</p>
                    <form className='space-y-4'>
                        <input type='text' placeholder='Name' className='w-full p-2 rounded bg-gray-900 text-white' />
                        <input type='email' placeholder='Email' className='w-full p-2 rounded bg-gray-900 text-white' />
                        <textarea placeholder='Message' rows={4} className='w-full p-2 rounded bg-gray-900 text-white'></textarea>
                        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Send Message</button>
                    </form>
                </section>
            </main>
        </div>
    );
}