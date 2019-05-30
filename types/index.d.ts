import Vue from 'vue';
import PuSkeleton from './skeleton';
import PuSkeletonTheme from './skeleton-theme';

export function install(vue: typeof Vue): void;

export class Skeleton extends PuSkeleton {};
export class SkeletonTheme extends PuSkeletonTheme {};
