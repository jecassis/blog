import React from 'react';
import Link from 'next/link';
import styles from '@/styles/layout.module.css';
import utilStyles from '@/styles/utils.module.css';
import { INDEX_TITLE, BASE_URI, SRC_URL } from '@/lib/globals';
import pageStyles from '@/styles/page.module.css';

const Layout = ({ children, home }: { children: React.ReactNode; home?: boolean }) => {
    return (
        <>
            <div className={pageStyles.main}>
                <div className={pageStyles.logo}>
                    <Link href="/">
                        <a>{BASE_URI}</a>
                    </Link>{' '}
                    (
                    <a href={SRC_URL} target="_blank" rel="noopener noreferrer">
                        src
                    </a>
                    )
                </div>
            </div>
            <div className={styles.container}>
                <header className={styles.header}>
                    {home ? (
                        <>
                            <img
                                src="/img/profile.png"
                                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                alt={INDEX_TITLE}
                            />
                            <h1 className={utilStyles.headingLg}>{INDEX_TITLE}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/img/profile.png"
                                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={INDEX_TITLE}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{INDEX_TITLE}</a>
                                </Link>
                            </h2>
                        </>
                    )}
                </header>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/blog">
                            <a>← Back to post list</a>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Layout;
