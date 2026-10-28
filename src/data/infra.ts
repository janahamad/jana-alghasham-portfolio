// Geometry of the jxtechstudio.com infrastructure map (shared by both languages).
// Text (sub-labels, descriptions) lives in src/i18n/{en,ar}.ts under `infra`.
// Deliberately no IPs, ports or client project names. "planned" = not in use yet.

export type InfraNode = {
  id: string;
  label: string;
  category: 'Edge' | 'Ingress' | 'Runtime' | 'Data' | 'Automation' | 'CI/CD' | 'Observability' | 'Planned' | 'Source';
  x: number;
  y: number;
  planned?: boolean;
};

export const NODE_W = 184;
export const NODE_H = 62;
export const VIEW = { w: 1180, h: 770 };

export const nodes: InfraNode[] = [
  { id: 'users', label: 'Users', category: 'Edge', x: 24, y: 200 },
  { id: 'cloudflare', label: 'Cloudflare', category: 'Edge', x: 266, y: 200 },
  { id: 'repo', label: 'Source repo', category: 'Source', x: 266, y: 40 },
  { id: 'jenkins', label: 'Jenkins', category: 'CI/CD', x: 520, y: 40 },
  { id: 'n8n', label: 'n8n', category: 'Automation', x: 984, y: 40 },
  { id: 'nginx', label: 'Nginx', category: 'Ingress', x: 520, y: 200 },
  { id: 'certbot', label: 'Certbot', category: 'Ingress', x: 520, y: 360 },
  { id: 'apps', label: 'Docker containers', category: 'Runtime', x: 762, y: 200 },
  { id: 'data', label: 'Data stores', category: 'Data', x: 984, y: 200 },
  { id: 'backups', label: 'Backups', category: 'Data', x: 984, y: 360 },
  { id: 'cadvisor', label: 'cAdvisor', category: 'Observability', x: 762, y: 520 },
  { id: 'nodeexp', label: 'node-exporter', category: 'Observability', x: 762, y: 644 },
  { id: 'prometheus', label: 'Prometheus', category: 'Observability', x: 984, y: 520 },
  { id: 'grafana', label: 'Grafana', category: 'Observability', x: 984, y: 644 },
  { id: 'terraform', label: 'Terraform', category: 'Planned', x: 24, y: 520, planned: true },
  { id: 'k8s', label: 'Kubernetes', category: 'Planned', x: 266, y: 520, planned: true },
];

export const edges: { from: string; to: string; label?: string; planned?: boolean; route?: 'L' | 'Z' }[] = [
  { from: 'users', to: 'cloudflare', label: 'HTTPS' },
  { from: 'cloudflare', to: 'nginx', label: 'proxied' },
  { from: 'nginx', to: 'apps', label: 'routes' },
  { from: 'certbot', to: 'nginx', label: 'certs' },
  { from: 'repo', to: 'jenkins', label: 'webhook' },
  { from: 'jenkins', to: 'apps', label: 'deploy' },
  { from: 'n8n', to: 'apps', label: 'webhooks' },
  { from: 'apps', to: 'data', label: 'r/w' },
  { from: 'data', to: 'backups', label: 'nightly dump' },
  { from: 'apps', to: 'cadvisor' },
  { from: 'cadvisor', to: 'prometheus', label: 'scrape' },
  { from: 'nodeexp', to: 'prometheus', label: 'scrape', route: 'Z' },
  { from: 'prometheus', to: 'grafana' },
  { from: 'terraform', to: 'k8s', label: 'provision', planned: true },
];

// `label` index points into ui.infra.groups for the current language.
export const groups = [
  { label: 0, x: 500, y: 14, w: 672, h: 748 },
  { label: 1, x: 746, y: 492, w: 426, h: 246, inner: true },
  { label: 2, x: 8, y: 492, w: 458, h: 112, planned: true },
];
