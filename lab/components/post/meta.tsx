import React, { useState, useEffect } from 'react';
import format from 'comma-number';
import styles from '@/styles/meta.module.css';

const Meta = ({ date, views }: { date?: string; views?: number }) => {
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        setHighlight(true);
        const timeoutId = setTimeout(() => {
            setHighlight(false);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [views]);

    return (
        <div className={styles.meta}>
            {date && views && views !== 0 ? (
                <>
                    {date}
                    {' -  '}
                    <span className={highlight ? styles.highlight : undefined}>
                        {format(views)} {views === 1 ? 'view' : 'views'}
                    </span>
                </>
            ) : (
                ''
            )}
        </div>
    );
};

export default Meta;
