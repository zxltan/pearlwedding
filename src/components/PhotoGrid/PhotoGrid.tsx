import React from 'react';

export function PhotoGrid() {
    const photos = [
        '/grid%20photo/1.jpg',
        '/grid%20photo/2.jpg',
        '/grid%20photo/3.jpg',
        '/grid%20photo/4.jpg',
        '/grid%20photo/5.jpg',
        // Добавьте все необходимые URL-адреса фотографий
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={` rounded-lg flex items-center justify-center overflow-hidden transition-all hover:scale-105 ${
                        index === 0 ? 'md:col-span-2 row-span-2 col-span-1 row-span-1' :
                            index === 1 ? 'col-span-1 row-span-1' :
                                index === 2 ? 'col-span-1 row-span-1' :
                                    index === 3 ? 'col-span-1 row-span-1' :
                                        index === 4 ? 'col-span-1 row-span-1' :
                                            index === 5 ? 'col-span-1 row-span-1' : ''
                        
                    }`}
                >
                    <img src={photo} alt={`Photo ${index + 1}`} className="max-w-full h-full" />
                </div>
            ))}
        </div>
    );
}
