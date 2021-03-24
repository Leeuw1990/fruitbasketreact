import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";


function App() {

    const [counter, setCounter] = React.useState(0);
    const [counterTwo, setCounterTwo] = React.useState(0);
    const [counterThree, setCounterThree] = React.useState(0);
    const [counterFour, setCounterFour] = React.useState(0);

    const {register, handleSubmit, errors, watch} = useForm({
        mode: "onChange"
    });

    const selectDifferent = watch("radioButton");

    function resetButton () {
        setCounter(0);
        setCounterTwo(0);
        setCounterThree(0);
        setCounterFour(0);
    }

    function submitData (data) {
        console.log(data, counter, counterTwo, counterThree, counterFour);
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>️

        <fieldset>
            <h3>Aardbeien</h3>
            <button
                name="increaseButton"
                className="increaseButton"
                type="button"
                value={counter}
                onClick={(e) => (counter > 0 ? setCounter(counter - 1) : setCounter(0))}
            > -
        </button>
            <h3>{counter}</h3>
            <button
                name="decreaseButton"
                className="decreaseButton"
                type="button"
                value={counter}
                onClick={(e) => setCounter(counter + 1)}
            > +
        </button>
        </fieldset>
        <fieldset>
            <h3>Bananen</h3>
            <button
                name="bananaMin"
                className="increaseButtonTwo"
                type="button"
                value={counterTwo}
                onClick={(e) => (counterTwo > 0 ? setCounterTwo(counterTwo - 1) : setCounterTwo(0))}
            > -
            </button>
            <h3>{counterTwo}</h3>
            <button
                name="bananaMin"
                className="decreaseButtonTwo"
                type="button"
                value={counterTwo}
                onClick={(e) => setCounterTwo(counterTwo + 1)}
            > +
            </button>
        </fieldset>
        <fieldset>
            <h3>Appels</h3>
            <button
                name="appleMin"
                className="increaseButtonThree"
                type="button"
                value={counterThree}
                onClick={(e) => (counterThree > 0 ? setCounterThree(counterThree - 1) : setCounterThree(0))}
            > -
            </button>
            <h3>{counterThree}</h3>
            <button
                name="bananaPlus"
                className="decreaseButtonThree"
                type="button"
                value={counterThree}
                onClick={(e) => setCounterThree(counterThree + 1)}
            > +
            </button>
        </fieldset>
        <fieldset>
            <h3>Kiwi's</h3>
            <button
                name="kiwiMin"
                className="increaseButtonFour"
                type="button"
                value={counterFour}
                onClick={(e) => (counterFour > 0 ? setCounterFour(counterFour - 1) : setCounterFour(0))}
            > -
            </button>
            <h3>{counterFour}</h3>
            <button
                name="kiwiPlus"
                className="decreaseButtonFour"
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
            {errors.name && <p>Voornaam is verplicht.</p>}

            <label htmlFor="surName">Achternaam</label>
            <input name="surName" id="surName"
                   ref={register({required: true})}
            />
            {errors.surName && <p>Achternaam is verplicht.</p>}

            <label htmlFor="age">Leeftijd</label>
            <input name="age" id="age"
                   ref={register({required: true, min: 18})}
            />
            {errors.age && <p>Leeftijd is verplicht.</p>}

            <label htmlFor="postalCode">Postcode</label>
            <input name="postalCode" id="postalCode"
                   ref={register(
                       {
                       required: {
                           value: true,
                           message: "Postcode verplicht"
                       },
                       pattern: {
                           value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                           message: "Postcode onjuist."
                       }
                   })}
            />
            {errors.postalCode && <p>{errors.postalCode.message}</p>}

            <label htmlFor="number">Huisnummer zonder toevoeging</label>
            <input name="number" id="number"
                   ref={register({required: true})}
            />
            {errors.surName && <p>Huisnummer is verplicht.</p>}

            <p>Bezorgfrequentie</p>
            <label htmlFor="radioButton">Iedere week</label>
            <input type="radio" name="radioButton" id="radioButton" value="everyWeek" ref={register}/>

            <label htmlFor="radioButtonFour">Om de week</label>
            <input type="radio" name="radioButton" id="radioButtonFour" value="weekly" ref={register}/>

            <label htmlFor="radioButtonTwo">Iedere maand</label>
            <input type="radio" name="radioButton" id="radioButtonTwo" value="monthly" ref={register}/>

            <label htmlFor="radioButtonThree">Anders</label>
            <input type="radio" name="radioButton" id="radioButtonThree" value="different" ref={register}/>

            {selectDifferent === "different" && (
            <input
                name="different" id="different"
                ref={register({required: true})}
                />)}

            <label htmlFor="textField">Opmerkingen</label>
            <textarea name="textField" rows="4" cols="40" id="textField" ref={register}/>

            <label htmlFor="terms">Ga akkoord met de algemene voorwaarden.
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
