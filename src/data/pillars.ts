export interface Pillar {
  key: string;
  tech: string[];
}

export const pillars: Pillar[] = [
  {
    key: 'backend',
    tech: ['PHP', 'Symfony', 'NestJS', 'Express.js', 'Laravel', 'MySQL', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    key: 'data',
    tech: ['Python', 'Apache Kafka', 'TimescaleDB', 'MQTT', 'Pandas', 'ETL Pipelines']
  },
  {
    key: 'ai',
    tech: ['PyTorch', 'Transformers', 'Scikit-learn', 'Milvus / Vector DBs']
  }
];
