import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);
  console.log('marquee');
  console.log(config);
  console.log(config.boolean);
}
