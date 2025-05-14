import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiHeart, FiZoomIn } from 'react-icons/fi';

const galleryItems = [
    { id: '1', image: "./bgthree.jpg", title: "Code Session", category: "Development" },
    { id: '2', image: "./bgthree.jpg", title: "Blockchain Workshop", category: "Web3" },
    { id: '3', image: "./bgthree.jpg", title: "Team Collaboration", category: "Work" },
    { id: '4', image: "./bgthree.jpg", title: "Hackathon 2023", category: "Event" },
    { id: '5', image: "./bgthree.jpg", title: "Tech Conference", category: "Speaking" },
    { id: '6', image: "./bgthree.jpg", title: "Open Source Day", category: "Community" },
    { id: '7', image: "./bgthree.jpg", title: "UI Design", category: "Design" },
    { id: '8', image: "./bgthree.jpg", title: "Prototyping", category: "Process" },
    { id: '9', image: "./bgthree.jpg", title: "Project Demo", category: "Showcase" },
];



const Gallery = () => {
    const [likes, setLikes] = useState({});
    const [likedPhotos, setLikedPhotos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loadingLikes, setLoadingLikes] = useState(false);

    // Initialize likes from localStorage
    useEffect(() => {
        const storedLikes = localStorage.getItem('galleryLikes');
        const storedLikedPhotos = localStorage.getItem('likedPhotos');
        if (storedLikes) {
            try{
                setLikes(JSON.parse(storedLikes));
            } catch(e){
                console.error("Error parsing stored likes", e);
                setLikes({});
            }

        }
        if (storedLikedPhotos) {
             try{
                 setLikedPhotos(JSON.parse(storedLikedPhotos));
             } catch(e){
                console.error("Error parsing liked photos", e);
                setLikedPhotos([]);
             }
        }
    }, []);

    // Save likes to localStorage whenever it changes
    useEffect(() => {
        if(!loadingLikes){
            localStorage.setItem('galleryLikes', JSON.stringify(likes));
            localStorage.setItem('likedPhotos', JSON.stringify(likedPhotos));
        }

    }, [likes, likedPhotos, loadingLikes]);

    // Function to handle liking a photo
    const handleLike = useCallback((photoId) => {
        setLoadingLikes(true);
        const currentLikes = likes[photoId] || 0;
        const newLikes = currentLikes + 1;

        setLikes(prevLikes => ({ ...prevLikes, [photoId]: newLikes }));
        setLikedPhotos(prev => [...prev, photoId]);
        setLoadingLikes(false);

    }, [likes, likedPhotos]);


    const handleDownload = (imageUrl) => {
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pt-16 pb-20 md:pb-16 px-4"
            >
                <div className="container mx-auto py-12">
                    <h1 className="text-4xl font-bold text-center mb-4 text-dark-primary dark:text-light-primary">
                        Visual Gallery
                    </h1>
                    <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-dark-secondary dark:text-light-secondary">
                        A collection of moments from my work, events, and creative process.
                    </p>

                    {loadingLikes ? (
                        <div className="text-center">Loading Likes...</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryItems.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => openModal(photo.image)}
                                    className="relative group overflow-hidden rounded-xl shadow-lg border-[1px] border-opacity-[40%] border-gray-600 dark:border-gray-700 transition-all"

                                >
                                    <img
                                        src={photo.image}
                                        alt={photo.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                        onClick={() => openModal(photo.image)}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <h3 className="text-xl font-bold text-white mb-1">{photo.title}</h3>
                                        <p className="text-sm text-gray-300 mb-3">{photo.category}</p>
                                        <div className="flex space-x-3">
                                            <button
                                                className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-accent-light transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent image click
                                                    handleLike(photo.id);
                                                }}
                                            >
                                                <FiHeart className={likedPhotos.includes(photo.id) ? "w-4 h-4 text-red-500" : "w-4 h-4 text-white"} />
                                            </button>
                                            <span className="text-white text-sm flex items-center">{likes[photo.id] || 0}</span>

                                            <button
                                                className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-accent-light transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation(); 
                                                    handleDownload(photo.image);
                                                }}
                                            >
                                                <FiDownload className="w-4 h-4 text-white" />
                                            </button>
                                            <button
                                                className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-accent-light transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation(); 
                                                    openModal(photo.image)
                                                }}
                                            >
                                                <FiZoomIn className="w-4 h-4 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>

            {isModalOpen && selectedImage && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
                    <div className="relative max-w-[90vw] max-h-[90vh]">
                        <img
                            src={selectedImage}
                            alt="Full Size"
                            className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70 p-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
