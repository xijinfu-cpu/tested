import React from 'react';

const GalleryItem = ({ src }) => (
  <img
    src={src}
    className="rounded-md hover:scale-105 w-full object-cover cursor-pointer"
    style={{
      minHeight: '200px',
    }}
  />
);

export default function OurGallery() {
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Our Gallery
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <GalleryItem src="/images/1.jpg" />
        <GalleryItem src="/images/2.jpg" />
        <GalleryItem src="/images/3.jpg" />
        <GalleryItem src="/images/4.jpg" />
        <GalleryItem src="/images/5.jpg" />
        <GalleryItem src="/images/6.jpg" />
        <GalleryItem src="/images/7.jpg" />
        <GalleryItem src="/images/8.jpg" />
        <GalleryItem src="/images/9.jpg" />
      </div>
    </div>
  );
}
