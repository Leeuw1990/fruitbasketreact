import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {

    const [counter, setCounter] = React.useState(0);
    const [counterTwo, setCounterTwo] = React.useState(0);
    const [counterThree, setCounterThree] = React.useState(0);
    const [counterFour, setCounterFour] = React.useState(0);

    const {register, handleSubmit, errors} = useForm();

    function resetButton () {
        setCounter(0);
        setCounterTwo(0);
        setCounterThree(0);
        setCounterFour(0);
    }

    function submitData (data) {
        console.log(data)
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>️
        <fieldset>
            <h3>Aardbeien</h3>
            <button
                className="increaseButton"
                type="button"
                value={counter}
                onClick={(e) => setCounter(counter - 1)}
            > -
        </button>
            <h3 ref={register}>{counter}</h3>
            <button className="decreaseButton"
                    type="button"
                    value={counter}
                    onClick={(e) => setCounter(counter + 1)}
            > +
        </button>
        </fieldset>
        <fieldset>
            <h3>Bananen</h3>
            <button
                className="increaseButtonTwo"
                type="button"
                value={counterTwo}
                onClick={(e) => setCounterTwo(counterTwo - 1)}
            > -
            </button>
            <h3 ref={register}>{counterTwo}</h3>
            <button className="decreaseButtonTwo"
                    type="button"
                    value={counterTwo}
                    onClick={(e) => setCounterTwo(counterTwo + 1)}
            > +
            </button>
        </fieldset>
        <fieldset>
            <h3>Appels</h3>
            <button
                className="increaseButtonThree"
                type="button"
                value={counterThree}
                onClick={(e) => setCounterThree(counterThree - 1)}
            > -
            </button>
            <h3 ref={register}>{counterThree}</h3>
            <button className="decreaseButtonThree"
                    type="button"
                    value={counterThree}
                    onClick={(e) => setCounterThree(counterThree + 1)}
            > +
            </button>
        </fieldset>
        <fieldset>
            <h3>Kiwi's</h3>
            <button
                className="increaseButtonFour"
                type="button"
                value={counterFour}
                onClick={(e) => setCounterFour(counterFour - 1)}
            > -
            </button>
            <h3 ref={register}>{counterFour}</h3>
            <button className="decreaseButtonFour"
                    type="button"
                    value={counterFour}
                    onClick={(e) => setCounterFour(counterFour + 1)}
            > +
            </button>
        </fieldset>
        <button
        className="resetButton"
        type="button"
        onClick={resetButton}
        > Reset
        </button>

        <form onSubmit={handleSubmit(submitData)}>
            <label htmlFor="name">Voornaam</label>
            <input name="name" id="name"
                   ref={register({required: true})}
            />
            {errors.name && <p>invoer voornaam is verplicht.</p>}

            <label htmlFor="surName">Achternaam</label>
            <input name="surName" id="surName"
                   ref={register({required: true})}
            />
            {errors.surName && <p>Invoer achternaam is verplicht.</p>}

            <label htmlFor="age">Leeftijd</label>
            <input name="age" id="age"
                   ref={register({required: true, min: 18})}
            />
            {errors.age && <p>Invoer leeftijd is verplicht.</p>}

            <label htmlFor="postalCode">Postcode</label>
            <input name="postalCode" id="postalCode"
                   ref={register({required: true})}
            />
            {errors.postalCode && <p>Invoer postcode is verplicht.</p>}

            <label htmlFor="number">Huisnummer zonder toevoeging</label>
            <input name="number" id="number"
                   ref={register({required: true})}
            />
            {errors.surName && <p>Invoer huisnummer is verplicht.</p>}

            <p>Bezorgfrequentie</p>
            <label htmlFor="radioButton">Iedere week</label>
            <input type="radio" name="radioButton" id="radioButton" value="everyWeek" ref={register}/>

            <label htmlFor="radioButtonFour">Om de week</label>
            <input type="radio" name="radioButton" id="radioButtonFour" value="weekly" ref={register}/>

            <label htmlFor="radioButtonTwo">Iedere maand</label>
            <input type="radio" name="radioButton" id="radioButtonTwo" value="monthly" ref={register}/>

            <label htmlFor="radioButtonThree">Anders</label>
            <input type="radio" name="radioButton" id="radioButtonThree" value="different" ref={register}/>

            <label htmlFor="textField">Opmerkingen</label>
            <textarea name="textField" rows="4" cols="40" id="textField" ref={register}/>

            <label htmlFor="terms">
                <input type="checkbox" id="terms" name="term"
                       ref={register({required: true})}
                />
            </label>
            {errors.term && <p>U moet akkoord gaan met de algemene voorwaarden.</p>}

            <button type="submit">Verzend</button>
        </form>
    </>
  );
}

export default App;
