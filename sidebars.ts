import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Case Studies',
      link: {
        type: 'doc',
        id: 'case-studies/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Playbooks',
      link: {
        type: 'doc',
        id: 'playbooks/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Principles',
      link: {
        type: 'doc',
        id: 'principles/index',
      },
      items: [],
    },
  ],
};

export default sidebars;

