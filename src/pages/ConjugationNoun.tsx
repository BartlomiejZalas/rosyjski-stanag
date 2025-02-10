import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { conjugationsNoun as conjugationsDictionary } from '../dictionary/conjugations_noun';
import { equal, shuffle } from '../utils';
import { Input } from '../ui/Input';
import ConfettiExplosion from 'react-confetti-explosion';
import { KeyboardMapping, useKeyboardMapping } from '../ui/KeyboardMapping';

const placeholders = ['кто? что? (есть)', 'кого? чего? (нет)', 'кому? чему? (помогать)', 'кого? что? (вижу)', 'с кем? с чем? (говорить)', 'о кём? о чём? (думать)'];
const arrayOf12 = Array.from(Array(12).keys());
const arrayOf6 = Array.from(Array(6).keys());

export const ConjugationNoun = () => {

    const [conjugations, setConjugations] = useState(conjugationsDictionary);
    const [counter, setCounter] = useState(0);
    const [errors, setErrors] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
    const [success, setSuccess] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
    const [value, setValue] = useState(['', '', '', '', '', '', '', '', '', '', '', '']);
    const [showAnswer, setShowAnswer] = useState(false);
    const { keyboardMapping } = useKeyboardMapping();

    const selectedWord = conjugations[counter];
    const allOk = success.every(s => s);

    const setupWord = () => {
        setCounter(v => v >= conjugations.length - 1 ? 0 : v + 1);
        setValue(['', '', '', '', '', '', '', '', '', '', '', '']);
        setErrors([false, false, false, false, false, false, false, false, false, false, false, false]);
        setSuccess([false, false, false, false, false, false, false, false, false, false, false, false]);
        setShowAnswer(false);
    }

    const checkRow = (index: number, value: string) => {
        if (equal(value, selectedWord.ru[index])) {
            setErrors(e => e.map((s, i) => i === index ? false : s));
            setSuccess(e => e.map((s, i) => i === index ? true : s));
        } else {
            setErrors(e => e.map((s, i) => i === index ? true : s));
            setSuccess(e => e.map((s, i) => i === index ? false : s));
        }
    }

    const check = () => arrayOf12.forEach(i => checkRow(i, value[i]));

    const handleOnChange = (index: number, value: string) => {
        setValue(values => values.map((v, i) => i === index ? value : v));
        setErrors(values => values.map((v, i) => i === index ? false : v));
        checkRow(index, value);
    }

    useEffect(() => setConjugations([...shuffle(conjugationsDictionary)]), []);

    return (
        <div className="content">
            <KeyboardMapping />
            <h2>Odmień ({counter + 1}/{conjugationsDictionary.length}){' '}
                <span onClick={() => setShowAnswer(v => !v)}>
                    {allOk ? '😍' : showAnswer ? '🙊' : '🙈'}
                </span>
            </h2>
            <h3>{showAnswer ? selectedWord.ru.join(' ') : selectedWord.base}</h3>

            <div className="grid">
                <div></div>
                <div>L. pojedyncza</div>
                <div>L. mnoga</div>
                {arrayOf6.map(i => (
                    <>
                        <div>{placeholders[i]}</div>
                        <div>
                            <Input
                                placeholder=''
                                value={value[i]}
                                onChange={(v) => handleOnChange(i, v)}
                                error={errors[i]}
                                keyboardMapping={keyboardMapping}
                                success={success[i]} />
                        </div>
                        <div>
                            <Input
                                placeholder=''
                                value={value[i + 6]}
                                onChange={(v) => handleOnChange(i + 6, v)}
                                error={errors[i + 6]}
                                keyboardMapping={keyboardMapping}
                                success={success[i + 6]} />
                        </div>
                    </>
                ))}
            </div>
            {allOk && <div className="centered"><ConfettiExplosion /></div>}
            <button className={allOk ? 'check' : undefined} onClick={allOk ? setupWord : check}>
                {allOk ? 'Dalej' : 'Sprawdź'}
            </button>
            <Link to="/">« Powrót</Link>
        </div>
    )
}