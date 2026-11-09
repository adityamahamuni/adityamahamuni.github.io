import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
jest.mock('./analytics', () => ({ initializeAnalytics: jest.fn(), logPageView: jest.fn() }));
jest.mock('react-ga4', () => ({ event: jest.fn() }));

test('public portfolio shows the approved experience and resume access on both routes', () => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => root.render(<App />));
  expect(container.textContent).toContain('Building reliable GenAI');
  expect(container.querySelector('a[href="/Resume_Aditya_Mahamuni.pdf"]')).not.toBeNull();
  act(() => {
    window.history.pushState({}, '', '/about');
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
  expect(container.textContent).toContain('Machine Learning Engineer · NatWest');
  expect(container.textContent).toContain('Dec 2024 - Present');
  expect(container.textContent).toContain('OpenAI Agents SDK');
  expect(container.textContent).toContain('reduced issue diagnosis and resolution turnaround time by 70%');
  expect(container.textContent).toContain('automated complaints investigation');
  expect(container.textContent).toContain('observability tools and evaluation frameworks');
  expect(container.textContent).toContain('COBOL code completion');
  expect(container.textContent).toContain('AWS SageMaker endpoints');
  expect(container.textContent).not.toMatch(/7\+ banking systems|failure-trace|ID chaining|LoRA concepts/);
  act(() => container.querySelector('[aria-label="Switch to dark theme"]').click());
  expect(document.documentElement.classList.contains('dark')).toBe(true);
  expect(container.querySelector('a[href="/Resume_Aditya_Mahamuni.pdf"]')).not.toBeNull();
  act(() => root.unmount());
  container.remove();
});
