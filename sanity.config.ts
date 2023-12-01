/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\editor\[[...index]]\page.tsx` route
 */
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

export default defineConfig({
  basePath: '/editor',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  // auth: {
  //   redirectOnSingle: false,
  //   mode: 'replace',
  //   providers: [
  //     {
  //       name: 'sanity',
  //       title: 'E-mail / password',
  //       url: 'https://api.sanity.io/v1/auth/login/sanity',
  //     },
  //   ],
  //   loginMethod: 'dual',
  // },
  plugins: [deskTool()],
})
