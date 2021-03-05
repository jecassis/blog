/* eslint-disable no-else-return */
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = () => join(process.cwd(), 'posts');

const getMatter = (fileName: string, directory: string = '') => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx?$/, '');

    // Read markdown file as string
    const fullPath = join(postsDirectory(), directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
        id: `${matterResult.data.date.replace(/-\d{1,2}-\d{1,2}/, '-')}${id}`,
        ...(matterResult.data as { date: string; title: string; summary: string }),
    };
};

const getAllPostsData = (): any[] => {
    const fileNames = fs.readdirSync(postsDirectory());
    const allPostsData = fileNames.map((fileName) => {
        const fullPath = join(postsDirectory(), fileName);
        if (fs.lstatSync(fullPath).isDirectory()) {
            // Get file names under /posts/<year>
            const nested = fs.readdirSync(fullPath);
            return nested.map((fn) => getMatter(fn, fileName));
        } else {
            // Get file names under /posts
            return getMatter(fileName);
        }
    });

    // Flatten posts
    return ([] as any[]).concat(...allPostsData);
};

export const getSortedPostsData = (): any[] => {
    // Sort posts by date
    return getAllPostsData().sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export const getAllPostIds = () => {
    return getAllPostsData().map((post) => {
        return {
            params: {
                id: post.id,
            },
        };
    });
};

export const getPostData = async (id: string) => {
    const year = id.match(/(\d{4})-(.*?)$/);
    const fullPath =
        year !== null ? join(postsDirectory(), year[1], `${year[2]}.md`) : join(postsDirectory(), `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    const contentMdx = matterResult.content;

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        contentMdx,
        ...(matterResult.data as { date: string; title: string; summary: string }),
    };
};
