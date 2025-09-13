import { createRoot } from "react-dom/client";
import { AppRouter } from '@/app/providers/router';
import './styles/index.scss'

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(
  <AppRouter />
)
