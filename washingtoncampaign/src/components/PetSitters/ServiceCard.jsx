import React from 'react';

function ServiceCard({ image, title, description }) {
  return (
    <article className="flex overflow-hidden overflow-x-hidden overflow-y-hidden relative flex-col items-center bg-white rounded-lg border border-t border-r border-b border-l border-solid transition-transform transition-transform border-zinc-300 duration-[0.3s] duration-[0.3s] ease-[ease-in-out] ease-[ease-in-out] max-w-[300px] shadow-[rgba(0,0,0,0.1)_0px_2px_4px] w-[calc(25%_-_40px)]">
      <img loading="lazy" src={image} alt={title} className="object-cover w-full rounded-tl-lg aspect-video" />
      <div className="px-4 py-5 text-center">
        <h3 className="my-2.5 text-2xl text-neutral-600">{title}</h3>
        <p className="text-neutral-500">{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;