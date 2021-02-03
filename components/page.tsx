import React, { ReactNode } from 'react';
import Link from 'next/link';
import { BASE_URI, SRC_URL } from '@/lib/globals';
// import Meta from '@/lab/components/post/meta';
import styles from '@/styles/page.module.css';

const Main = ({ children }: { children: ReactNode }) => (
    <div className={styles.main}>
        <div className={styles.logo}>
            <Link href="/">
                <a>{BASE_URI}</a>
            </Link>{' '}
            (
            <a href={SRC_URL} target="_blank" rel="noopener noreferrer">
                src
            </a>
            )
        </div>
        {children}
        {/* <Meta /> */}
    </div>
);

export default Main;
