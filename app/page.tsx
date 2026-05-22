'use client'

import { useBookStore } from '@/store/useBookStore';
import { useEffect } from 'react';
import CardBooks from '@/components/books/CardBook';
import HeroSection from './components/HeroSection';
import GenreSection from './components/GenreSection';
import FeaturedSection from './components/FeaturedSection';
import PopularSection from './components/PopularSection';
import BeforeFooter from './components/BeforeFooter';
import Footer from '@/components/Footer';

export default function Home() {
  const books = useBookStore((state) => state.books);
  const fetchBooks = useBookStore((state) => state.fetchBooks);
  const isLoading = useBookStore((state) => state.isLoading);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  
  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
      {isLoading ? (
        <div className='text-center h-screen flex items-center justify-center'>Loading...</div>
      ) : (
        <>
          <HeroSection />
          <GenreSection />
          <FeaturedSection />
          <PopularSection />
          <BeforeFooter />
          
        </>
      )}
    </div>
  );
}
