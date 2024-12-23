"use client"
import React from 'react';
import Image from 'next/image';
import Redirect3 from '../banner-redirect-3/Redirect3';

const ImageBanner = ({ 
  src = '/default-image.jpg', // src için varsayılan bir görsel (mevcut değilse bunu ekleyin)
  title = 'Default Title', // title için varsayılan değer
  subTitle = '', // subTitle için boş bir değer
  objectClass = 'object-center', // objectClass için boş bir değer
bg="bg-gradient-to-b from-[#080D16]/100 via-[#0A0F19]/95 via-[#0D121D]/80 via-[#101525]/70 to-red-800/70 opacity-95  "
}) => {
  return (
    <div className="relative image-banner py-20 flex w-full bg-[#080D16] text-white rounded-bl-3xl rounded-br-3xl ">
      <Image src={src} alt="Banner Image" fill className={`object-cover ${objectClass} rounded-bl-3xl rounded-br-3xl`} />
      <div className={`absolute inset-0 ${bg} rounded-bl-3xl rounded-br-3xl`}></div>
      <div className="container mx-auto pt-36 z-50 gap-16 space-y-6">
      <Redirect3 title={title} subTitle={subTitle}/>

        <h2 className="text-4xl  pb-2">{title}</h2>
        {subTitle && <h1 className="text-4xl font-bold">{subTitle}</h1>}
      </div>
      <div className='absolute top-60 w-[1200px] h-[300px] left-1/2 transform -translate-x-1/2'><Image src="/images/campuses/2.gif" fill className="object-contain "alt='x' />
      </div>
    </div>
  );
};

export default ImageBanner;


/**
 * import React from 'react';
import Image from 'next/image';

const ImageBanner = ({ 
  src = '/default-image.jpg', // src için varsayılan bir görsel (mevcut değilse bunu ekleyin)
  title = 'Default Title', // title için varsayılan değer
  subTitle = '', // subTitle için boş bir değer
  objectClass = 'object-center', // objectClass için boş bir değer
bg="bg-gradient-to-b from-[#080D16]/100 via-[#0A0F19]/95 via-[#0D121D]/80 via-[#101525]/70 to-red-800/70 opacity-95  "
}) => {
  return (
    <div className="relative image-banner py-20 flex w-full bg-[#080D16] text-white rounded-bl-3xl rounded-br-3xl ">
      <Image src={src} alt="Banner Image" fill className={`object-cover ${objectClass} rounded-bl-3xl rounded-br-3xl`} />
     
      <div className={`absolute inset-0 ${bg} rounded-bl-3xl rounded-br-3xl`}></div>
      <div className="container mx-auto pt-36 z-50 gap-16 space-y-6">
        <h2 className="text-4xl py-2">{title}</h2>
        {subTitle && <h1 className="text-4xl font-bold">{subTitle}</h1>}
      </div>
    </div>
  );
};

export default ImageBanner;

 */