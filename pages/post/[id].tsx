import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import format from 'comma-number';
import Layout from '@/components/layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { DB_URL, VIEWS_URI } from '@/lib/globals';
import Date from '@/components/date';
import styles from '@/styles/utils.module.css';

const Post = ({
    postData,
    views,
}: {
    postData: {
        id: string;
        title: string;
        date: string;
        summary: string;
        contentHtml: string;
    };
    views: number;
}) => {
    const [viewed, setViewed] = useState<number>(0);
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        setHighlight(true);
        // const timeoutId = setTimeout(() => {
        //     setHighlight(false);
        // }, 600);

        // return () => {
        //     clearTimeout(timeoutId);
        // };
        // Register a view asynchronously.
        fetch(`https://${VIEWS_URI}/?id=${encodeURIComponent(`${postData.id}`)}`, { method: 'POST' })
            .then((r) => r.json())
            .then((data) => setViewed(data))
            .catch((err) => console.error('View save error', err));
    }, [views]);

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className={styles.article}>
                <h1 className={styles.headingXl}>
                    <span>{postData.title}</span>
                </h1>
                <div className={styles.lightText}>
                    <Date dateString={postData.date} />
                    {'  --  '}
                    <span className={highlight ? styles.highlight : undefined}>
                        {format(views)} {views === 1 ? 'view' : 'views'}
                    </span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    const views = await fetch(`${DB_URL}/views/${params.id}.json`)
        .then((r) => r.json())
        .catch((err) => console.error('Fetch mount error', err));

    return {
        props: {
            id: params.id,
            postData,
            views: views ? views : null,
        },
    };
};

export default Post;
