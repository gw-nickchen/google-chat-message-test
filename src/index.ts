import * as core from '@actions/core';

import { createCardTemplate } from './card-template';
import type { ActionInputs } from './types';

function parseInputs(): ActionInputs {
  return {
    apiUrl: core.getInput('api-url', { required: true }),
    title: core.getInput('title', { required: true }),
    subTitle: core.getInput('subtitle'),
    contents: core.getMultilineInput('contents', { required: true }),
    actionPage: core.getInput('action-page', { required: true }),
  };
}

async function main() {
  core.info('Running google-chat-notification');
  const inputs = parseInputs();
  const card = createCardTemplate(inputs);

  fetch(inputs.apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
}

main().catch((err) => {
  core.setFailed(`google-chat-notification failed: ${err.message}`);
});
