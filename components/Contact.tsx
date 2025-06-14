'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FormEvent, MutableRefObject, useRef } from 'react';
// import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { toast } from 'react-toastify';

// interface FormValues {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

const Contact = () => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  // const {
  //   trigger,
  //   register,
  //   formState: { errors },
  // } = useForm<FormValues>({
  //   mode: 'onBlur',
  // });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    // trigger()
    //   .then(isValid => {
    //     if (!isValid) {
    //       e.preventDefault();
    //     }
    //   })
    //   .catch(error => console.error(error));
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        res => {
          toast(`Your message has been sent! ${res.text}`);
        },
        err => {
          toast.error(`Error! ${err.text}`);
        }
      )
      .then(() => {
        formRef.current.reset();
      });
  };

  return (
    <section id='contact' className='w-full lg:min-h-screen px-6 pt-28 pb-6'>
      <div className='max-w-[1240px] m-auto'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className='py-4'>Get In Touch</h2>
        </motion.div>

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Left (up) side */}
          <div className='lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <p className='py-4 text-lg'>
                If you&apos;re looking for a skilled web developer to help bring
                your web application ideas to life, feel free to contact me.
                Let&apos;s discuss how I can contribute to your team and deliver
                top-notch results.
              </p>

              <div>
                <div className='flex gap-4 my-4 items-center'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 text-lg cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <div>spormuv@gmail.com</div>
                </div>

                <div className='flex gap-4 my-4 items-center'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 text-lg cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsTelephoneOutbound />
                  </div>
                  <div>+XXX-XX-XXXXXXX</div>
                </div>

                <div className='flex gap-4 my-4 items-center'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 text-lg cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GoLocation />
                  </div>
                  <div>Minsk, Belarus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right (down) side */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className='lg:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4'
          >
            {/* Form */}
            <form onSubmit={submitHandler} ref={formRef}>
              <div className='flex flex-col gap-4'>
                <input
                  className='border-2 rounded-lg p-3 border-gray-300'
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                />
                <input
                  className='border-2 rounded-lg p-3 border-gray-300'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
                <input
                  className='border-2 rounded-lg p-3 border-gray-300'
                  type='text'
                  name='subject'
                  placeholder='Subject'
                />
                <textarea
                  className='resize-none border-2 rounded-lg p-3 border-gray-300 h-40'
                  name='message'
                  placeholder='Message'
                  required
                />
              </div>
              <div className='text-center lg:mt-4'>
                <button className='p-4 text-gray-100 mt-4 w-full'>
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className='flex justify-center py-12'>
          <Link href='#home'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
