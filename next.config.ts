import type { NextConfig } from 'next';
import { withcontentCollections } from '@content-collections/next';

const nextConfig: NextConfig = {
    images: {
        qualities: [95],
    },
};

export default withcontentCollections(nextConfig);
