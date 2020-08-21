import db from '@/lib/db';

export const increment = (id: string) => {
    const ref = db.ref('views').child(id);
    return ref.transaction(
        // If it has never been set it returns null
        (currentViews) => (currentViews === null ? 1 : currentViews + 1)
    );
};

export const reset = (id: string, count: number) => {
    const ref = db.ref('views').child(id);
    return ref.transaction((currentViews) => (currentViews === null ? null : count));
};
