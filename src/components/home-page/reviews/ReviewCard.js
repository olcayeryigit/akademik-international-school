"use client"

import Image from 'next/image';

const ReviewCard = ({ comment, name, title }) => {
    return (
      <div className="relative  h-52 flex flex-col justify-center gap-2 px-6 rounded-3xl shadow bg-indigo-50 bg-opacity-50 ">
          <Image
            className="absolute -top-4 right-10 opacity-50"
            src="/images/home-page/mark.svg"
            alt="Star Icon"
            width={72}
            height={72}
          />

        <div className="flex items-center gap-2 border-b pb-1">
          <div className="h-8 w-8 rounded-full bg-white"></div>
          <div className="flex flex-col">
            <div className="font-bold text-sm">{name}</div>
            <div className="text-sm opacity-80">{title}</div>
          </div>
        </div>
        <p className="text-sm text-gray-800">&quot;{comment}&quot;</p>
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <svg
            key={index}  xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#FFD17F" d="m8.125 7.092l2.608-3.47q.238-.322.566-.472T12 3t.701.15t.566.471l2.608 3.471l4.02 1.368q.534.18.822.605q.289.426.289.94q0 .237-.07.471t-.228.449l-2.635 3.573l.1 3.83q.025.706-.466 1.189T16.564 20l-.454-.056L12 18.733l-4.11 1.211q-.124.05-.24.053q-.117.003-.214.003q-.665 0-1.15-.483t-.459-1.188l.1-3.856l-2.629-3.548q-.159-.217-.229-.453Q3 10.236 3 10q0-.506.297-.942q.296-.435.828-.618z"/></svg>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
