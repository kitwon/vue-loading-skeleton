import Vue, { PluginObject, PluginFunction } from 'vue';
import PuSkeleton from './skeleton';
import PuSkeletonTheme from './skeleton-theme';

export class Skeleton extends PuSkeleton {}
export class SkeletonTheme extends PuSkeletonTheme {}

declare const SkeletonPlugin: PluginObject<never>
export default SkeletonPlugin
