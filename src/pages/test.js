import Head from 'next/head';

// will we use a Next font //
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Link from 'next/link';
import SetStarRating from '@/components/StarRating';
import Star from '@/components/StarRating';

export default function Home() {
  return <SetStarRating />;
}
