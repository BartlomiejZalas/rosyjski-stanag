import { Conjugation } from '../model/Conjugation';

// remove accens chars: Find and Replace (regexp mode): [\u0300-\u036f]

export const conjugations: Conjugation[] = [

    // lekcja 1
    {base: 'смотреть', ru: ['смотрю', 'смотришь', 'смотрит', 'смотрим', 'смотрите', 'смотрят']},
    {base: 'читать', ru: ['читаю', 'читаешь', 'читает', 'читаем', 'читаете', 'читают']},
    {base: 'хотеть', ru: ['хочу', 'хочешь', 'хочет', 'хотим', 'хотите', 'хотят']},
    {base: 'видеть', ru: ['вижу', 'видишь', 'видит', 'видим', 'видите', 'видят']},
   ]