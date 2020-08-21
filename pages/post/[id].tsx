import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from 'next/head';
import Date from '@/components/date';
import utilStyles from '@/styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';
import { DB_URL } from '@/lib/globals';

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
    // const [viewed, setViewed] = useState<number>(0);

    // Register a view asynchronously.
    // useEffect(() => {
    //     fetch(`/api/views?id=${encodeURIComponent(`${postData.id}`)}`, { method: 'POST' })
    //         .then((r) => r.json())
    //         .then((data) => setViewed(data))
    //         .catch((err) => console.error('View save error', err));
    // }, []);

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className={utilStyles.article}>
                <h1 className={utilStyles.headingXl}>
                    <span>{postData.title}</span>
                </h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                    {'  --  '}
                    <span>Views: {views}</span>
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