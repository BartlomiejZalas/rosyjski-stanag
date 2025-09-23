import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { words as wordsDictionary } from '../dictionary/words';
import { equal, humanize } from '../utils';
import { Input } from '../ui/Input';
import ConfettiExplosion from 'react-confetti-explosion';
import { ALL_LESSONS, allLessons, regularLessons, Lesson } from '../model/Lesson';
import { CategorizedWords, Word } from '../model/Word';
import { KeyboardMapping, useKeyboardMapping } from '../ui/KeyboardMapping';

const MARKED_WORDS_KEY = 'markedWords';

export const Words = () => {

    const storedMarkedWords: string[] = JSON.parse(localStorage.getItem(MARKED_WORDS_KEY) || '[]');

    const [words, setWords] = useState(wordsDictionary[regularLessons[0]]);
    const [category, setCategory] = useState<Lesson | typeof ALL_LESSONS>(regularLessons[0]);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [value, setValue] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const [markedWords, setMarkedWords] = useState(storedMarkedWords);
    const { keyboardMapping } = useKeyboardMapping();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const goNext = () => {
        setCounter(v => v >= words.length - 1 ? 0 : v + 1);
        setValue('');
        setError(false);
        setSuccess(false);
        setShowAnswer(false);
        setTimeout(() => inputRef.current?.focus(), 100);
    }

    const goPrev = () => {
        setCounter(v => v === 0 ? words.length - 1 : v - 1);
        setValue('');
        setError(false);
        setSuccess(false);
        setShowAnswer(false);
    }

    const checkWord = (value: string) => {
        if (equal(value, selectedWord.ru)) {
            setSuccess(true);
            setError(false);
            buttonRef.current?.focus();
        } else {
            setSuccess(false);
            setError(true);
        }
    }

    const toggleMarkWord = () => {
        if (markedWords.includes(selectedWord.ru)) {
            setMarkedWords(current => {
                const newWords = current.filter(w => w !== selectedWord.ru);
                localStorage.setItem(MARKED_WORDS_KEY, JSON.stringify(newWords));
                return newWords;
            });
        } else {
            setMarkedWords(current => {
                const newWords = [...current, selectedWord.ru];
                localStorage.setItem(MARKED_WORDS_KEY, JSON.stringify(newWords));
                return newWords;
            });
        }
    }

    useEffect(() => {
        const allWords: Word[] = allLessons.reduce((all: Word[], lesson) => [...all, ...wordsDictionary[lesson as Lesson]], []);
        if (category === ALL_LESSONS) {
            setWords([...allWords]);
        } else if (category === Lesson.MARKED) {
            setWords([...allWords.filter(w => markedWords.includes(w.ru))]);
        } else {
            setWords([...wordsDictionary[category as keyof CategorizedWords]]);
        }
        setCounter(0);
    }, [category]);

    const selectedWord = words[counter];

    const menu = (
        <select onChange={(e) => setCategory(e.target.value as Lesson)} value={category}>
            {regularLessons.map((lesson) => <option value={lesson}>{humanize(Lesson[lesson])}</option>)}
            <option value={Lesson.MARKED} disabled={markedWords.length === 0}>Oznaczone flagą
                ({markedWords.length})
            </option>
            <option value={ALL_LESSONS}>Całość</option>
        </select>);

    if (!selectedWord) {
        return menu;
    }

    const isMarked = markedWords.includes(selectedWord.ru);

    return (
        <div className="content">
            <KeyboardMapping />
            <h2 style={{ whiteSpace: 'nowrap' }}>
                <a href="#" onClick={goPrev}>&laquo;</a>{' '}
                Przetłumacz ({counter + 1}/{words.length}){' '}
                <span onClick={() => setShowAnswer(v => !v)}>
                    {success ? '😍' : showAnswer ? '🙊' : '🙈'}
                </span>{' '}
                <span onClick={toggleMarkWord} style={{ color: isMarked ? 'red' : 'gray' }}>
                    ⚑
                </span>{' '}
                <a href="#" onClick={goNext}>&raquo;</a>
            </h2>
            {menu}
            <h3>
                {showAnswer ? selectedWord.ru : selectedWord.pl}
            </h3>

            <Input
                placeholder=""
                error={error}
                success={success}
                value={value}
                keyboardMapping={keyboardMapping}
                ref={inputRef}
                onChange={v => {
                    setValue(v);
                    setError(false);
                    checkWord(v);
                }}
            />

            {success && <div className="centered"><ConfettiExplosion /></div>}

            <button ref={buttonRef} className={success ? 'check' : undefined} onClick={success ? goNext : () => checkWord(value)}>
                {success ? 'Dalej' : 'Sprawdź'}
            </button>
            <Link to="/">« Powrót</Link>
        </div>
    )
}