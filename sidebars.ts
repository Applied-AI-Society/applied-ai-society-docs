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
      items: [
        {
          type: 'category',
          label: 'Chapter Leader',
          link: {
            type: 'doc',
            id: 'playbooks/chapter-leader/index',
          },
          items: [
            'playbooks/chapter-leader/applied-ai-live',
            'playbooks/chapter-leader/finding-a-photographer',
            'playbooks/chapter-leader/recording-an-event',
            'playbooks/chapter-leader/case-study-interviews',
          ],
        },
        {
          type: 'category',
          label: 'Practitioner',
          link: {
            type: 'doc',
            id: 'playbooks/practitioner/index',
          },
          items: [],
        },
      ],
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
    {
      type: 'category',
      label: 'Color Scheme',
      link: {
        type: 'doc',
        id: 'colors/index',
      },
      items: [],
    },
  ],
};

export default sidebars;

