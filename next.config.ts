import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin('./src/shared/configs/i18n/configs/index.ts');
export default withNextIntl(nextConfig);
