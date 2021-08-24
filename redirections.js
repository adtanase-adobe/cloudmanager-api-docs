/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

(() => {
  const identifier = '#!AdobeDocs/cloudmanager-api-docs/master/'
  if (window.location.hash.startsWith(identifier)) {
    const newLocation = window.location.hash
      .replace('#!AdobeDocs/cloudmanager-api-docs/master/', '')
      .replace('understanding-the-api.md', 'guides/getting-started/understanding-the-api.md')
      .replace('create-api-integration.md', 'guides/getting-started/create-api-integration.md')
      .replace('create-event-integration.md', 'guides/getting-started/create-event-integration.md')
      .replace('getting-started-with-postman.md', 'guides/getting-started/getting-started-with-postman.md')
      .replace('receiving-events.md', 'guides/api-usage/receiving-events.md')
      .replace('understanding-metric-data.md', 'guides/api-usage/understanding-metric-data.md')
      .replace('editing-and-deleting-pipelines.md', 'guides/api-usage/editing-and-deleting-pipelines.md')
      .replace('advancing-and-cancelling-steps.md', 'guides/api-usage/advancing-and-cancelling-steps.md')
      .replace('permissions.md', 'guides/getting-started/permissions.md')
      .replace('tutorial/0-setup.md', 'tutorial/')
      .replace('README.md', '')
      .replace('.md', '/')

    window.location.href = decodeURIComponent(window.location.href.split('#')[0].replace('docs.html', newLocation))
  }
})()