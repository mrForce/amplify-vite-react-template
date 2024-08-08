import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import {createPractice} from './functions/hello/resource';

defineBackend({
  auth,
  data,
  createPractice
});
