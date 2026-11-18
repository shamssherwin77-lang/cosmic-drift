import {mergeConfig} from 'vite';
import production from './vite.deploy.config';
export default mergeConfig(production,{base:'/cosmic-drift/previews/gyro-descent/',build:{outDir:'dist-gyro'}});
