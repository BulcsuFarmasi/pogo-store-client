import { PokemonKind } from './pokemon-kind';
import { Gender } from './gender';

export interface Pokemon {
    id:string;
    cp:number;
    iv:number;
    kind:PokemonKind;
    variant:string;
    gender:Gender; 
}