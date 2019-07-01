import { KindVariant } from './kind-variant';

export interface PokemonKind {
    name: string;
    imagePath: string;
    variants: KindVariant[];
}