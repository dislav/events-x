import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const inputPattern = path.join(__dirname, '../icons/*.svg');
const publicDir = path.join(__dirname, '../public');
const iconDir = path.join(__dirname, '../src/shared/ui/Icon');

async function buildSprite() {
    try {
        // Find all SVG files matching the pattern
        const files = await glob(inputPattern);

        if (files.length === 0) {
            console.warn('No SVG files found.');
            return;
        }

        let spriteContent =
            '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">';

        const svgNames: string[] = [];

        files.forEach((file) => {
            const fileName = path
                .basename(file, path.extname(file))
                .replace('-svgrepo-com', '');
            const svgContent = fs.readFileSync(file, 'utf-8');

            // Extract the content inside <svg> tags
            const symbolContent = svgContent
                .replace(/^[\s\S]*?<svg[^>]*>/i, '')
                .replace(/<\/svg>[\s\S]*$/i, '')
                .replace(/fill="[^"]*"/gi, 'fill="currentColor"')
                .replace(/stroke="[^"]*"/gi, 'stroke="currentColor"')
                .trim();

            // Create a <symbol> element
            const symbol = `<symbol id="${fileName}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${symbolContent}</symbol>`;

            spriteContent += symbol;
            svgNames.push(fileName);
        });

        spriteContent += '</svg>';

        // Write the sprite to the output file
        fs.writeFileSync(
            path.join(publicDir, 'sprite.svg'),
            spriteContent,
            'utf-8'
        );

        // Write the sprite icon ids type
        fs.writeFileSync(
            path.join(iconDir, 'types.ts'),
            `export const SVG_ICON_NAMES = [
${svgNames.map((name) => `    '${name}'`).join(',\n')}
] as const;
            
export type SvgIconName = typeof SVG_ICON_NAMES[number];`,
            'utf-8'
        );

        console.log(`✅ SVG sprite successfully written to ${iconDir}`);
    } catch (err) {
        console.error(`Error writing SVG sprite: ${(err as Error).message}`);
    }
}

buildSprite();
