import { Conjugation } from '../model/Conjugation';

// remove accens chars: Find and Replace (regexp mode): [\u0300-\u036f]

export const conjugations: Conjugation[] = [

    { base: 'смотреть', ru: ['смотрю', 'смотришь', 'смотрит', 'смотрим', 'смотрите', 'смотрят'] },
    { base: 'читать', ru: ['читаю', 'читаешь', 'читает', 'читаем', 'читаете', 'читают'] },
    { base: 'хотеть', ru: ['хочу', 'хочешь', 'хочет', 'хотим', 'хотите', 'хотят'] },
    { base: 'видеть', ru: ['вижу', 'видишь', 'видит', 'видим', 'видите', 'видят'] },
    { base: 'слушать', ru: ['слушаю', 'слушаешь', 'слушает', 'слушаем', 'слушаете', 'слушают'] },
    { base: 'говорить', ru: ['говорю', 'говоришь', 'говорит', 'говорим', 'говорите', 'говорят'] },
    { base: 'говорить', ru: ['говорю', 'говоришь', 'говорит', 'говорим', 'говорите', 'говорят'] },
    { base: 'мочь', ru: ['могу', 'можешь', 'может', 'можем', 'можете', 'могут'] },
    { base: 'играть', ru: ['играю', 'играешь', 'играет', 'играем', 'играете', 'играют'] },
    { base: 'есть', ru: ['ем', 'ешь', 'ест', 'едим', 'едите', 'едят'] },
    { base: 'пить', ru: ['пью', 'пьёшь', 'пьёт', 'пьём', 'пьёте', 'пьют'] },

]
